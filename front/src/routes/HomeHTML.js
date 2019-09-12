function HomeHTML() {
    this.url = 'http://membership-server.vmurx8km59.us-east-2.elasticbeanstalk.com/users';
    // this.url = 'http://localhost:3000/users';
}

HomeHTML.prototype.getHtml = function () {
    return `
    <section class="home">
        <h2>welcome!</h2>
        <span id="user-name"></span>
        <button id="logout">로그아웃</button>
    </section>
    `;
};

HomeHTML.prototype.setWelcomeMessage = function () {
    document.getElementById('user-name').textContent = document.getElementById('logged-in-user-name').textContent;
};

HomeHTML.prototype.requestLogOut = function () {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.url + '/logout', true);
        xhr.withCredentials = true;

        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                xhr.response === "true" ? res() : rej();
            }
        };

        xhr.send();
    });
};

HomeHTML.prototype.setEventListenerToLogOut = function () {
    document.getElementById('logout').addEventListener('click', function () {
        this.requestLogOut()
            .then(() => {
                location.hash = 'login';
            })
            .catch(() => {
                location.hash = 'login';
            });
        document.getElementById('logged-in-user-name').textContent = '';
    }.bind(this));
};

HomeHTML.prototype.postRender = function () {
    this.setWelcomeMessage();
    this.setEventListenerToLogOut();
};

export {HomeHTML};