// 기능요구사항

// 입력기능
// 예외) 숫자 이외의 값 or 세자리 숫자가 아닌 경우 or 중복된 숫자 or 0이 입력된 경우
// () 사용자가 잘못된 값을 입력하면 alert로 에러 메시지를 보여주고 다시 입력

// 동작
// () MissionUtils 라이브러리의 랜덤 사용하여 랜덤 숫자 3개 생성한다
// () play메서드에서 사용자가 입력한 수와 컴퓨터의 수를 비교해  스트라이크, 볼, 낫싱 문자열로 리턴한다
// () 사용자가 모두 맞히면(=3스트라이크) 게임이 종료되고, 재시작 버튼이 노출된다.
// () 재시작 버튼을 통해 다시 시작할 수 있다.

// 출력
// 입력한 세 숫자에 따라 볼, 스트라이크, 낫싱 출력(볼이 스트라이크보다 앞에 출력)
// 정답 화면 및 재시작 버튼 출력
const computerRandomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3).join("");

export default function BaseballGame() {
    this.play = function (computerInputNumbers, userInputNumbers) {
        computerInputNumbers = computerRandomNumber;
        userInputNumbers = document.querySelector("#user-input").value.split("");
        let [strikeCount, ballCount] = [0, 0];

        userInputNumbers.forEach((v, i) => {

            if (computerInputNumbers.includes(v) && computerInputNumbers.indexOf(v) === i) {
                strikeCount++;
            } else if (computerInputNumbers.includes(v) && computerInputNumbers.indexOf(v) !== i) {
                ballCount++;
            }
        })

        return gameResultPrint(strikeCount, ballCount);
    };
}

import currency from "./index.js";

function gameResultPrint(strikeNum, ballNum) {
    if (ballNum !== 0 && strikeNum !== 0) {
        return `${ballNum}볼 ${strikeNum}스트라이크`;
    } else if (ballNum === 0 && strikeNum !== 0) {
        return `${strikeNum}스트라이크`;
    } else if (ballNum !== 0 && strikeNum === 0) {
        return `${ballNum}볼`;
    } else return '낫싱';
}
function inputException(value) {
    if (value.length !== 3 || isNaN(value) || value.includes(0)) {
        return true;
    } else if ([...new Set(value.split(""))].length !== value.length) {
        return true;
    } else false;
}

function windowNotRefresh() {
    document.querySelector("#user-input-form").addEventListener("submit", (e) => {
        e.preventDefault();
    })
}

windowNotRefresh();

function inputNumber() {
    document.querySelector("#submit").addEventListener("click", (e) => {
        
        const result = new currency().play();
        let value = document.querySelector("#user-input").value;

        if (inputException(value)) {
            alert("다시 입력하세요");
            return
        } else {
            let resultElement = document.querySelector("#result");
            resultElement.innerText = result;
        }

    })
}
inputNumber();