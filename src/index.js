import {
  getDistinctNums,
  numToListOfNum,
  matchBalls,
  showGameResult,
  checkValid,
} from "./tools.js";

import { BASEBALL_GAME_INPUT } from "./constants/baseball.js";

export default class BaseballGame {
  constructor() {
    this.randomNum = [];

    this.inputText = document.querySelector("#user-input");
    this.submitButton = document.querySelector("#submit");
    this.resultDiv = document.querySelector("#result");
    this.restartButton = document.createElement("button");

    this.restartButton.innerHTML = "게임 재시작";
    this.restartButton.id = "game-restart-button";

    // 버튼 이벤트 설정
    this.submitButton.addEventListener("click", (event) =>
      this.onSubmited(event)
    );
    this.restartButton.addEventListener("click", (event) =>
      this.onRestarted(event)
    );
  }
  onSubmited = function (event) {
    event.preventDefault();
    const hint = this.play(this.randomNum, this.inputText.value);
    showGameResult(hint, this.resultDiv, this.restartButton);
  };
  onRestarted = function (event) {
    event.preventDefault();
    this.start();
  };

  start = function () {
    // 게임 초기화 및 시작
    this.inputText.value = "";
    this.resultDiv.innerHTML = "";
    this.randomNum = getDistinctNums(
      BASEBALL_GAME_INPUT.MIN,
      BASEBALL_GAME_INPUT.MAX,
      BASEBALL_GAME_INPUT.LENGTH
    );
  };

  play = function (computerRandNum, userInputNum) {
    // 확인 버튼 클릭 : 사용자가 입력한 숫자와 상대방의 숫자와 비교하여 힌트 출력
    // Args :
    //     computerRandNum (Number) : 컴퓨터의 랜덤 값
    //     computerRandNum (Number) : 유저 입력 값
    // Returns :
    //     result (Strings) : 힌트 (볼을 먼저쓰고 스트라이크를 뒤에 쓰기)
    const userInput = numToListOfNum(userInputNum);
    const error = checkValid(userInput);
    if (error) {
      alert(error);
      return;
    }
    return `${matchBalls(computerRandNum, userInput)}`;
  };
}

const game = new BaseballGame();
game.start();
