import {InputTags} from "../lib/InputTags.js";
import {makeInputNode} from "../lib/makeInputNode.js";

function SignUpHTML() {
    this.days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.regExp = {
        id: /^(?=.*[a-z])(?=.*[0-9])[a-z0-9\-_]{5,20}$/,
        pw: [/^.{8,16}$/, /[A-Z]+/, /[0-9]+/, /[!@#$%^&*]+/],
        email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
        phone: /^(010)+\d{3,4}\d{4}$/
    };
    this.validation = {
        id: false,
        pw: false,
        pwCheck: false,
        name: false,
        year: false,
        month: false,
        day: false,
        gender: false,
        email: false,
        phone: false,
        interesting: false,
        agree: false
    };
    this.inputTags = undefined;

    readTextFile('./src/data/error.json', function (text) {
        this.error = JSON.parse(text);
    }.bind(this));
}

// 로컬에서 파일을 읽는 함수
function readTextFile(file, callback) {
    const rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status === 200) {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
}

// 회원가입 html을 반환하는 함수
SignUpHTML.prototype.getHtml = function () {
    return `
    <!-- for modal -->
    <div class="body-blackout"></div>
    
    <section class="form-container">
        <h2 class="form-title">회원가입</h2>
        
        <form class="form">
            ${makeInputNode("id", "아이디")}
            ${makeInputNode("pw", "비밀번호", "password")}
            ${makeInputNode("pw-check", "비밀번호 재확인", "password")}
            ${makeInputNode("name", "이름")}
            <label for="form-year">생년월일</label>
            <div class="form-birth-container">
                <input type="number" id="form-year" maxlength="4" placeholder="년(4자)">
                <select id="form-month">
                    <option value="월" selected>월</option>
                    <option value="0">1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option value="4">5</option>
                    <option value="5">6</option>
                    <option value="6">7</option>
                    <option value="7">8</option>
                    <option value="8">9</option>
                    <option value="9">10</option>
                    <option value="10">11</option>
                    <option value="11">12</option>
                </select>
                <input type="number" id="form-day" maxlength="2" placeholder="일">
            </div>
            <span id="form-birth-result"></span>
            <label for="form-gender">성별</label>
            <select id="form-gender">
                <option value="성별" selected>성별</option>
                <option value="0">남</option>
                <option value="1">녀</option>
            </select>
            <span id="form-gender-result"></span>
            ${makeInputNode("email", "이메일")}
            ${makeInputNode("phone", "휴대전화", "text", "-없이 입력해주세요. 예)01012345678")}
            <label for="form-interesting">관심사</label>
            <div id="tags">
                <input type="text" id="form-interesting"/>
            </div>
            <span id="form-interesting-result"></span>
            
            <label for="form-agree" class="form-agree-bar">
                <u class="form-agree btn btn-sm btn-primary shadow p-2 px-3 popup-trigger" data-popup-trigger="one">약관에 동의합니다.</u>
                <input type="checkbox" id="form-agree" class="form-agree" disabled>
            </label>
            <span id="form-agree-result"></span>
            <div class="form-button-bar">
                <input type="reset" class="form-button" id="form-reset"/>
<!--                <input type="submit" class="form-button" id="form-submit" value="회원가입">-->
                <button class="form-button" id="form-submit">회원가입</button>
            </div>
        </form>
    </section>
    
    <!-- Modals -->
    <section class="popup-modal shadow" data-popup-modal="one">
        <div class="popup-modal__close">
            <i class="fas fa-2x fa-times text-white bg-primary p-3"></i>
        </div>
        
        <h2 class="popup-modal-title">개인정보 수집 및 이용에 대한 안내</h2>
        <textarea class="popup-modal-agree" rows="10" readonly>
                개인정보 수집 및 이용에 대한 안내

            정보통신망법 규정에 따라 부스트캠프에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.

            1. 수집하는 개인정보의 항목
            최초 회원가입 당시 아래와 같은 최소한의 개인정보를 필수항목으로 수집하고 있습니다.
            - 필수항목 : 아이디, 비밀번호, 이름, 생년월일, 성별, 이메일, 휴대전화, 관심사

            2. 개인정보의 수집 및 이용 목적
            가. 컨텐츠 제공, 특정 맞춤 서비스 제공
            나. 회원제 서비스 제공, 개인식별, 부스트캠프 이용약관 위반 회원에 대한 이용제한 조치, 서비스의 원활한 운영에 지장을 미치는 행위 및 서비스 부정이용 행위 제재

            3. 개인정보의 보유 및 이용기간
            이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.

            가. 회사 내부 방침에 의한 정보보유 사유
            - 부정이용기록(부정가입, 징계기록 등의 비정상적 서비스 이용기록)
            보존 항목 : 가입인증 휴대폰 번호
            보존 이유 : 부정 가입 및 이용 방지
            보존 기간 : 6개월
            ※ '부정이용기록'이란 부정 가입 및 운영원칙에 위배되는 게시글 작성 등으로 인해 회사로부터 이용제한 등을 당한 기록입니다.

            나. 관련법령에 의한 정보보유 사유
            상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.
            - 계약 또는 청약철회 등에 관한 기록
            보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률
            보존 기간 : 5년
            - 소비자의 불만 또는 분쟁처리에 관한 기록
            보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률
            보존 기간 : 3년
            - 웹사이트 방문기록
            보존 이유 : 통신비밀보호법
            보존 기간 : 3개월
        </textarea>
        <button class="popup-modal-button" id="popup-modal-agree-accept" disabled>동의</button> 
    </section>
    
    <!-- snackbar -->
    <section id="snackbar"></section>
    `;
};

// 각 input에 대해 결과를 표시하는 함수
SignUpHTML.prototype.setResult = function (target, key, index) {
    const error = this.error[key][index];

    target.textContent = error.message;
    target.style.color = error.success ? "green" : "red";
    this.validation[key] = error.success;
};

SignUpHTML.prototype.setEventListenerToForm = function () {
    const inputs = document.getElementsByTagName('input');

    // form내부 input에서 enter입력시 스낵바가 뜨는 것을 막는다
    for (const input of inputs) {
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
            }
        });
    }
};

