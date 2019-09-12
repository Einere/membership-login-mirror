import {ModuleHTML} from "../lib/ModuleHTML.js";

function IsLoggedIn() {
    // inherit ModuleHTML
    ModuleHTML.call(this);
}

// inherit ModuleHTML
IsLoggedIn.prototype = Object.create(ModuleHTML.prototype);
IsLoggedIn.prototype.constructor = IsLoggedIn;

IsLoggedIn.prototype.request = function () {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.url}/isLoggedIn`, true);
        xhr.withCredentials = true;

        xhr.onreadystatechange = function () {
            // go to login page
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                xhr.response === "true" ? res() : rej();
            }
        };

        xhr.send();
    });
};


export {IsLoggedIn};