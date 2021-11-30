// 기능요구사항

// 입력기능
// (ㅇ) 예외) 숫자 이외의 값 or 세자리 숫자가 아닌 경우 or 중복된 숫자 or 0이 입력된 경우
// (ㅇ) 사용자가 잘못된 값을 입력하면 alert로 에러 메시지를 보여주고 다시 입력

// 동작
// (ㅇ) MissionUtils 라이브러리의 랜덤 사용하여 랜덤 숫자 3개 생성한다
// (ㅇ) play메서드에서 사용자가 입력한 수와 컴퓨터의 수를 비교해  스트라이크, 볼, 낫싱 문자열로 리턴한다
// (ㅇ) 사용자가 모두 맞히면(=3스트라이크) 게임이 종료되고, 재시작 버튼이 노출된다.
// (ㅇ) 재시작 버튼을 통해 다시 시작할 수 있다.

// 출력
// (ㅇ) 입력한 세 숫자에 따라 볼, 스트라이크, 낫싱 출력(볼이 스트라이크보다 앞에 출력)
// (ㅇ) 정답 화면 및 재시작 버튼 출력

document.querySelector('#user-input-form').addEventListener('submit', e => {
  e.preventDefault();
});

function returnGameResult(strikeNum, ballNum) {
  if (ballNum !== 0 && strikeNum !== 0) {
    return `${ballNum}볼 ${strikeNum}스트라이크`;
  }
  if (ballNum === 0 && strikeNum !== 0) {
    return `${strikeNum}스트라이크`;
  }
  if (ballNum !== 0 && strikeNum === 0) {
    return `${ballNum}볼`;
  }
  return '낫싱';
}

function play(computerInputNumbers, userInputNumbers) {
  let strikeCount = 0;
  let ballCount = 0;

  userInputNumbers.forEach((v, i) => {
    if (
      computerInputNumbers.includes(v) &&
      computerInputNumbers.indexOf(v) === i
    ) {
      strikeCount += 1;
    } else if (
      computerInputNumbers.includes(v) &&
      computerInputNumbers.indexOf(v) !== i
    ) {
      ballCount += 1;
    }
  });

  return returnGameResult(strikeCount, ballCount);
}

function handlingInputException(input) {
  return (
    input.length !== 3 ||
    isNaN(input) ||
    input.includes(0) ||
    input.includes(' ') ||
    [...new Set(input.split(''))].length !== input.length
  );
}

function baseBallGame() {
  const COMPUTER_NUMBER = {
    MIN: 1,
    MAX: 9,
    LENGTH: 3,
  };

  function getComputerRandomNumber() {
    const uniqueValues = new Set();
    while (uniqueValues.size < COMPUTER_NUMBER.LENGTH) {
      const value = MissionUtils.Random.pickNumberInRange(
        COMPUTER_NUMBER.MIN,
        COMPUTER_NUMBER.MAX,
      );
      if (!uniqueValues.has(value)) {
        uniqueValues.add(value);
      }
    }

    return [...uniqueValues].join('');
  }

  const computerNumber = getComputerRandomNumber();

  function playGameAgain() {
    const resultElement = document.querySelector('#result');

    document.querySelector('#user-input').value = '';
    resultElement.innerText = '';

    baseBallGame();
  }

  function answerVerification(input) {
    const resultElement = document.querySelector('#result');

    if (input === '3스트라이크') {
      resultElement.innerHTML =
        "정답을 맞추셨습니다!<br>게임을 시작하시겠습니까?<button id='game-restart-button'>게임 재시작</button>";
      document
        .querySelector('#game-restart-button')
        .addEventListener('click', () => {
          playGameAgain();
        });
    } else {
      resultElement.innerText = input;
    }
  }

  function printingResultOnWindow() {
    document.querySelector('#submit').addEventListener('click', () => {
      const inputValue = document.querySelector('#user-input').value;
      const resultString = play(computerNumber, inputValue.split(''));

      if (handlingInputException(inputValue)) {
        alert('다시 입력하세요');
      } else {
        answerVerification(resultString);
      }
    });
  }

  printingResultOnWindow();
}

baseBallGame();
