# mission 1 - login FE
author : Einere  
date : 19.08.28 ~ 19.09.02  
description : 회원가입 및 로그인 개발(front-end)

## 개발환경
1. jQuery, React, Vue, lodash, bootstrap, materialUI 등의 라이브러리는 사용할 수 없다.
2. 서버 환경은 따로 구성하지 않으며, 데이터 동기화를 하지 않는다.
3. PC 크롬 브라우저를 기준으로 한다.

## 요구사항
### 공통
1. 로그인 UI에 대해서, Bootstrap등 의 라이브러리 지원을 받을 수 있다.
2. 아이디 중복검사를 제외한 모든 부분의 유효성 검사는 FE에서 진행한다.
3. 실제 입력 데이터 전송은 서버개발을 할때 완성한다.


### HTML
1. W3C Validator 를 통과하도록 한다.
[W3C Validator](https://validator.w3.org/)

### CSS
[CSS Validator](https://jigsaw.w3.org/css-validator/)
1. flexbox 속성을 이용하여 레이아웃을 구성한다.
2. CSS variables 을 사용한다.
3. flexbox 속성을 이용하여 레이아웃을 구성한다.


# mission 1 - login BE
## 요구사항
### 기능 요구사항
1. 회원가입
2. 로그인
3. 로그인 이후 변경된 홈 화면
4. 로그아웃

### 기술 요구사항
#### 프로그래밍
1. js와 node.js를 사용한다.
2. 함수에는 간단하게 주석을 단다.

#### 웹 프레임워크
1. Express를 사용
2. cookie를 이용해 session을 구현한다.
3. 미들웨어로 로그인 상태 확인 함수를 구현한다.

#### 데이터베이스
1. DB는 최대한 사용하지 않는 것을 추천한다.
2. 단, 사용한다면 lowDB나 sqlite를 사용한다.

#### 템플릿 엔진
1. pug를 사용한다.
2. API는 json으로 응답한다.

#### 배포
1. heroku를 이용하여 배포한다.
2. readme.md에 배포 URL을 명시한다.


## URL
https://boostcamp-membership.herokuapp.com