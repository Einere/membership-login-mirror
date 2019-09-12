import {ModuleHTML} from "../lib/ModuleHTML.js";

function HomeHTML() {
    // inherit ModuleHTML
    ModuleHTML.call(this);
}

// inherit ModuleHTML
HomeHTML.prototype = Object.create(ModuleHTML.prototype);
HomeHTML.prototype.constructor = HomeHTML;

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
    document.getElementById('user-name').textContent = document.getElementById('logged-in-user-name').textContent;
};

/*HomeHTML.prototype.requestLogOut = function () {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.url + '/logout', true);
        xhr.withCredentials = true;

        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                xhr.response === "true" ? res() : rej();
            }
        };

        xhr.send();
    });
};*/

HomeHTML.prototype.setEventListenerToLogOut = function () {
    document.getElementById('logout').addEventListener('click', function () {
        /*this.request('GET', `${this.url}/logout`, function (xhr, res, rej) {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                xhr.response === "true" ? res() : rej();
            }
        })
            .then(() => {
                document.getElementById('logged-in-user-name').textContent = '';
                location.hash = 'login';
            })
            .catch(() => {
                document.getElementById('logged-in-user-name').textContent = '';
                location.hash = 'login';
            });*/

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
            })
            .catch(() => {
                document.getElementById('logged-in-user-name').textContent = '';
                location.hash = 'login';
            })
    }.bind(this));
};

HomeHTML.prototype.postRender = function () {
    this.setWelcomeMessage();
    this.setEventListenerToLogOut();
};

export {HomeHTML};