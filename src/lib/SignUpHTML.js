import {InputTags} from "./InputTags.js";

function SignUpHTML() {
    this.days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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
    readTextFile('./src/data/error.json', function (text) {
        this.error = JSON.parse(text);
    }.bind(this));
}

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

SignUpHTML.prototype.getHtml = function () {
    return `
    <!-- body overlay -->
    <div class="body-blackout"></div>
    
    <section class="form-container">
        <h2 class="form-title">회원가입</h2>
        
        <form class="form">
            <label for="form-id">아이디</label>
            <input type="text" id="form-id">
            <span id="form-id-result"></span>
           
            <label for="form-pw">비밀번호</label>
            <input type="password" id="form-pw">
            <span id="form-pw-result"></span>
            
            <label for="form-pw-check">비밀번호 재확인</label>
            <input type="password" id="form-pw-check">
            <span id="form-pw-check-result"></span>
            
            <label for="form-name">이름</label>
            <input type="text" id="form-name">
            <span id="form-name-result"></span>
            
            <label for="form-year">생년월일</label>
            <div class="form-birth-container">
                <input type="text" id="form-year" maxlength="4" placeholder="년(4자)">
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
                <input type="text" id="form-day" maxlength="2" placeholder="일">
            </div>
            <span id="form-birth-result"></span>
            
            
            <label for="form-gender">성별</label>
            <select id="form-gender">
                <option value="성별" selected>성별</option>
                <option value="0">남</option>
                <option value="1">녀</option>
            </select>
            <span id="form-gender-result"></span>
            
            <label for="form-email">이메일</label>
            <input type="email" id="form-email"/>
            <span id="form-email-result"></span>
            
            <label for="form-phone">휴대전화</label>
            <input type="text" id="form-phone" placeholder="-없이 입력해주세요. 예)01012345678"/>
            <span id="form-phone-result"></span>
            
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
                <input type="submit" class="form-button" id="form-submit" value="회원가입">
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

SignUpHTML.prototype.setResult = function (target, key, index) {
    const error = this.error[key][index];

    target.textContent = error.message;
    target.style.color = error.success ? "green" : "red";
    this.validation[key] = error.success;
};

SignUpHTML.prototype.setEventListenerToForm = function () {
    const inputs = document.getElementsByTagName('input');

    for (const input of inputs) {
        input.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
            }
        })
    }
};

SignUpHTML.prototype.setEventListenerToId = function () {
    document.getElementById('form-id').addEventListener('blur', function (e) {
        const regexp = /^(?=.*[a-z])(?=.*[0-9])[a-z0-9\-_]{5,20}$/;
        const formIdResult = document.querySelector('#form-id-result');

        if (regexp.test(e.target.value)) {
            this.setResult(formIdResult, 'id', 0);
        } else {
            this.setResult(formIdResult, 'id', 1);
        }
    }.bind(this));
};


SignUpHTML.prototype.setEventListenerToPw = function () {
    document.getElementById('form-pw').addEventListener('blur', function (e) {
        const formPwResult = document.querySelector('#form-pw-result');

        if (!/^.{8,16}$/.test(e.target.value)) {
            this.setResult(formPwResult, 'pw', 1);
            return;
        }
        if (!/[A-Z]+/.test(e.target.value)) {
            this.setResult(formPwResult, 'pw', 2);
            return;
        }
        if (!/[0-9]+/.test(e.target.value)) {
            this.setResult(formPwResult, 'pw', 3);
            return;
        }
        if (!/[!@#$%^&*]+/.test(e.target.value)) {
            this.setResult(formPwResult, 'pw', 4);
            return;
        }
        this.setResult(formPwResult, 'pw', 0);
    }.bind(this));
};

SignUpHTML.prototype.setEventListenerToPwCheck = function () {
    document.getElementById('form-pw-check').addEventListener('blur', function (e) {
        const formPwCheckResult = document.querySelector('#form-pw-check-result');
        const formPw = document.querySelector('#form-pw');

        if (formPw.value !== e.target.value) {
            this.setResult(formPwCheckResult, 'pwCheck', 1);
        } else {
            this.setResult(formPwCheckResult, 'pwCheck', 0);
        }

    }.bind(this));
};

SignUpHTML.prototype.setEventListenerToName = function () {
    document.getElementById('form-name').addEventListener('blur', function (e) {
        const formNameResult = document.querySelector('#form-name-result');

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

        if (isNaN(birthYear)) {
            this.setResult(formBirthResult, 'year', 1);
            return;
        }

        const age = new Date().getFullYear() - birthYear;
        if (age < 15 || age > 99) {
            this.setResult(formBirthResult, 'year', 2);
            return;
        }
        this.setResult(formBirthResult, 'year', 0);
    }.bind(this));
};

function isLeapYear(year) {
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
}

SignUpHTML.prototype.setEventListenerToDay = function () {
    document.getElementById('form-day').addEventListener('blur', function (e) {
        const formBirthResult = document.querySelector('#form-birth-result');
        const formBirthMonth = document.querySelector('#form-month');
        const birthDay = parseInt(e.target.value);
        let birthMonth = parseInt(formBirthMonth.value, 10);

        if (isNaN(birthMonth)) {
            this.setResult(formBirthResult, 'month', 1);
            return;
        }


        const formBirthYear = document.querySelector('#form-year');
        this.days[1] = isLeapYear(formBirthYear.value) ? 29 : 28;
        console.log(this.days[1]);

        if (birthDay < 1 || birthDay > this.days[birthMonth]) {
            this.setResult(formBirthResult, 'day', 1);
            return;
        }
        this.setResult(formBirthResult, 'month', 0);
        this.setResult(formBirthResult, 'day', 0);
    }.bind(this));
};


SignUpHTML.prototype.setEventListenerToGender = function () {
    document.getElementById('form-gender').addEventListener('blur', function (e) {
        const formGenderResult = document.querySelector('#form-gender-result');
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
        const formEmail = document.querySelector('#form-email');
        const regexp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

        if (!regexp.test(formEmail.value)) {
            this.setResult(formEmailResult, 'email', 1);
        } else {
            this.setResult(formEmailResult, 'email', 0);
        }
    }.bind(this));
};

SignUpHTML.prototype.setEventListenerToPhone = function () {
    document.getElementById('form-phone').addEventListener('blur', function () {
        const formPhoneResult = document.querySelector('#form-phone-result');
        const formPhone = document.querySelector('#form-phone');
        const regexp = /^(010)+\d{3,4}\d{4}$/;

        if (!regexp.test(formPhone.value)) {
            this.setResult(formPhoneResult, 'phone', 1);
        } else {
            this.setResult(formPhoneResult, 'phone', 0);
        }
    }.bind(this));
};

SignUpHTML.prototype.setInputTags = function () {
    new InputTags({
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

SignUpHTML.prototype.setEventListenerToSubmit = function () {
    document.querySelector('#form-submit').addEventListener('click', function (e) {
        e.preventDefault();

        let message = '';
        const result = Object.keys(this.validation).reduce(function (acc, key) {
            if (!this.validation[key]) {
                message = message.concat(`${this.error.submit[key]}\n`);
            }
            return acc && this.validation[key];
        }.bind(this), true);

        if (!result) {
            this.showSnackBar(message);
        } else {
            location.hash = 'submit';
        }
    }.bind(this));
};

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


export {SignUpHTML};