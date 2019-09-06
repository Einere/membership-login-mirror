function isLoggedIn() {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/users/isLoggedIn', true);
        xhr.withCredentials = true;

        xhr.onreadystatechange = function () {
            // go to login page
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                xhr.response === "true" ? res() : rej();
            }
        };

        xhr.send();
    });

}

export {isLoggedIn};