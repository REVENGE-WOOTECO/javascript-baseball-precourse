import { $, isValidUserInput } from "./utils.js";

const initialInput = [];

export default class BaseballGame {
  #userInput;
  #computerNumber;
  strike;
  ball;

  constructor() {
    this.#userInput = [...initialInput];
    this.#computerNumber = [...initialInput];
    this.setEvent();
    this.getComputerNumber();
  }

  setEvent() {
    $("#submit").addEventListener("click", this.play.bind(this));
  }

  setUserInput(newInput) {
    this.#userInput = [...newInput];
  }

  setComputerNumber(newNumber) {
    this.#computerNumber = [...newNumber];
  }

  setResult(strike, ball) {
    this.strike = strike;
    this.ball = ball;
  }

  getUserInput() {
    const newUserInputs = $("#user-input")
      .value.split("")
      .map((input) => Number(input));

    if (!isValidUserInput(newUserInputs)) {
      $("#user-input").value = "";
      return;
    }

    this.setUserInput(newUserInputs);
  }

  getComputerNumber() {
    let newComputerNumber = [];

    while (true) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!newComputerNumber.includes(randomNumber)) {
        newComputerNumber.push(randomNumber);
      }
      if (newComputerNumber.length === 3) break;
    }

    this.setComputerNumber(newComputerNumber);
  }

  getResult() {
    let strike = 0;
    let ball = 0;

    [...this.#userInput].map((number, index) => {
      if (this.#computerNumber.indexOf(number) === index) {
        strike++;
      } else if (this.#computerNumber.includes(number)) {
        ball++;
      }
    });

    this.setResult(strike, ball);
  }

  showResult() {
    let result = "";
    if (this.strike === 0 && this.ball === 0) {
      result = "낫싱";
    }
    if (this.strike === 3) {
      result = "정답";
    }
    if (this.strike > 0 || this.ball > 0) {
      result = `${this.strike}스트라이크 ${this.ball}볼`;
    }
    $("#result").innerHTML = result;
  }

  isEndGame() {
    if (this.strike === 3 && this.ball === 0) {
      return true;
    }

    return false;
  }

  playRound() {
    this.getUserInput();
    this.getResult();
    this.showResult();
    const result = this.isEndGame();
    console.log(this.#userInput, this.#computerNumber);
    console.log(this.strike, this.ball);
    return result;
  }

  play(e) {
    e.preventDefault();
    if (this.playRound()) {
      console.log("끝");
    }
  }
}
