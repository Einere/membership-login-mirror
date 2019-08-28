function getSignUpHTML() {
    return `
        <h1>회원가입</h1>
        <form class="sign-up">
            <label>
                아이디
                <input type="text" id="form-id">
            </label>
            <label>
                비밀번호
                <input type="text" id="form-pw">
            </label>
            <label>
                비밀번호 재확인
                <input type="text" id="form-pw-check">
            </label>
            <label>
                이름
                <input type="text" id="form-name">
            </label>
            <label>
                생년월일
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
            </label>
            <label>
                성별
                <select id="form-gender">
                    <option value="성별">성별</option>
                    <option value="0">남</option>
                    <option value="1">녀</option>
                </select>
            </label>
            <label>
                이메일
                <input type="email" id="form-email"/>
            </label>
            <label>
                휴대전화
                <input type="text" id="form-phone"/>
            </label>
            <label>
                관심사
                <input type="text" id="form-interesting"/>
            </label>
            <labe>
                <p><u>약관에 동의합니다.</u><input type="checkbox" id="form-agree" disabled></p>
            </labe>
            <label>
                <button>초기화</button>
                <input type="submit" value="회원가입">
            </label>
            
        </form>
    `;
}

export {getSignUpHTML};