SignUpHTML.prototype.setEventListenerToId = function () {
    document.getElementById('form-id').addEventListener('blur', function (e) {
        const formIdResult = document.querySelector('#form-id-result');

        // 아이디가 유효한지 검사한다
        if (this.regExp.id.test(e.target.value)) {
            this.setResult(formIdResult, 'id', 0);
        } else {
            this.setResult(formIdResult, 'id', 1);
        }
    }.bind(this));
};


SignUpHTML.prototype.setEventListenerToPw = function () {
    document.getElementById('form-pw').addEventListener('blur', function (e) {
        const formPwResult = document.querySelector('#form-pw-result');

        // 비밀번호가 각 조건을 만족하지 않는다면 해당하는 에러 메세지를 표시한다
        const isValid = this.regExp.pw.some((regexp, index) => {
            if (!regexp.test(e.target.value)) {
                this.setResult(formPwResult, 'pw', index + 1);
                return true;
            }
        });

        // 모든 조건을 만족한 경우
        if (!isValid) this.setResult(formPwResult, 'pw', 0);
    }.bind(this));
};

SignUpHTML.prototype.setEventListenerToPwCheck = function () {
    document.getElementById('form-pw-check').addEventListener('blur', function (e) {
        const formPwCheckResult = document.querySelector('#form-pw-check-result');

        // 비밀번호와 비밀번호 재확인이 동일한지 검사한다
        if (document.querySelector('#form-pw').value !== e.target.value) {
            this.setResult(formPwCheckResult, 'pwCheck', 1);
        } else {
            this.setResult(formPwCheckResult, 'pwCheck', 0);
        }

    }.bind(this));
};

SignUpHTML.prototype.setEventListenerToName = function () {
    document.getElementById('form-name').addEventListener('blur', function (e) {
        const formNameResult = document.querySelector('#form-name-result');

        // 이름을 입력했는지 검사한다
        if (!e.target.value) {
            this.setResult(formNameResult, 'name', 1);
        } else {
            this.setResult(formNameResult, 'name', 0);
        }
    }.bind(this));
};

