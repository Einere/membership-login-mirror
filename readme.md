# mission 1 - login FE
author : Einere  
date : 19.08.28 ~ 19.09.02  
description : 회원가입 및 로그인 개발(front-end)

## plan
#### 8.28(수)
1. html 작성
    - header, nav, section, article, footer.
2. vanilla SPA 테스트
    - fragment(`location.hash`)와`window`, `hashchange`를 이용하여 네이티브하게 라우팅할 수 있다. 

#### 8.29(목)
1. flex box, CSS variable 공부하기
2. 각 form요소에 material design 적용하기 (불가능.. 커스텀 css 적용하기)
3. 중앙 정렬하기
4. 중복되는 요소는 builder를 이용해 동적으로 관리(값과 이벤트 핸들러를 설정 가능)

#### 8.30(금)
1. 유효성 검사 로직 구현
    1. 윤년 확인
    2. 관심사
2. 모달 구현하기
3. 육진혁님 코드 기반으로 리팩토링하기 (에러 메세지 처리 로직)
4. 스크롤 이벤트 기능 구현하기
5. 약관 동의 체크 기능 구현하기
6. 스낵바 기능 구현하기

#### 8.31(토)
1. section / article 공부하기 (form, modal, snackbar...)
2. flex 속성 공부하기 및 적용하기
3. css variable 공부하기 (스낵바 bottom...)
4. magic number 공부하기 (무의미하게 반복되는 값들. 유지보수하기 힘들어진다)

#### 9.01(일)
1. 태그 기능 구현하기 (레퍼런스 찾아보기)
2. select태그에 focus css가 적용 안되는 현상 수정하기
3. 관심사 유효성 검사 기능 구현하기
4. fixed navibation bar 구현하기
5. 정규표현식을 객체를 이용해 리팩토링하기
6. 로그인 페이지 구현

2. 비밀번호 마스킹 문자 변경하기
4. input태그에서 enter입력시 submit버튼이 클릭되지 않게 처리하기

#### 9.02(월)
1. form입력 데이터를 post로 데이터 보내는 것 고려하기
2. 관심사 데이터 초기화때 날라가도록 구현하기
3. pjax로 구조를 변경하기

#### 9.03(화)

## 개발환경
1. jQuery, React, Vue, lodash, bootstrap, materialUI 등의 라이브러리는 사용할 수 없다.
2. 서버 환경은 따로 구성하지 않으며, 데이터 동기화를 하지 않는다.
3. PC 크롬 브라우저를 기준으로 한다.

## 제약조건
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
4. 

## 팁들
- 정확히 스타일링하기 위해 reset.css를 include하고 시작할 수도 있음
- 가운데 정렬방법
    - 전체는 div로 감싸고
    - div의 width 값을 지정하고
    - margin: 0 auto; 하면 됨
    - max-width도 설정하면 좋을 듯
- hover 처리 예제
    ```css
    .menu_name:hover {
      border-color: #454545;
      font-weight: bold;
    }
    ```
- 유효성 검사는 `change`이벤트를 이용하면 된다.
- modal 구현 방법
    ```javascript
    const open = document.querySelector("#open");
    const close = document.querySelector("#close");
    
    open.onclick = () => modal.style.display = "flex";
    close.onclick = () => modal.style.display = "none";
    ```
    ```html
    <button id="open">모달열기</button>
    
    <div class="modal-wrapper" style="display: none;">
        <div class="modal">
            <div class="modal-title">모달입니다.</div>
            <p>이러구저러구...</p>
            <button id="close">모달닫기</button>
        </div>
    </div>
    ```
- Naver font 설정
    ```
    body, button, input, select, table, textarea {
    font-size: 12px;
    font-family: Dotum,'돋움',Helvetica,"Apple SD Gothic Neo",sans-serif;
    }
    ```
- css selector(https://www.w3schools.com/cssref/css_selectors.asp)

- detect scroll end
    ```
    function scrolled(e) {
        if (myDiv.offsetHeight + myDiv.scrollTop >= myDiv.scrollHeight) {
            scrolledToBottom(e);
        }
    }
    ```
- div 태그로 만든 Layer를 안보이게 하는 두가지 방법  
   1. display:none  <-> block
        
        아예 사라지게 하는것. 보이지도 않고 해당 공간도 존재하지 않게 됨

   2. visibility:hidden <-> visible
   
        보이지만 않고 해당 공간은 존재. width와 height값을 주었다면 그만큼 공간은 존재하게 됨


## 고민할 사항들
- "관심사" 입력 및 표시 방법은 고민을 많이 해봐야 할 듯
    - div 안에 input을 auto로 만들어서 넣고 관심사를 입력하고 쉼표를 누르면 앞에 span을 생성해서 만들어 넣음

- 폼 제출 시, 중복 제출을 방지하는 방법
    - 버튼 클릭시 비활성화 처리
    - 기타등등..

- 윤년검사
    - 2월일때 가능한 숫자가 들어가는 것


- 비밀번호 해싱
    - 이게 과연 필요할지...


- 체크박스
    - [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

- 폰트 관련
    - 단위 : em, rem, px
    - 적용 : 최상위 태그 (body)에 font-family 적용
    - https://ojji.wayful.com/2014/01/HTML-the-diffences-among-Px-Pt-Em-Percnet-for-Font-Size-ect.html

- 네이버는 focus out 하고 비밀번호를 check 함

- 네이버 color 값
    ```
    background-color: #4ec53d;
    ```
    
- modal popup 만드는 방법

    https://new93helloworld.tistory.com/135

- SASS를 사용하면 constant를 define할 수 있음

    `$ npm install -g sass`
    `$ sass source/stylesheets/index.scss build/stylesheets/index.css`
    ```
    @color: #4D926F;

    #header {
      color: @color;
    }
    h2 {
      color: @color;
    }
    ```