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
        interesting: false
    };
}

SignUpHTML.prototype.getHtml = function () {
    return `
    <!-- body overlay -->
    <div class="body-blackout"></div>
    
    <div class="form-container">
        <div class="form-title">
            <h1>회원가입</h1>
        </div>
        
        <div>
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
            <input type="text" id="form-interesting"/>
            <span id="form-interesting-result"></span>
            
            <label for="form-agree">
                <u class="form-agree btn btn-sm btn-primary shadow p-2 px-3 popup-trigger" data-popup-trigger="one">약관에 동의합니다.</u>
                <input type="checkbox" id="form-agree" disabled>
            </label>
            <label>
                <button class="form-button" id="form-reset">초기화</button>
                <input type="submit" class="form-button" id="form-submit" value="회원가입">
            </label>
        </div>
    </div>
    
    <!-- Modals -->
    <div class="popup-modal shadow" data-popup-modal="one">
        <div class="popup-modal__close">
            <i class="fas fa-2x fa-times text-white bg-primary p-3"></i>
        </div>
        
        <h1 class="popup-modal-title">개인정보 수집 및 이용에 대한 안내</h1>
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
        <button class="popup-modal-button" id="form-agree-accept" disabled>확인</button> 
    </div>
    `;
};

SignUpHTML.prototype.setEventListenerToId = function () {
    document.getElementById('form-id').addEventListener('blur', function (e) {
        const regexp = /^(?=.*[a-z])(?=.*[0-9])[a-z0-9\-_]{5,20}$/;
        const formIdResult = document.querySelector('#form-id-result');

        if (regexp.test(e.target.value)) {
            formIdResult.textContent = '사용 가능한 아이디입니다.';
            formIdResult.style.color = "green";
            this.validation.id = true;
        } else {
            formIdResult.textContent = '5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.';
            formIdResult.style.color = "red";
            this.validation.id = false;
        }
    }.bind(this));
};


