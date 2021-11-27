import {
  createRandNum,
  numToListOfNum,
  matchBalls,
  showGameResult,
  checkValid,
} from "./tools.js";

const inputText = document.querySelector("#user-input");
const submitButton = document.querySelector("#submit");
const resultDiv = document.querySelector("#result");
const restartButton = document.createElement("button");

restartButton.innerHTML = "게임 재시작";
restartButton.id = "game-restart-button";

export default function BaseballGame() {
  let randomNum = [];

  this.start = function () {
    // 게임 초기화 및 시작
    inputText.value = "";
    resultDiv.innerHTML = "";
    randomNum = createRandNum();
    console.log(randomNum);
  };

  this.play = function (computerRandNum, userInputNum) {
    // 확인 버튼 클릭 : 사용자가 입력한 숫자와 상대방의 숫자와 비교하여 힌트 출력
    // Args :
    //     computerRandNum (Number) : 컴퓨터의 랜덤 값
    //     computerRandNum (Number) : 유저 입력 값
    // Returns :
    //     result (Strings) : 힌트 (볼을 먼저쓰고 스트라이크를 뒤에 쓰기)
    const userInput = numToListOfNum(userInputNum);
    const result = checkValid(userInput)
      ? matchBalls(computerRandNum, userInput)
      : "";
    return result;
  };

  // 게임 시작
  this.start();

  // 버튼 이벤트 설정
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const hint = this.play(randomNum, inputText.value);
    showGameResult(hint, resultDiv, restartButton);
  });

  restartButton.addEventListener("click", (event) => {
    event.preventDefault();
    this.start();
  });
}

new BaseballGame();
