import {getHomeHTML} from "./lib/getHomeHTML.js";
import {getSignUpHTML} from './lib/getSignUpHTML.js';

function setContent(htmlStr) {
    const lead = document.querySelector('.lead');
    lead.innerHTML = htmlStr;
}

function router(hashValue) {
    switch (hashValue) {
        case '': {
            setContent(getHomeHTML());
            break;
        }
        case 'signup': {
            setContent(getSignUpHTML());
            break;
        }
        default: {
            break;
        }
    }
}

window.addEventListener('hashchange', function () {
    const hashValue = location.hash.replace('#', '');
    if (hashValue === '') console.log('empty string');
    console.log(hashValue);
    router(hashValue);
});