function SignUpHTML() {

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
            
            <label>생년월일</label>
            <input type="text" id="form-year" placeholder="년(4자)">
            <select id="form-month">
                <option value="월" selected>월</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
            <input type="text" id="form-day" placeholder="일">
            <span id="form-birth-result"></span>
            
            <label for="form-gender">성별</label>
            <select id="form-gender">
                <option value="성별">성별</option>
                <option value="0">남</option>
                <option value="1">녀</option>
            </select>
            <span id="form-gender-result"></span>
            
            <label for="form-email">이메일</label>
            <input type="email" id="form-email"/>
            <span id="form-email-result"></span>
            
            <label for="form-phone">휴대전화</label>
            <input type="text" id="form-phone"/>
            <span id="form-phone-result"></span>
            
            <label for="form-interesting">관심사</label>
            <input type="text" id="form-interesting"/>
            <span id="form-interesting-result"></span>
            
            <label for="form-agree">
                <p><u>약관에 동의합니다.</u><input type="checkbox" id="form-agree" disabled></p>
            </label>
            <label>
                <button class="form-button">초기화</button>
                <input type="submit" class="form-button" id="form-submit" value="회원가입">
            </label>
        </div>
    </div>
    `;
};

SignUpHTML.prototype.setEventListenerToId = function () {
    document.getElementById('form-id').addEventListener('blur', function (e) {
        const regex = /^(?=.*[a-z])(?=.*[0-9])[a-z0-9\-_]{5,20}$/;
        const formIdResult = document.querySelector('#form-id-result');
        if (regex.test(e.target.value)) {
            formIdResult.textContent = '사용 가능한 아이디입니다.';
            formIdResult.style.color = "green";
        } else {
            formIdResult.textContent = '5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.';
            formIdResult.style.color = "red";
        }
    });
};


export {SignUpHTML};