# 야구 게임

### 게임 설명

- 기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 야구게임

### 등장인물

- 상대방(컴퓨터) : 게임 시작 시 1~9 중 서로 다른 임의의 수 3개 선택
- 사용자 : 3자리 수 입력 후 확인 버튼 클릭하여 상대방(컴퓨터)의 숫자와 비교

### 힌트

- 스트라이크 : 같은 수 and 같은 자리
- 볼 : 같은 수 and 다른 자리
- 낫싱 : not 같은 수

## 기능 요구사항

- [x] 게임 시작 : 상대방(컴퓨터)가 1~9 중 서로 다른 임의의 수 3개 선택
- [x] 사용자 숫자 입력 : 입력창에 3자리 수 입력
- [ ] 확인 버튼 클릭 : 사용자가 입력한 숫자와 상대방의 숫자와 비교하여 힌트 출력
- [ ] 종료 조건 (3스트라이크) 충족 : 게임 종료 문구 및 재시작 버튼 출력
- [ ] 재시작 버튼 클릭 : 게임 재시작
- [ ] 사용자가 잘못된 값 입력 : alert로 에러 메시지 출력,

## 프로그래밍 요구사항

- [x] play(computerRandNum, userInputNum) 메서드 생성
- Args
  - computerRandNum (Number) : 컴퓨터의 랜덤 값
  - userInputNum (Number) : 유저 입력 값
- Returns

  - hint (String) : 힌트 (볼을 먼저쓰고 스트라이크를 뒤에 쓴다)

- [x] index.js에서 아래의 function 또는 class 형태로 작성

### 코딩/구현

- [ ] 순수 Vanilla JS로만 구현한다.
- [ ] 모든 요소에 DOM 선택자(id="") 붙인다.
- [ ] 자바스크립트 코드 컨벤션을 지키면서 프로그래밍 한다.

### 라이브러리

- [ ] MissionUtils 라이브러리의 Random.pickNumberInRange를 사용하여 랜덤값 가져온다.

### 스크립트(파일)

- [ ] import 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
- [ ] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다.

### 함수

- [ ] 함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게 만든다.
- [ ] 함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.

### 변수

- [ ] 변수 선언시 var 를 사용하지 않는다. const 와 let 을 사용한다.

## 과제 진행 요구사항

- [x] javascript-baseball-precourse 저장소를 Fork/Clone해 시작
- Fork 주소명 : https://github.com/snowman95/javascript-baseball-precourse-1
- [x] 기능을 구현하기 전에 javascript-baseball-precourse/docs/README.md 파일에 구현할 기능 목록을 정리해 추가
- [x] Git의 커밋 단위는 앞 단계에서 README.md 파일에 정리한 기능 목록 단위로 추가
- AngularJS Commit Message Conventions 참고
- [ ] 테스트 실행 통과