SignUpHTML.prototype.setEventListenerToPw = function () {
    document.getElementById('form-pw').addEventListener('blur', function (e) {
        const formPwResult = document.querySelector('#form-pw-result');

        if (!/^.{8,16}$/.test(e.target.value)) {
            formPwResult.textContent = '8자 이상 16자 이하로 입력해주세요.';
            formPwResult.style.color = "red";
            this.validation.pw = false;
            return;
        }
        if (!/[A-Z]+/.test(e.target.value)) {
            formPwResult.textContent = '영문 대문자를 최소 1자 이상 포함해주세요.';
            formPwResult.style.color = "red";
            this.validation.pw = false;
            return;
        }
        if (!/[0-9]+/.test(e.target.value)) {
            formPwResult.textContent = '숫자를 최소 1자 이상 포함해주세요.';
            formPwResult.style.color = "red";
            this.validation.pw = false;
            return;
        }
        if (!/[!@#$%^&*]+/.test(e.target.value)) {
            formPwResult.textContent = '특수문자를 최소 1자 이상 포함해주세요.';
            formPwResult.style.color = "red";
            this.validation.pw = false;
            return;
        }
        formPwResult.textContent = '안전한 비밀번호입니다.';
        formPwResult.style.color = "green";
        this.validation.pw = true;
    }.bind(this));
};

SignUpHTML.prototype.setEventListenerToPwCheck = function () {
    document.getElementById('form-pw-check').addEventListener('blur', function (e) {
        const formPwCheckResult = document.querySelector('#form-pw-check-result');
        const formPw = document.querySelector('#form-pw');

        if (formPw.value !== e.target.value) {
            formPwCheckResult.textContent = '비밀번호가 일치하지 않습니다.';
            formPwCheckResult.style.color = "red";
            this.validation.pwCheck = false;
            return;
        }
        formPwCheckResult.textContent = '비밀번호가 일치합니다.';
        formPwCheckResult.style.color = "green";
        this.validation.pwCheck = true;
    }.bind(this));
};

SignUpHTML.prototype.setEventListenerToYear = function () {
    document.getElementById('form-year').addEventListener('blur', function (e) {
        const formBirthResult = document.querySelector('#form-birth-result');
        const birthYear = parseInt(e.target.value, 10);

        if (isNaN(birthYear)) {
            formBirthResult.textContent = '태어난 년도 4자리를 정확하게 입력하세요.';
            formBirthResult.style.color = 'red';
            this.validation.year = false;
            return;
        }
        const age = new Date().getFullYear() - birthYear;
        if (age < 15 || age > 99) {
            formBirthResult.textContent = '15세 이상, 99세 이하만 가입할 수 있습니다.';
            formBirthResult.style.color = 'red';
            this.validation.year = false;
            return;
        }
        formBirthResult.textContent = '';
        formBirthResult.style.color = 'green';
        this.validation.year = true;
    }.bind(this));
};

function isLeapYear(year) {
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
}

SignUpHTML.prototype.setEventListenerToDay = function (e) {
    document.getElementById('form-day').addEventListener('blur', function (e) {
        const formBirthResult = document.querySelector('#form-birth-result');
        const formBirthMonth = document.querySelector('#form-month');
        const birthDay = parseInt(e.target.value);
        let birthMonth = parseInt(formBirthMonth.value, 10);

        if (isNaN(birthMonth)) {
            formBirthResult.textContent = '태어난 월을 선택해주세요.';
            formBirthResult.style.color = 'red';
            this.validation.month = false;
            return;
        }


        const formBirthYear = document.querySelector('#form-year');
        this.days[1] = isLeapYear(formBirthYear.value) ? 29 : 28;
        console.log(this.days[1]);

        if (birthDay < 1 || birthDay > this.days[birthMonth]) {
            formBirthResult.textContent = '태어난 날짜를 다시 확인해주세요.';
            formBirthResult.style.color = 'red';
            this.validation.day = false;
            return;
        }

        formBirthResult.textContent = '';
        formBirthResult.style.color = 'green';
        this.validation.month = true;
        this.validation.day = true;
    }.bind(this));
};


SignUpHTML.prototype.setEventListenerToGender = function () {
    document.getElementById('form-gender').addEventListener('blur', function (e) {
        const formGenderResult = document.querySelector('#form-gender-result');
        if (isNaN(parseInt(e.target.value, 10))) {
            formGenderResult.textContent = '성별을 선택해주세요.';
            formGenderResult.style.color = 'red';
            this.validation.gender = false;
            return;
        }
        formGenderResult.textContent = '';
        formGenderResult.style.color = 'green';
        this.validation.gender = true;
    }.bind(this));
};

SignUpHTML.prototype.setEventListenerToEmail = function () {
    document.getElementById('form-email').addEventListener('blur', function (e) {
        const formEmailResult = document.querySelector('#form-email-result');
        const formEmail = document.querySelector('#form-email');
        const regexp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

        if (!regexp.test(formEmail.value)) {
            formEmailResult.textContent = '이메일 주소를 다시 확인해주세요.';
            formEmailResult.style.color = 'red';
            this.validation.email = false;
        } else {
            formEmailResult.textContent = '';
            formEmailResult.style.color = 'green';
            this.validation.email = true;
        }
    }.bind(this));
};

SignUpHTML.prototype.setEventListenerToPhone = function () {
    document.getElementById('form-phone').addEventListener('blur', function (e) {
        const formPhoneResult = document.querySelector('#form-phone-result');
        const formPhone = document.querySelector('#form-phone');
        const regexp = /^(010)+\d{3,4}\d{4}$/;

        if (!regexp.test(formPhone.value)) {
            formPhoneResult.textContent = '형식에 맞지 않는 번호입니다.';
            formPhoneResult.style.color = 'red';
            this.validation.phone = false;
            return;
        }
        formPhoneResult.textContent = '';
        formPhoneResult.style.color = 'green';
        this.validation.phone = true;
    }.bind(this));
};

SignUpHTML.prototype.setEventListenerToInteresting = function () {

};

SignUpHTML.prototype.setEventListenerToAgree = function () {
    const modalTriggers = document.querySelectorAll('.popup-trigger');
    const modalCloseTrigger = document.querySelector('.popup-modal__close');
    const bodyBlackout = document.querySelector('.body-blackout');

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
        });
    });

};

export {SignUpHTML};