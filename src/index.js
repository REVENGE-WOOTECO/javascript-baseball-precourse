class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    const comInput = computerInputNumbers;
    const userInput = userInputNumbers;
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
    return ballStr + strikeStr;
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
}

// init
const baseballGame = new BaseballGame();
const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).map(
  x => x.toString(),
);
const submitBtn = document.getElementById('submit');
const restartBtn = document.getElementById('game-restart-button');
document.getElementById('game-restart').style.display = 'none';

const playHandler = () => {
  const userInput = document.getElementById('user-input').value.split('');
  const result = baseballGame.play(randomNumbers, userInput);
  if (result === '정답') {
    document.getElementById('game-result-strings').innerText =
      '🎉 정답을 맞추셨습니다! 🎉';
    document.getElementById('game-restart').style.display = 'block';
  } else {
    document.getElementById('game-result-strings').innerText = result;
  }
};

const restartHandler = () => {
  window.location.reload();
};

submitBtn.addEventListener('click', playHandler);
restartBtn.addEventListener('click', restartHandler);
