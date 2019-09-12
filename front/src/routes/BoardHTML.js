import {IsLoggedIn} from "../lib/IsLoggedIn.js";
import {ModuleHTML} from "../lib/ModuleHTML.js";

function BoardHTML() {
    // inherit ModuleHTML
    ModuleHTML.call(this);
}

// inherit ModuleHTML
BoardHTML.prototype = Object.create(ModuleHTML.prototype);
BoardHTML.prototype.constructor = BoardHTML;

BoardHTML.prototype.getHTML = function () {
    return `
    <h1>test</h1>
    <h2 id="user-name"></h2>
    <button id="logout">로그아웃</button>
    `;
};

BoardHTML.prototype.setEventListenerToLogOut = function () {
    document.getElementById('logout').addEventListener('click', function () {
        this.request('GET', `${this.url}/logout`, function (xhr, res, rej) {
            return function () {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    xhr.response === "true" ? res() : rej();
                }
            };
        })
            .then(() => {
                document.getElementById('logged-in-user-name').textContent = '';
                location.hash = 'login';
            });
    }.bind(this));
};

BoardHTML.prototype.postRender = function () {
    this.setEventListenerToLogOut();

    new IsLoggedIn().request()
        .then(() => {
            document.getElementById('user-name').innerText = 'logged in!';
        })
        .catch(() => {
            document.getElementById('user-name').innerText = 'not logged in!';
        });
};

export {BoardHTML};
