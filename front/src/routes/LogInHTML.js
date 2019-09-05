import {readTextFile} from "../lib/readTextFile.js";

function LogInHTML() {
    readTextFile('./src/data/logInError.json', function (text) {
        this.error = JSON.parse(text);
    }.bind(this));
}

LogInHTML.prototype.getHtml = function () {
    return `
    <section class="login">
        <input id="login-id" type="text" placeholder="아이디"/>
        <input id="login-pw" type="password" placeholder="비밀번호"/>
        <span id="login-result"></span>
        <div class="login-button-bar">
            <button id="signUp">회원가입</button>
            <button id="login">로그인</button>
        </div>
    </section>
    `;
};

LogInHTML.prototype.setResult = function (target, key, index) {
    const error = this.error[key][index];

    target.textContent = error.message;
    target.style.color = error.success ? "green" : "red";
};

LogInHTML.prototype.setEventListenerToSignUp = function () {
    document.getElementById('signUp').addEventListener('click', function () {
        location.hash = 'signUp';
    });
};

LogInHTML.prototype.makeLogInFormData = function () {
    const formData = new FormData();
    formData.append('id', document.getElementById('login-id').value);
    formData.append('pw', document.getElementById('login-pw').value);

    return formData;
};

LogInHTML.prototype.requestLogIn = function (method, url) {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);

        xhr.onreadystatechange = function () {
            // go to login page
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                const {result, name} = JSON.parse(xhr.response);

                result ? res() : rej();
            }
        };

        xhr.send(this.makeLogInFormData());
    });
};

LogInHTML.prototype.setEventListenerToLogIn = function () {
    document.getElementById('login').addEventListener('click', function () {
        this.requestLogIn('POST', 'http://localhost:3000/users/login')
            .then(() => {
                location.hash = '';
            })
            .catch(() => {
                this.setResult(document.getElementById('login-result'), 'login', 1);
            });
    }.bind(this));
};

LogInHTML.prototype.postRender = function () {
    this.setEventListenerToSignUp();
    this.setEventListenerToLogIn();
};

export {LogInHTML};