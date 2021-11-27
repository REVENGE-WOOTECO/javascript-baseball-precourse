export const createRandNum = () => {
  // 1~9 중 서로 다른 임의의 수 3개를 list of Number로 반환
  // Returns :
  //     newRandomNum (list of Number) : 힌트 (볼을 먼저쓰고 스트라이크를 뒤에 쓰기)
  const newRandomNum = new Set();
  while (newRandomNum.size < 3) {
    newRandomNum.add(MissionUtils.Random.pickNumberInRange(1, 10));
  }
  return [...newRandomNum];
};

export const numToListOfNum = (num) => {
  // Number의 각 자리를 잘라서 list of Number 로 반환
  // Returns :
  //     listOfNum (list of Number) : [1,1,1] 과 같은 형태
  const listOfNum = String(num)
    .split("")
    .map((x) => Number(x));
  return listOfNum;
};

export const matchBalls = (standard, numArr) => {
  // standard과 numArr 배열을 비교하여 비교 정보 반환
  // Args :
  //     standard (list Of Number) : 기준 값
  //     numArr (list Of Number) : 기준 값과 비교할 대상
  // Returns :
  //     ball (Number) : 같은 인덱스가 아니지만, standard 안에 포함되는 개수
  //     strike (Number) : 같은 인덱스 값이 정확이 일치하는 개수
  const ball = numArr.filter(
    (num, idx) => num !== standard[idx] && standard.includes(num)
  ).length;

  const strike = numArr.filter((num, idx) => num === standard[idx]).length;

  return ball && strike
    ? `${ball}볼 ${strike}스트라이크`
    : ball
    ? `${ball}볼`
    : strike
    ? `${strike}스트라이크`
    : "낫싱";
};

export function showGameResult(hint, resultDiv, restartBtn) {
  // hint에 따라 알맞은 결과 보여줌
  // Args :
  //     hint (Strings) : 기준 값
  //     resultDiv (HTML div) : 게임 결과 div element
  //     restartBtn (HTML button) : 게임 재시작 버튼 element
  if (hint === "3스트라이크") {
    resultDiv.innerHTML = `
      🎉 <b>정답을 맞추셨습니다!</b> 🎉
      <br>
      게임을 새로 시작하시겠습니까?
    `;
    resultDiv.appendChild(restartBtn);
  } else {
    resultDiv.innerHTML = hint;
  }
}
export const checkValid = (arr) => {
  // list of Number의 유효성 검사를 하여 결과 반환
  // Args :
  //     arr (list of Number) : 검사 대상 [1,2,3] 형태의 배열

  // Returns :
  //     valid : 유효성 검사 결과 (true / false)

  let valid = false;
  let message = "";

  if (arr.length === 0) {
    message = "error code1: 입력값이 없습니다.";
  } else if (arr.includes(NaN)) {
    message = "error code2: 숫자가 아닙니다.";
  } else if (arr.length < 3) {
    message = `error code3: 자릿수(${arr.length})가 너무 짧습니다.`;
  } else if (arr.length > 3) {
    message = `error code4: 자릿수(${arr.length})가 너무 깁니다.`;
  } else if (arr.includes(0)) {
    message = `error code5: 1~9까지의 수를 입력해주세요`;
  } else if ([...new Set(arr)].length < 3)
    message = `error code6: 중복없이 입력해주세요`;
  else {
    valid = true;
  }

  if (valid === false) alert(message);
  return valid;
};
