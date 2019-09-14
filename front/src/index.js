import {HomeHTML} from "./routes/HomeHTML.js";
import {SignUpHTML} from './routes/SignUpHTML.js';
import {LogInHTML} from './routes/LogInHTML.js';
import {BoardHTML} from "./routes/BoardHTML.js";
// webstorm을 이용해서 run하는 경우, 주석처리할 것.
// webpack을 이용해서 build하는 경우, 주석해제 할 것.
/*require('./css/inputTags.css');
require('./css/logIn.css');
require('./css/main.css');
require('./css/modal.css');
require('./css/signUp.css');
require('./css/snackbar.css');*/

function setContent(htmlStr) {
    const container = document.querySelector('.container');
    container.innerHTML = htmlStr;
    return container;
}

async function router(hashValue) {
    switch (hashValue) {
        case '': {
            const homeHTML = new HomeHTML();
            try{
                const flag = await homeHTML.preRender();
                console.log(`flag`, flag);
                setContent(homeHTML.getHtml());
                homeHTML.postRender(flag);
            }
            catch(err) {
                console.log(`err`, err);
                homeHTML.postRender(err);
            }
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
        case 'login': {
            const loginHTML = new LogInHTML();
            setContent(loginHTML.getHtml());
            loginHTML.postRender();
            break;
        }
        case 'board': {
            const boardHTML = new BoardHTML();
            setContent(boardHTML.getHTML());
            boardHTML.postRender();
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