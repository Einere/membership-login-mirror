import {getHomeHTML} from "./lib/getHomeHTML.js";
import {SignUpHTML} from './lib/SignUpHTML.js';

function setContent(htmlStr) {
    const container = document.querySelector('.container');
    container.innerHTML = htmlStr;
    return container;
}

function router(hashValue) {
    switch (hashValue) {
        case '': {
            setContent(getHomeHTML());
            break;
        }
        case 'signup': {
            const signUpHTML = new SignUpHTML();
            setContent(signUpHTML.getHtml());

            // id 유효성 검사
            signUpHTML.setEventListenerToId();

            // 비밀번호 유효성 검사
            signUpHTML.setEventListenerToPw();

            // 비밀번호 재확인 유효성 검사
            signUpHTML.setEventListenerToPwCheck();

            // 이름 유효성 검사
            signUpHTML.setEventListenerToName();

            // 생년월일 유효성 검사
            signUpHTML.setEventListenerToYear();
            signUpHTML.setEventListenerToDay();

            // 성별 유효성 검사
            signUpHTML.setEventListenerToGender();

            // 이메일 유효성 검사
            signUpHTML.setEventListenerToEmail();

            // 핸드폰 유효성 검사
            signUpHTML.setEventListenerToPhone();

            // 모달 세팅
            signUpHTML.setEventListenerToAgree();

            // 제출 세팅
            signUpHTML.setEventListenerToSubmit();
            break;
        }
        default: {
            break;
        }
    }
}

window.addEventListener('hashchange', function () {
    const hashValue = location.hash.replace('#', '');
    router(hashValue);

});