import {isLoggedIn} from "../lib/isLoggedIn.js";

function BoardHTML() {

}

BoardHTML.prototype.getHTML = function () {
    return `
    <h1>test</h1>
    <h2 id="user-name"></h2>
    `;
};

BoardHTML.prototype.postRender = function () {
    isLoggedIn()
        .then(() => {
            document.getElementById('user-name').innerText = 'logged in!';
        })
        .catch(() => {
            document.getElementById('user-name').innerText = 'not logged in!';
        });
};

export {BoardHTML};