SignUpHTML.prototype.setEventListenerToYear = function () {
    document.getElementById('form-year').addEventListener('blur', function (e) {
        const formBirthResult = document.querySelector('#form-birth-result');
        const birthYear = parseInt(e.target.value, 10);

        // 유효한 년을 입력했는지 검사한다
        if (isNaN(birthYear)) {
            this.setResult(formBirthResult, 'year', 1);
            return;
        }

        const age = new Date().getFullYear() - birthYear;
        // 특정 범위 내의 나이인지 검사한다
        if (age < 15 || age > 99) {
            this.setResult(formBirthResult, 'year', 2);
        } else {
            this.setResult(formBirthResult, 'year', 0);
        }
    }.bind(this));
};

// 윤년인지 검사하는 함수
function isLeapYear(year) {
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
}

SignUpHTML.prototype.setEventListenerToDay = function () {
    document.getElementById('form-day').addEventListener('blur', function (e) {
        const formBirthResult = document.querySelector('#form-birth-result');
        const birthMonth = parseInt(document.querySelector('#form-month').value, 10);
        const birthDay = parseInt(e.target.value);

        // 월을 선택하지 않으면 에러 메세지를 표시한다
        if (isNaN(birthMonth)) {
            this.setResult(formBirthResult, 'month', 1);
            return;
        }

        // 윤년 여부에 따라 2월의 최대 일 수를 변경한다
        this.days[1] = isLeapYear(document.querySelector('#form-year').value) ? 29 : 28;

        // 유효한 일을 선택했는지 검사한다
        if (birthDay < 1 || birthDay > this.days[birthMonth]) {
            this.setResult(formBirthResult, 'day', 1);
        } else {
            this.setResult(formBirthResult, 'month', 0);
            this.setResult(formBirthResult, 'day', 0);
        }
    }.bind(this));
};


SignUpHTML.prototype.setEventListenerToGender = function () {
    document.getElementById('form-gender').addEventListener('blur', function (e) {
        const formGenderResult = document.querySelector('#form-gender-result');

        // 성별을 선택하지 않으면 에러 메세지를 표시한다
        if (isNaN(parseInt(e.target.value, 10))) {
            this.setResult(formGenderResult, 'gender', 1);
        } else {
            this.setResult(formGenderResult, 'gender', 0);
        }
    }.bind(this));
};

SignUpHTML.prototype.setEventListenerToEmail = function () {
    document.getElementById('form-email').addEventListener('blur', function () {
        const formEmailResult = document.querySelector('#form-email-result');

        // 정해진 이메일 양식을 만족하지 못하면 에러 메세지를 표시한다
        if (!this.regExp.email.test(document.querySelector('#form-email').value)) {
            this.setResult(formEmailResult, 'email', 1);
        } else {
            this.setResult(formEmailResult, 'email', 0);
        }
    }.bind(this));
};

SignUpHTML.prototype.setEventListenerToPhone = function () {
    document.getElementById('form-phone').addEventListener('blur', function () {
        const formPhoneResult = document.querySelector('#form-phone-result');

        // 정해진 휴대폰 번호 양식을 만족하지 못하면 에러 메세지를 표시한다
        if (!this.regExp.phone.test(document.querySelector('#form-phone').value)) {
            this.setResult(formPhoneResult, 'phone', 1);
        } else {
            this.setResult(formPhoneResult, 'phone', 0);
        }
    }.bind(this));
};

SignUpHTML.prototype.setInputTags = function () {
    this.inputTags = new InputTags({
        id: 'form-interesting',
        maxTags: 10,
        allowDuplicateTags: false,
    });
};

SignUpHTML.prototype.setEventListenerToInteresting = function () {
    document.getElementById('form-interesting').addEventListener('blur', function () {
        const formTagInput = document.getElementById('tagInput');
        const formInterestingResult = document.getElementById('form-interesting-result');
        const tagList = formTagInput.value ? formTagInput.value.split(',') : [];

        // 관심사가 세개 이하면 에러 메세지를 표시한다
        if (tagList.length < 3) {
            this.setResult(formInterestingResult, 'interesting', 1);
        } else {
            this.setResult(formInterestingResult, 'interesting', 0);
        }
    }.bind(this));
};

