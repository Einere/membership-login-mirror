import {homeHTML} from "./lib/HomeHTML.js";
import {SignUpHTML} from './lib/SignUpHTML.js';
import {logInHTML} from './lib/LogInHTML.js';

function setContent(htmlStr) {
    const container = document.querySelector('.container');
    container.innerHTML = htmlStr;
    return container;
}

function router(hashValue) {
    switch (hashValue) {
        case '': {
            setContent(homeHTML());
            break;
        }
        case 'signup': {
            const signUpHTML = new SignUpHTML();
            setContent(signUpHTML.getHtml());

            // form 기본 세팅
            signUpHTML.setEventListenerToForm();

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

            // 관심사 세팅, 유효성 검사
            signUpHTML.setInputTags();
            signUpHTML.setEventListenerToInteresting();

            // 모달 세팅
            signUpHTML.setEventListenerToAgree();

            // 제출 세팅
            signUpHTML.setEventListenerToSubmit();
            break;
        }
        case 'submit': {
            setContent(`<h1>you submitted form</h1>`);
        }
        case `login`: {
            setContent(logInHTML());
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