export const createRandNum = () => {
  // 1~9 중 서로 다른 임의의 수 3개를 list of Number로 반환
  // Returns :
  //     newRandomNum (list of Number) : 힌트 (볼을 먼저쓰고 스트라이크를 뒤에 쓰기)
  const newRandomNum = MissionUtils.Random.shuffle(
    MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3)
  );
  return newRandomNum;
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

export const match = (standard, numArr) => {
  // standard과 numArr 배열을 비교하여 비교 정보 반환
  // Args :
  //     standard (list Of Number) : 기준 값
  //     numArr (list Of Number) : 기준 값과 비교할 대상
  // Returns :
  //     matchInclude (Number) : 같은 인덱스가 아니지만, standard 안에 포함되는 개수
  //     matchExact (Number) : 같은 인덱스 값이 정확이 일치하는 개수
  const matchInclude = numArr.filter(
    (num, idx) => num !== standard[idx] && standard.includes(num)
  ).length;

  const matchExact = numArr.filter((num, idx) => num === standard[idx]).length;

  return { matchInclude, matchExact };
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
