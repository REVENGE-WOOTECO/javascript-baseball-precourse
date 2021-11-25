import { createRandNum, numToListOfNum, match } from "./tools.js";

let randomNum = [];

export default function BaseballGame() {
  this.gameStart = function () {
    // 게임 초기화 및 시작
    randomNum = createRandNum();
    console.log("게임시작");
  };

  this.play = (computerRandNum, userInputNum) => {
    // 확인 버튼 클릭 : 사용자가 입력한 숫자와 상대방의 숫자와 비교하여 힌트 출력
    // Args :
    //     computerRandNum (Number) : 컴퓨터의 랜덤 값
    //     computerRandNum (Number) : 유저 입력 값
    // Returns :
    //     Strings : 힌트 (볼을 먼저쓰고 스트라이크를 뒤에 쓰기)

    const userInput = numToListOfNum(userInputNum);
    const { matchInclude: ball, matchExact: strike } = match(
      computerRandNum,
      userInput
    );
    return ball && strike
      ? `${ball}볼${strike}스트라이크`
      : ball
      ? `${ball}볼`
      : strike
      ? `${strike}스트라이크`
      : "낫싱";
  };
}

const game = new BaseballGame();

// 게임 시작
game.gameStart();
