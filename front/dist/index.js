!function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(){this.url="https://boostcamp-membership-server.herokuapp.com/users",this.validation={},this.error={}}function s(){o.call(this)}function i(t){this.input=document.getElementById(t.id),this.tagsContainer=document.getElementById("tags"),this.configs=t,this.tags_array=[],this.init()}function r(t,e,n="text",o=""){return`\n    <label for="form-${t}">${e}</label>\n    <input type="${n}" id="form-${t}" placeholder="${o}">\n    <span id="form-${t}-result"></span>\n    `}function a(t,e){const n=new XMLHttpRequest;n.overrideMimeType("application/json"),n.open("GET",t,!0),n.onreadystatechange=function(){4===n.readyState&&200===n.status&&e(n.responseText)},n.send(null)}function u(){o.call(this),this.days=[31,28,31,30,31,30,31,31,30,31,30,31],this.regExp={id:/^(?=.*[a-z])(?=.*[0-9])[a-z0-9\-_]{5,20}$/,pw:[/^.{8,16}$/,/[A-Z]+/,/[0-9]+/,/[!@#$%^&*]+/],email:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,phone:/^(010)+\d{3,4}\d{4}$/},this.validation={id:!1,pw:!1,pwCheck:!1,name:!1,year:!1,month:!1,day:!1,gender:!1,email:!1,phone:!1,interesting:!1,agree:!1},this.inputTags=void 0,a("./src/data/signUpError.json",function(t){this.error=JSON.parse(t)}.bind(this))}function l(){o.call(this),this.validation={id:!1,pw:!1},a("./src/data/logInError.json",function(t){this.error=JSON.parse(t)}.bind(this))}function c(){o.call(this)}function d(){o.call(this)}function p(t){const e=document.querySelector(".container");return e.innerHTML=t,e}n.r(e),o.prototype.getHTML=function(){},o.prototype.setResult=function(t,e,n){const o=this.error[e][n];t.textContent=o.message,t.style.color=o.success?"green":"red",this.validation[e]=o.success},o.prototype.request=function(t,e,n,o){return new Promise((s,i)=>{const r=new XMLHttpRequest;r.withCredentials=!0,r.onreadystatechange=n(r,s,i),r.open(t,e,!0),r.send(o)})},o.prototype.preRender=function(){},o.prototype.postRender=function(){},s.prototype=Object.create(o.prototype),s.prototype.constructor=s,s.prototype.getHtml=function(){return'\n    <section class="home">\n        <h2>welcome!</h2>\n        <span id="user-name"></span>\n        <button id="logout">로그아웃</button>\n    </section>\n    '},s.prototype.checkLoggedIn=function(){return this.request("GET",`${this.url}/isLoggedIn`,(function(t,e,n){return function(){t.readyState===XMLHttpRequest.DONE&&200===t.status&&("true"===t.response?e(!0):n(!1))}}))},s.prototype.setWelcomeMessage=function(){document.getElementById("user-name").textContent=document.getElementById("logged-in-user-name").textContent},s.prototype.setEventListenerToLogOut=function(){document.getElementById("logout").addEventListener("click",function(){this.request("GET",`${this.url}/logout`,(function(t,e,n){return function(){t.readyState===XMLHttpRequest.DONE&&200===t.status&&("true"===t.response?e():n())}})).then(()=>{document.getElementById("logged-in-user-name").textContent="",location.hash="login"}).catch(()=>{document.getElementById("logged-in-user-name").textContent="",location.hash="login"})}.bind(this))},s.prototype.preRender=function(){return this.checkLoggedIn()},s.prototype.postRender=function(t){t?(this.setWelcomeMessage(),this.setEventListenerToLogOut()):location.hash="login"},i.prototype.init=function(){let t=document.createElement("input");t.setAttribute("type","hidden"),t.setAttribute("id","tagInput"),t.setAttribute("name","tagInput"),this.input.parentNode.insertBefore(t,this.input),this.tagsContainer.addEventListener("click",function(t){t.target.setAttribute("focus",""),this.input.focus()}.bind(this)),this.configs.tags&&this.configs.tags.forEach(t=>this.create(t.replace(/[^a-z0-9+\-.#]/gi,"").toUpperCase())),this.input.addEventListener("focusout",function(t){let e=t.target.value.replace(/[^a-z0-9+\-.#]/gi,""),n=Boolean(this.tags_array.indexOf(e)+1);e&&n&&!this.configs.allowDuplicateTags?this.showDuplicate(e):e&&n&&this.configs.allowDuplicateTags?this.create(e):e&&!n&&this.create(e),t.target.value=""}.bind(this)),this.input.addEventListener("keydown",function(t){if("Tab"===t.key&&(t.preventDefault(),t.target.dispatchEvent(new Event("focusout"))),"Backspace"===t.key&&0===t.target.value.length){let t=document.querySelectorAll(".tag");if(t.length>0){t[t.length-1].remove(),this.update()}}}.bind(this)),this.input.addEventListener("keyup",(function(t){t.stopPropagation(),","!==t.key&&"Enter"!==t.key||(t.preventDefault(),t.target.dispatchEvent(new Event("focusout")))})),this.update()},i.prototype.create=function(t){if(document.querySelectorAll(".tag").length<this.configs.maxTags){const e=document.createElement("span"),n=document.getElementById("tagInput");e.setAttribute("class","tag"),e.innerText=t.toUpperCase();const o=document.createElement("span");o.setAttribute("class","close"),o.addEventListener("click",()=>e.remove()),e.appendChild(o),this.tagsContainer.insertBefore(e,n),this.update()}},i.prototype.update=function(){let t=document.getElementsByClassName("tag");this.tags_array=Array.prototype.reduce.call(t,(t,e)=>(t.push(e.textContent.toLowerCase()),t),[]),document.getElementById("tagInput").setAttribute("value",this.tags_array.join())},i.prototype.remove=function(t){this.configs.onTagRemove&&this.configs.onTagRemove(t.parentNode.textContent),t.parentNode.remove(),this.update()},i.prototype.showDuplicate=function(t){let e=document.getElementsByClassName("tag");const n=Array.prototype.find.call(e,e=>e.textContent===t.toUpperCase());n&&(n.style.background="#FF0000FF",window.setTimeout((function(){n.removeAttribute("style")}),1100))},i.prototype.reset=function(){const t=[...this.tagsContainer.getElementsByClassName("tag")],e=document.getElementById("tagInput");Array.prototype.forEach.call(t,t=>t.remove()),e.value="",this.tags_array=[]},u.prototype=Object.create(o.prototype),u.prototype.constructor=u,u.prototype.getHtml=function(){return`\n    \x3c!-- for modal --\x3e\n    <div class="body-blackout"></div>\n    \n    <section class="form-container">\n        <h2 class="form-title">회원가입</h2>\n        \n        <form class="form">\n            ${r("id","아이디")}\n            ${r("pw","비밀번호","password")}\n            ${r("pw-check","비밀번호 재확인","password")}\n            ${r("name","이름")}\n            <label for="form-year">생년월일</label>\n            <div class="form-birth-container">\n                <input type="number" id="form-year" maxlength="4" placeholder="년(4자)">\n                <select id="form-month">\n                    <option value="월" selected>월</option>\n                    <option value="0">1</option>\n                    <option value="1">2</option>\n                    <option value="2">3</option>\n                    <option value="3">4</option>\n                    <option value="4">5</option>\n                    <option value="5">6</option>\n                    <option value="6">7</option>\n                    <option value="7">8</option>\n                    <option value="8">9</option>\n                    <option value="9">10</option>\n                    <option value="10">11</option>\n                    <option value="11">12</option>\n                </select>\n                <input type="number" id="form-day" maxlength="2" min="1" placeholder="일">\n            </div>\n            <span id="form-birth-result"></span>\n            <label for="form-gender">성별</label>\n            <select id="form-gender">\n                <option value="성별" selected>성별</option>\n                <option value="0">남</option>\n                <option value="1">녀</option>\n            </select>\n            <span id="form-gender-result"></span>\n            ${r("email","이메일")}\n            ${r("phone","휴대전화","text","-없이 입력해주세요. 예)01012345678")}\n            <label for="form-interesting">관심사</label>\n            <div id="tags">\n                <input type="text" id="form-interesting"/>\n            </div>\n            <span id="form-interesting-result"></span>\n            \n            <label for="form-agree" class="form-agree-bar">\n                <u class="form-agree btn btn-sm btn-primary shadow p-2 px-3 popup-trigger" data-popup-trigger="one">약관에 동의합니다.</u>\n                <input type="checkbox" id="form-agree" class="form-agree" disabled>\n            </label>\n            <span id="form-agree-result"></span>\n            <div class="form-button-bar">\n                <input type="reset" class="form-button" id="form-reset"/>\n\x3c!--                <input type="submit" class="form-button" id="form-submit" value="회원가입">--\x3e\n                <button class="form-button" id="form-submit">회원가입</button>\n            </div>\n        </form>\n    </section>\n    \n    \x3c!-- Modals --\x3e\n    <section class="popup-modal shadow" data-popup-modal="one">\n        <div class="popup-modal__close">\n            <i class="fas fa-2x fa-times text-white bg-primary p-3"></i>\n        </div>\n        \n        <h2 class="popup-modal-title">개인정보 수집 및 이용에 대한 안내</h2>\n        <textarea class="popup-modal-agree" rows="10" readonly>\n                개인정보 수집 및 이용에 대한 안내\n\n            정보통신망법 규정에 따라 부스트캠프에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.\n\n            1. 수집하는 개인정보의 항목\n            최초 회원가입 당시 아래와 같은 최소한의 개인정보를 필수항목으로 수집하고 있습니다.\n            - 필수항목 : 아이디, 비밀번호, 이름, 생년월일, 성별, 이메일, 휴대전화, 관심사\n\n            2. 개인정보의 수집 및 이용 목적\n            가. 컨텐츠 제공, 특정 맞춤 서비스 제공\n            나. 회원제 서비스 제공, 개인식별, 부스트캠프 이용약관 위반 회원에 대한 이용제한 조치, 서비스의 원활한 운영에 지장을 미치는 행위 및 서비스 부정이용 행위 제재\n\n            3. 개인정보의 보유 및 이용기간\n            이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.\n\n            가. 회사 내부 방침에 의한 정보보유 사유\n            - 부정이용기록(부정가입, 징계기록 등의 비정상적 서비스 이용기록)\n            보존 항목 : 가입인증 휴대폰 번호\n            보존 이유 : 부정 가입 및 이용 방지\n            보존 기간 : 6개월\n            ※ '부정이용기록'이란 부정 가입 및 운영원칙에 위배되는 게시글 작성 등으로 인해 회사로부터 이용제한 등을 당한 기록입니다.\n\n            나. 관련법령에 의한 정보보유 사유\n            상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.\n            - 계약 또는 청약철회 등에 관한 기록\n            보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률\n            보존 기간 : 5년\n            - 소비자의 불만 또는 분쟁처리에 관한 기록\n            보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률\n            보존 기간 : 3년\n            - 웹사이트 방문기록\n            보존 이유 : 통신비밀보호법\n            보존 기간 : 3개월\n        </textarea>\n        <button class="popup-modal-button" id="popup-modal-agree-accept" disabled>동의</button> \n    </section>\n    \n    \x3c!-- snackbar --\x3e\n    <section id="snackbar"></section>\n    `},u.prototype.setEventListenerToForm=function(){const t=document.getElementsByTagName("input");for(const e of t)e.addEventListener("keydown",(function(t){"Enter"===t.key&&(t.preventDefault(),t.stopPropagation())}))},u.prototype.setEventListenerToId=function(){document.getElementById("form-id").addEventListener("blur",function(t){const e=document.querySelector("#form-id-result");this.regExp.id.test(t.target.value)?this.request("GET",`${this.url}/isDuplicatedId/${t.target.value}`,(function(t,e,n){return function(){t.readyState===XMLHttpRequest.DONE&&200===t.status&&("true"===t.response?n():e())}})).then(()=>{this.setResult(e,"id",0)}).catch(()=>{this.setResult(e,"id",2)}):this.setResult(e,"id",1)}.bind(this))},u.prototype.setEventListenerToPw=function(){document.getElementById("form-pw").addEventListener("blur",function(t){const e=document.querySelector("#form-pw-result");this.regExp.pw.some((n,o)=>{if(!n.test(t.target.value))return this.setResult(e,"pw",o+1),!0})||this.setResult(e,"pw",0)}.bind(this))},u.prototype.setEventListenerToPwCheck=function(){document.getElementById("form-pw-check").addEventListener("blur",function(t){const e=document.querySelector("#form-pw-check-result");document.querySelector("#form-pw").value!==t.target.value?this.setResult(e,"pwCheck",1):this.setResult(e,"pwCheck",0)}.bind(this))},u.prototype.setEventListenerToName=function(){document.getElementById("form-name").addEventListener("blur",function(t){const e=document.querySelector("#form-name-result");t.target.value?this.setResult(e,"name",0):this.setResult(e,"name",1)}.bind(this))},u.prototype.setEventListenerToBirth=function(){function t(){const t=document.querySelector("#form-birth-result"),e=parseInt(document.getElementById("form-year").value,10),n=parseInt(document.getElementById("form-month").value,10),o=parseInt(document.getElementById("form-day").value,10);if(isNaN(e))return void this.setResult(t,"year",1);const s=(new Date).getFullYear()-e;var i;s<15||s>99?this.setResult(t,"year",2):(this.setResult(t,"year",0),isNaN(n)?this.setResult(t,"month",1):(this.days[1]=(i=document.querySelector("#form-year").value)%4==0&&i%100!=0||i%400==0?29:28,o<1||o>this.days[n]?this.setResult(t,"day",1):(this.setResult(t,"month",0),this.setResult(t,"day",0))))}document.getElementById("form-year").addEventListener("blur",t.bind(this)),document.getElementById("form-month").addEventListener("blur",t.bind(this)),document.getElementById("form-day").addEventListener("blur",t.bind(this))},u.prototype.setEventListenerToGender=function(){document.getElementById("form-gender").addEventListener("blur",function(t){const e=document.querySelector("#form-gender-result");isNaN(parseInt(t.target.value,10))?this.setResult(e,"gender",1):this.setResult(e,"gender",0)}.bind(this))},u.prototype.setEventListenerToEmail=function(){document.getElementById("form-email").addEventListener("blur",function(){const t=document.querySelector("#form-email-result");this.regExp.email.test(document.querySelector("#form-email").value)?this.setResult(t,"email",0):this.setResult(t,"email",1)}.bind(this))},u.prototype.setEventListenerToPhone=function(){document.getElementById("form-phone").addEventListener("blur",function(){const t=document.querySelector("#form-phone-result");this.regExp.phone.test(document.querySelector("#form-phone").value)?this.setResult(t,"phone",0):this.setResult(t,"phone",1)}.bind(this))},u.prototype.setInputTags=function(){this.inputTags=new i({id:"form-interesting",maxTags:10,allowDuplicateTags:!1})},u.prototype.setEventListenerToInteresting=function(){document.getElementById("form-interesting").addEventListener("blur",function(){const t=document.getElementById("tagInput"),e=document.getElementById("form-interesting-result");(t.value?t.value.split(","):[]).length<3?this.setResult(e,"interesting",1):this.setResult(e,"interesting",0)}.bind(this))},u.prototype.setEventListenerToAgree=function(){const t=document.querySelectorAll(".popup-trigger"),e=document.querySelector(".popup-modal__close"),n=document.querySelector(".body-blackout"),o=document.querySelector("#popup-modal-agree-accept"),s=document.querySelector(".popup-modal-agree");t.forEach(t=>{t.addEventListener("click",()=>{const{popupTrigger:s}=t.dataset,i=document.querySelector(`[data-popup-modal="${s}"]`);i.classList.add("is--visible"),n.classList.add("is-blacked-out"),e.addEventListener("click",()=>{i.classList.remove("is--visible"),n.classList.remove("is-blacked-out")}),o.addEventListener("click",()=>{i.classList.remove("is--visible"),n.classList.remove("is-blacked-out")})})});let i=!1;s.addEventListener("scroll",(function(t){i||window.requestAnimationFrame((function(){t.target.scrollHeight<=t.target.scrollTop+t.target.offsetHeight&&(o.removeAttribute("disabled"),i=!0)}))})),o.addEventListener("click",function(){document.querySelector("#form-agree").checked=!0,this.validation.agree=!0}.bind(this))},u.prototype.makeSignUpFormData=function(){const t=new FormData;return t.append("id",document.getElementById("form-id").value),t.append("pw",document.getElementById("form-pw-check").value),t.append("name",document.getElementById("form-name").value),t.append("year",document.getElementById("form-year").value),t.append("month",document.getElementById("form-month").value),t.append("day",document.getElementById("form-day").value),t.append("gender",document.getElementById("form-gender").value),t.append("email",document.getElementById("form-email").value),t.append("phone",document.getElementById("form-phone").value),t.append("interesting",document.getElementById("tagInput").value.split(",")),t},u.prototype.setEventListenerToSubmit=function(){document.querySelector("#form-submit").addEventListener("click",function(t){t.preventDefault();let e="";Object.keys(this.validation).reduce(function(t,n){return this.validation[n]||(e=e.concat(`${this.error.submit[n]}\n`)),t&&this.validation[n]}.bind(this),!0)?this.request("POST",`${this.url}/signUp`,(function(t,e,n){return function(){t.readyState===XMLHttpRequest.DONE&&200===t.status&&e()}}),this.makeSignUpFormData()).then(()=>{location.hash="login"}):this.showSnackBar(e)}.bind(this))},u.prototype.showSnackBar=function(t){const e=document.getElementById("snackbar");e.textContent=t,e.classList.add("show"),setTimeout((function(){e.classList.remove("show")}),3e3)},u.prototype.setEventListenerToReset=function(){document.getElementsByClassName("form")[0].addEventListener("reset",function(){for(const t in this.validation)this.validation.hasOwnProperty(t)&&(this.validation[t]=!1);this.inputTags.reset()}.bind(this))},u.prototype.postRender=function(){this.setEventListenerToForm(),this.setEventListenerToId(),this.setEventListenerToPw(),this.setEventListenerToPwCheck(),this.setEventListenerToName(),this.setEventListenerToBirth(),this.setEventListenerToGender(),this.setEventListenerToEmail(),this.setEventListenerToPhone(),this.setInputTags(),this.setEventListenerToInteresting(),this.setEventListenerToAgree(),this.setEventListenerToReset(),this.setEventListenerToSubmit()},l.prototype=Object.create(o.prototype),l.prototype.constructor=l,l.prototype.getHtml=function(){return'\n    <section class="login">\n        <h1>로그인</h1>\n        <input id="login-id" type="text" placeholder="아이디"/>\n        <input id="login-pw" type="password" placeholder="비밀번호"/>\n        <span id="login-result"></span>\n        <div class="login-button-bar">\n            <button id="signUp">회원가입</button>\n            <button id="login">로그인</button>\n        </div>\n    </section>\n    '},l.prototype.setEventListenerToId=function(){document.getElementById("login-id").addEventListener("blur",function(t){this.validation.id=!!t.target.value,t.target.value?this.setResult(document.getElementById("login-result"),"id",0):this.setResult(document.getElementById("login-result"),"id",1)}.bind(this))},l.prototype.setEventListenerToPw=function(){const t=document.getElementById("login-pw");t.addEventListener("keydown",(function(t){"Enter"===t.key&&(t.target.dispatchEvent(new Event("blur")),document.getElementById("login").click())})),t.addEventListener("blur",function(t){this.validation.pw=!!t.target.value,t.target.value?this.setResult(document.getElementById("login-result"),"pw",0):this.setResult(document.getElementById("login-result"),"pw",1)}.bind(this))},l.prototype.setEventListenerToSignUp=function(){document.getElementById("signUp").addEventListener("click",(function(){location.hash="signUp"}))},l.prototype.makeLogInFormData=function(){const t=new FormData;return t.append("id",document.getElementById("login-id").value),t.append("pw",document.getElementById("login-pw").value),t},l.prototype.setEventListenerToLogIn=function(){document.getElementById("login").addEventListener("click",function(){this.validation.id&&this.validation.pw&&this.request("POST",`${this.url}/login`,(function(t,e,n){return function(){t.readyState===XMLHttpRequest.DONE&&200===t.status&&(t.response?e(t.response):n(t.response))}}),this.makeLogInFormData()).then(t=>{document.getElementById("logged-in-user-name").textContent=t,location.hash=""}).catch(()=>{this.setResult(document.getElementById("login-result"),"login",1)})}.bind(this))},l.prototype.postRender=function(){this.setEventListenerToId(),this.setEventListenerToPw(),this.setEventListenerToSignUp(),this.setEventListenerToLogIn()},c.prototype=Object.create(o.prototype),c.prototype.constructor=c,c.prototype.request=function(){return new Promise((t,e)=>{const n=new XMLHttpRequest;n.open("GET",`${this.url}/isLoggedIn`,!0),n.withCredentials=!0,n.onreadystatechange=function(){this.readyState===XMLHttpRequest.DONE&&200===this.status&&("true"===n.response?t():e())},n.send()})},d.prototype=Object.create(o.prototype),d.prototype.constructor=d,d.prototype.getHTML=function(){return'\n    <h1>test</h1>\n    <h2 id="user-name"></h2>\n    <button id="logout">로그아웃</button>\n    '},d.prototype.setEventListenerToLogOut=function(){document.getElementById("logout").addEventListener("click",function(){this.request("GET",`${this.url}/logout`,(function(t,e,n){return function(){t.readyState===XMLHttpRequest.DONE&&200===t.status&&("true"===t.response?e():n())}})).then(()=>{document.getElementById("logged-in-user-name").textContent="",location.hash="login"})}.bind(this))},d.prototype.postRender=function(){this.setEventListenerToLogOut(),(new c).request().then(()=>{document.getElementById("user-name").innerText="logged in!"}).catch(()=>{document.getElementById("user-name").innerText="not logged in!"})},window.addEventListener("hashchange",(function(){!async function(t){switch(t){case"":{const t=new s;try{const e=await t.preRender();console.log("flag",e),p(t.getHtml()),t.postRender(e)}catch(e){console.log("err",e),t.postRender(e)}break}case"signUp":{const t=new u;p(t.getHtml()),t.postRender();break}case"submit":p("<h1>you submitted form</h1>");break;case"login":{const t=new l;p(t.getHtml()),t.postRender();break}case"board":{const t=new d;p(t.getHTML()),t.postRender();break}}}(location.hash.replace("#",""))})),location.hash="login"}]);