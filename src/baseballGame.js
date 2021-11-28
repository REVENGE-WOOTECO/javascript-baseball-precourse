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
      return;
    }

    this.setUserInput(newUserInputs);
  }

  getComputerNumber() {
    let newComputerNumber = [];

    while (newComputerNumber.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!newComputerNumber.includes(randomNumber)) {
        newComputerNumber.push(randomNumber);
      }
    }

    this.setComputerNumber(newComputerNumber);
  }

  getResult() {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (this.#computerNumber.indexOf(this.#userInput[i]) === i) {
        strike++;
        continue;
      }
      if (this.#computerNumber.includes(this.#userInput[i])) {
        ball++;
      }
    }

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

  play(e) {
    e.preventDefault();
    this.getUserInput();
    this.getResult();
    this.showResult();
    console.log(this.#userInput, this.#computerNumber);
    console.log(this.strike, this.ball);
  }
}
