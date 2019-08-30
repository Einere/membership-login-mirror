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
                <u class="form-agree">약관에 동의합니다.</u><input type="checkbox" id="form-agree" disabled>
            </label>
            <label>
                <button class="form-button" id="form-reset">초기화</button>
                <input type="submit" class="form-button" id="form-submit" value="회원가입">
            </label>
        </div>
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

export {SignUpHTML};