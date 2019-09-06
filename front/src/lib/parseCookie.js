function parseCookie(cookieStr) {
    return cookieStr.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split('=');
        acc[key] = value;
        return acc;
    }, {});
}

export {parseCookie}