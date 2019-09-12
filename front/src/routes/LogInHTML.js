import {readTextFile} from "../lib/readTextFile.js";
import {ModuleHTML} from "../lib/ModuleHTML.js";

function LogInHTML() {
    // inherit ModuleHTML
    ModuleHTML.call(this);

    this.validation = {
        id: false,
        pw: false
    };
    readTextFile('./src/data/logInError.json', function (text) {
        this.error = JSON.parse(text);
    }.bind(this));
}

// inherit ModuleHTML
LogInHTML.prototype = Object.create(ModuleHTML.prototype);
LogInHTML.prototype.constructor = LogInHTML;

LogInHTML.prototype.getHtml = function () {
    return `
    <section class="login">
        <h1>로그인</h1>
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

LogInHTML.prototype.setEventListenerToId = function () {
    document.getElementById('login-id').addEventListener('blur', function (e) {
        this.validation.id = !!e.target.value;
        if (!e.target.value) this.setResult(document.getElementById('login-result'), 'id', 1);
        else this.setResult(document.getElementById('login-result'), 'id', 0);
    }.bind(this));
};

LogInHTML.prototype.setEventListenerToPw = function () {
    const loginPw = document.getElementById('login-pw');

    loginPw.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.target.dispatchEvent(new Event('blur'));
            document.getElementById('login').click();
        }
    });
    loginPw.addEventListener('blur', function (e) {
        this.validation.pw = !!e.target.value;
        if (!e.target.value) this.setResult(document.getElementById('login-result'), 'pw', 1);
        else this.setResult(document.getElementById('login-result'), 'pw', 0);
    }.bind(this));
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

LogInHTML.prototype.setEventListenerToLogIn = function () {
    document.getElementById('login').addEventListener('click', function () {
        if (this.validation.id && this.validation.pw) {
            this.request('POST', `${this.url}/login`, function (xhr, res, rej) {
                return function () {
                    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                        xhr.response ? res(xhr.response) : rej(xhr.response);
                    }
                };
            }, this.makeLogInFormData())
                .then((userName) => {
                    document.getElementById('logged-in-user-name').textContent = userName;
                    location.hash = '';
                })
                .catch(() => {
                    this.setResult(document.getElementById('login-result'), 'login', 1);
                });
        }
    }.bind(this));
};

LogInHTML.prototype.postRender = function () {
    this.setEventListenerToId();
    this.setEventListenerToPw();
    this.setEventListenerToSignUp();
    this.setEventListenerToLogIn();
};

export {LogInHTML};