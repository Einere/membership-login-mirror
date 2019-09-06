import {parseCookie} from "../lib/parseCookie.js";

function HomeHTML() {

}

HomeHTML.prototype.getHtml = function () {
    return `
    <section class="home">
        <h2 id="welcome-msg">welcome!</h2>
    </section>
    `;
};

HomeHTML.prototype.setWelcomeMessage = function () {
    const cookieObj = parseCookie(document.cookie);
    document.getElementById('welcome-msg').innerText += ` ${cookieObj['session-name']}!`;
};

HomeHTML.prototype.postRender = function () {
    this.setWelcomeMessage();
};

export {HomeHTML};