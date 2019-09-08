import {parseCookie} from "../lib/parseCookie.js";

function HomeHTML() {

}

HomeHTML.prototype.getHtml = function () {
    return `
    <section class="home">
        <h2>welcome!</h2>
        <span id="user-name"></span>
        <button id="logout">로그아웃</button>
    </section>
    `;
};

HomeHTML.prototype.setWelcomeMessage = function () {
    const cookieObj = parseCookie(document.cookie);
    document.getElementById('user-name').innerText += ` ${cookieObj['sessionName']}!`;
};

HomeHTML.prototype.requestLogOut = function () {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/users/logout', true);
        xhr.withCredentials = true;

        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                xhr.response === "true" ? res() : rej();
            }
        };

        xhr.send();
    });
};

HomeHTML.prototype.setEventListenerToLogOut = function () {
    document.getElementById('logout').addEventListener('click', function (e) {
        this.requestLogOut()
            .then(value => {
                location.hash = 'login';
            })
            .catch(value => {
                document.cookie = '';
                location.hash = 'login';
            })
    }.bind(this));
};

HomeHTML.prototype.postRender = function () {
    this.setWelcomeMessage();
    this.setEventListenerToLogOut();
};

export {HomeHTML};