function ModuleHTML() {
    // this.url = 'http://localhost:3000/users';
    // this.url = 'http://membership-server.vmurx8km59.us-east-2.elasticbeanstalk.com/users';
    this.url = 'https://boostcamp-membership-server.herokuapp.com/users';
    this.validation = {};
    this.error = {};
}

ModuleHTML.prototype.getHTML = function () {
};

// 각 필드에 대해 유효성 검증 결과를 표시하기 위한 함수
ModuleHTML.prototype.setResult = function (target, key, index) {
    const error = this.error[key][index];

    target.textContent = error.message;
    target.style.color = error.success ? "green" : "red";
    this.validation[key] = error.success;
};

ModuleHTML.prototype.request = function (method, url, callback, data) {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.onreadystatechange = callback(xhr, res, rej);
        xhr.open(method, url, true);
        xhr.send(data);
    });
};

ModuleHTML.prototype.preRender = function () {
};

ModuleHTML.prototype.postRender = function () {
};

export {ModuleHTML};