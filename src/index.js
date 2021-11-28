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

const computerNumber = computerRandomNumber();

function computerRandomNumber () {
    let uniqueValueStack = [];

    while (uniqueValueStack.length < 3) {
        let value = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!uniqueValueStack.includes(value)) {
            uniqueValueStack.push(value);
        }
    }

    return uniqueValueStack.join('');
}

function gameResultPrint (strikeNum, ballNum) {
    if (ballNum !== 0 && strikeNum !== 0) {
        return `${ballNum}볼 ${strikeNum}스트라이크`;
    } else if (ballNum === 0 && strikeNum !== 0) {
        return `${strikeNum}스트라이크`;
    } else if (ballNum !== 0 && strikeNum === 0) {
        return `${ballNum}볼`;
    } else return '낫싱';
}

export default function BaseballGame () {

    this.play = function (computerInputNumbers, userInputNumbers) {
        let strikeCount = 0;
        let ballCount = 0;

        userInputNumbers.forEach((v, i) => {

            if (computerInputNumbers.includes(v) && computerInputNumbers.indexOf(v) === i) {
                strikeCount++;
            } else if (computerInputNumbers.includes(v) && computerInputNumbers.indexOf(v) !== i) {
                ballCount++;
            }
        })

        return gameResultPrint(strikeCount, ballCount) // string형식으로 리턴;
    };
}

import BaseBallGame from './index.js';

function inputExceptionHandling (input) {
    if (input.length !== 3 || isNaN(input)) {
        return true;
    } else if (input.includes(0) || input.includes(' ')) {
        return true;
    } else if ([...new Set(input.split(''))].length !== input.length) {
        return true;
    }

    return false;
}

function windowNotRefresh () {
    document.querySelector('#user-input-form').addEventListener('submit', (e) => {
        e.preventDefault();
    })
}

function answerVerification (input) {
    let resultElement = document.querySelector('#result');

    if (input === '3스트라이크') {
        resultElement.innerHTML = "정답을 맞추셨습니다!<br>게임을 시작하시겠습니까?<button id='game-restart-button'>게임 재시작</button>";
        document.querySelector('#game-restart-button').addEventListener('click', (e) => {
            window.location.reload();
        });

    } else {
        resultElement.innerText = input;
    }
}

function resultPrintWindow () {
    document.querySelector('#submit').addEventListener('click', (e) => {

        let inputValue = document.querySelector('#user-input').value;
        let resultString = new BaseBallGame().play(computerNumber, inputValue.split(''));

        if (inputExceptionHandling(inputValue)) {
            alert('다시 입력하세요');
            return
        } else {
            answerVerification(resultString);
        }
    })
}

windowNotRefresh();
resultPrintWindow();