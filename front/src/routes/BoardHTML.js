import {isLoggedIn} from "../lib/isLoggedIn.js";

function BoardHTML() {

}

BoardHTML.prototype.getHTML = function () {
    return `
    <h1>test</h1>
    <h2 id="user-name"></h2>
    <button id="logout">로그아웃</button>
    `;
};

BoardHTML.prototype.requestLogOut = function () {
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

BoardHTML.prototype.setEventListenerToLogOut = function () {
    document.getElementById('logout').addEventListener('click', function (e) {
        this.requestLogOut()
            .then(value => {
                document.cookie = '';
                location.hash = 'login';
            })
            .catch(value => {
                document.cookie = '';
                location.hash = 'login';
            })
    }.bind(this));
};

BoardHTML.prototype.postRender = function () {
    this.setEventListenerToLogOut();

    isLoggedIn()
        .then(() => {
            document.getElementById('user-name').innerText = 'logged in!';
        })
        .catch(() => {
            document.getElementById('user-name').innerText = 'not logged in!';
        });
};

export {BoardHTML};