SignUpHTML.prototype.setEventListenerToAgree = function () {
    const modalTriggers = document.querySelectorAll('.popup-trigger');
    const modalCloseTrigger = document.querySelector('.popup-modal__close');
    const bodyBlackout = document.querySelector('.body-blackout');
    const modalAccept = document.querySelector('#popup-modal-agree-accept');
    const modalAgree = document.querySelector('.popup-modal-agree');

    // 기본적인 모달 기능
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const {popupTrigger} = trigger.dataset;
            const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`);

            popupModal.classList.add('is--visible');
            bodyBlackout.classList.add('is-blacked-out');

            modalCloseTrigger.addEventListener('click', () => {
                popupModal.classList.remove('is--visible');
                bodyBlackout.classList.remove('is-blacked-out');
            });
            modalAccept.addEventListener('click', () => {
                popupModal.classList.remove('is--visible');
                bodyBlackout.classList.remove('is-blacked-out');
            });
        });
    });

    // 동의 버튼 활성화
    // 스로틀링을 위한 변수
    let ticking = false;
    modalAgree.addEventListener('scroll', function (e) {
        if (!ticking) {
            // reqeustAnimationFrame을 이용한 스로틀링
            window.requestAnimationFrame(function () {
                if (e.target.scrollHeight <= e.target.scrollTop + e.target.offsetHeight) {
                    modalAccept.removeAttribute('disabled');
                    ticking = true;
                }
            });
        }
    });

    // 약관 동의 체크
    modalAccept.addEventListener('click', function () {
        const formAgree = document.querySelector('#form-agree');
        formAgree.checked = true;
        this.validation.agree = true;
    }.bind(this));
};

// 회원가입을 위해, FormData를 만들어 반환하는 함수
SignUpHTML.prototype.makeFormData = function () {
    const formData = new FormData();
    formData.append('id', document.getElementById('form-id').value);
    formData.append('pw', document.getElementById('form-pw-check').value);
    formData.append('name', document.getElementById('form-name').value);
    formData.append('year', document.getElementById('form-year').value);
    formData.append('month', document.getElementById('form-month').value);
    formData.append('day', document.getElementById('form-day').value);
    formData.append('gender', document.getElementById('form-gender').value);
    formData.append('email', document.getElementById('form-email').value);
    formData.append('phone', document.getElementById('form-phone').value);
    formData.append('interesting', document.getElementById('tagInput').value.split(','));

    return formData;
};

SignUpHTML.prototype.setEventListenerToSubmit = function () {
    document.querySelector('#form-submit').addEventListener('click', function (e) {
        // 기본 제출 이벤트를 막는다
        e.preventDefault();

        let message = '';
        // 모든 유효성을 만족하는지 결과값을 추출한다
        const result = Object.keys(this.validation).reduce(function (acc, key) {
            if (!this.validation[key]) {
                message = message.concat(`${this.error.submit[key]}\n`);
            }
            return acc && this.validation[key];
        }.bind(this), true);

        if (!result) {
            this.showSnackBar(message);
        } else {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", '#submit', true);
            xhr.setRequestHeader("Content-Type", "multipart/form-data");

            xhr.onreadystatechange = function () {
                // go to login page
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) location.hash = 'login';
            };

            xhr.send(this.makeFormData());
        }
    }.bind(this));
};

// 스낵바를 보여주는 함수
SignUpHTML.prototype.showSnackBar = function (message) {
    // Get the snackbar DIV
    const toast = document.getElementById("snackbar");

    // set message
    toast.textContent = message;

    // Add the "show" class to DIV
    toast.classList.add("show");

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        toast.classList.remove("show")
    }, 3000);
};

SignUpHTML.prototype.setEventListenerToReset = function () {
    document.getElementsByClassName('form')[0].addEventListener('reset', function () {
        for (const key in this.validation) {
            if (this.validation.hasOwnProperty(key))
                this.validation[key] = false;
        }

        this.inputTags.reset();
    }.bind(this));
};


export {SignUpHTML};