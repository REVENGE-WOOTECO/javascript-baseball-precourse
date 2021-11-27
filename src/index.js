// 기능요구사항
// () 랜덤 숫자 3개 생성(서로 달라야함)
// () 사용자가 입력한 서로 다른 3개의 값을 랜덤 숫자 3개와 비교해 스트라이크, 볼, 낫싱 출력해야함(볼이 스트라이크보다 앞에 출력)
// () 사용자가 모두 맞히면(=3스트라이크) 게임이 종료되고, 재시작 버튼이 노출된다.
// () 재시작 버튼을 통해 다시 시작할 수 있다.
// () 사용자가 잘못된 값을 입력하면 alert로 에러 메시지를 보여주고 다시 입력

//프로그래밍 요구사항
// () play메서드는 string으로 리턴
// () 게임을 다시 시작하는 버튼 태그의 id는 game-restart-button으로 생성
// () Math.random대신 MissionUtils 라이브러리의 랜덤 사용
// () 순수 js로만 구현
// () 코드 컨벤션 지키기
// () 인덴트 depth가 3이 넘지 않도록 구현한다
// () 함수는 한 가지 일만 하도록 최대한 작게 구현, 15라인 넘어가면 안됨
// () import문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만듬
// () var 사용 금지

function gameResult(strikeNum, ballNum){
    if (ballNum !== 0 && strikeNum !== 0) {
        return `${ballNum}볼 ${strikeNum}스트라이크`;
    } else if (ballNum === 0 && strikeNum !== 0) {
        return `${strikeNum}스트라이크`;
    } else if (ballNum !== 0 && strikeNum === 0) {
        return `${ballNum}볼`;
    } else return '낫싱';
 }

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

         return gameResult(strikeCount, ballCount);
     };
 }

  import currency from "./index.js";
  
  function App() {
    document.querySelector("#user-input-form").addEventListener("submit", (e) => {
          e.preventDefault();
    })
    document.querySelector("#submit").addEventListener("click", (e) => {

        let value = document.querySelector("#user-input").value;

        if (value.length !== 3 || isNaN(value)) {
            alert("다시 입력하세요");
            return
        }

        const result = new currency().play();

        console.log(result)
    })
  }
  App();