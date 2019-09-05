function LogInHTML() {
}

LogInHTML.prototype.getHtml = function () {
    return `
    <section class="login">
        <input type="text" placeholder="아이디"/>
        <input type="password" placeholder="비밀번호"/>
        <div class="login-button-bar">
            <button id="signUp">회원가입</button>
            <button id="login">로그인</button>
        </div>
    </section>
    `;
};

LogInHTML.prototype.setEventListenerToSignUp = function () {
    document.getElementById('signUp').addEventListener('click', function () {
        location.hash = 'signUp';
    });
};

LogInHTML.prototype.setEventListenerToLogin = function () {
    document.getElementById('login').addEventListener('click', function () {

    });
};

LogInHTML.prototype.postRender = function () {
    this.setEventListenerToSignUp();
    this.setEventListenerToLogin();
};

export {LogInHTML};