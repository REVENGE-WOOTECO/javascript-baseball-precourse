import {} from 'https://cdn.jsdelivr.net/npm/@woowacourse/mission-utils@1.0.1/dist/mission-utils.min.js';

export default class BaseballGame {
  constructor() {
    this.randomNumbers = this.getRandomNumbers();
    this.submitBtn = document.getElementById('submit');
    this.result = document.getElementById('result');
    this.input = document.getElementById('user-input');
    this.init();
    console.log(this.randomNumbers);
  }

  init() {
    this.result.innerText = '';
    this.handleSubmit();
  }

  getRandomNumbers() {
    const [MIN, MAX, LEN] = [1, 9, 3];
    return MissionUtils.Random.pickUniqueNumbersInRange(MIN, MAX, LEN);
  }

  ElemOfArrToString(arr) {
    return arr.map(el => el.toString());
  }

  play(computerInputNumbers, userInputNumbers) {
    const comInput = this.ElemOfArrToString(computerInputNumbers);
    const userInput = this.ElemOfArrToString(userInputNumbers);
    const ballNumbers = this.getBallNumbers(comInput, userInput);
    const strikeNumbers = this.getStrikeNumbers(comInput, userInput);
    const ballStr = ballNumbers === 0 ? '' : `${ballNumbers}볼 `;
    const strikeStr = strikeNumbers === 0 ? '' : `${strikeNumbers}스트라이크`;

    if (strikeNumbers === 3) {
      return '정답';
    }
    if (strikeNumbers === 0 && ballNumbers === 0) {
      return '낫싱';
    }
    return (ballStr + strikeStr).trim();
  }

  getBallNumbers(answer, input) {
    let ballNumbers = 0;
    answer.map((el, i) => {
      if (el !== input[i] && input.includes(el)) {
        ballNumbers += 1;
      }
    });
    return ballNumbers;
  }

  getStrikeNumbers(answer, input) {
    let strikeNumbers = 0;
    answer.map((el, i) => {
      if (el === input[i]) {
        strikeNumbers += 1;
      }
    });
    return strikeNumbers;
  }

  isCorrectInput(input) {
    const isDuplicate = input.some(
      x => input.indexOf(x) !== input.lastIndexOf(x),
    );
    const isThreeLength = input.length === 3;
    if (isDuplicate || !isThreeLength) {
      return false;
    }
    return true;
  }

  handleSubmit() {
    this.submitBtn.addEventListener('click', () => {
      const input = this.input.value.split('');
      if (this.isCorrectInput(input)) {
        this.showResult(this.play(this.randomNumbers, input));
      } else {
        window.alert('잘못된 입력값입니다.');
      }
    });
  }

  showResult(result) {
    const restartGuideElem = document.getElementById('restart-guide');
    const isCorrect = result === '정답';
    if (isCorrect && !restartGuideElem) {
      this.createRestartMessage();
      this.createRestartButton();
      this.handleRestart();
    } else if (!isCorrect) {
      this.result.innerHTML = result;
    }
  }

  createRestartMessage() {
    this.result.innerText = '';
    const appElem = document.getElementById('app');
    this.restartElem = document.createElement('div');
    this.restartElem.setAttribute('id', 'restart-guide');
    this.restartElem.innerHTML = `<h3>🎉 정답을 맞추셨습니다! 🎉</h3>
    <span>게임을 새로 시작하시겠습니까?</span>`;
    appElem.appendChild(this.restartElem);
  }

  createRestartButton() {
    const restartBtn = document.createElement('button');
    restartBtn.setAttribute('id', 'game-restart-button');
    restartBtn.innerText = '게임 재시작';
    this.restartElem.appendChild(restartBtn);
  }

  handleRestart() {
    const restartBtn = document.getElementById('game-restart-button');
    restartBtn.addEventListener('click', () => {
      this.resetGame();
    });
  }

  resetGame() {
    this.randomNumbers = this.getRandomNumbers();
    this.result.innerText = '';
    this.input.value = '';
    this.restartElem.remove();
    console.log(this.randomNumbers);
  }
}

const baseballGame = new BaseballGame();
