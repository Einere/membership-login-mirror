import {homeHTML} from "./routes/HomeHTML.js";
import {SignUpHTML} from './routes/SignUpHTML.js';
import {LogInHTML} from './routes/LogInHTML.js';

function setContent(htmlStr) {
    const container = document.querySelector('.container');
    container.innerHTML = htmlStr;
    return container;
}

function router(hashValue) {
    switch (hashValue) {
        case '': {
            setContent(homeHTML());
            break;
        }
        case 'signUp': {
            const signUpHTML = new SignUpHTML();
            setContent(signUpHTML.getHtml());
            signUpHTML.postRender();
            break;
        }
        case 'submit': {
            setContent(`<h1>you submitted form</h1>`);
            break;
        }
        case `login`: {
            const loginHTML = new LogInHTML();
            setContent(loginHTML.getHtml());
            loginHTML.postRender();
            break;
        }
        default: {
            break;
        }
    }
}

window.addEventListener('hashchange', function () {
    const hashValue = location.hash.replace('#', '');
    router(hashValue);
});

location.hash = 'login';