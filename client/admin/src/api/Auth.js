const BLOG_APP_USER_TOKEN = 'blog-app-token-user';
class Auth {
    constructor() {
        this.useLocalStorage = (typeof localStorage !== 'undefined');
        this.url = {
            register: '/api/user/register',
            login: '/api/user/login',
            userInfoApi: '/api/user/info'
        }

        if (this.useLocalStorage) {
            this.token = localStorage.getItem(BLOG_APP_USER_TOKEN);
            if (this.token) {
                this.isTokenValid().then((bool) => {
                    if (!bool) {
                        this.token = null;
                    }
                });
            }
        }
    }

    isLoggedIn() {
        return !!this.token;
    }

    user() {
        return fetch(this.url.userInfoApi, {
            method: 'post',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ auth_cd: this.token })
        }).then(this.checkStatus)
            .then(this.parseJson)
            .then((json) => json.user);
    }

    isTokenValid() {
        return this.user().then((json) => !!json);
    }

    removeToken() {
        this.token = null;
        if (this.useLocalStorage) {
            localStorage.removeItem(BLOG_APP_USER_TOKEN);
        }
    }

    setToken(token) {
        this.token = token;
        if (this.useLocalStorage) {
            localStorage.setItem(BLOG_APP_USER_TOKEN, token);
        }
    }

    register(data) {
        return fetch(this.url.register, {
            method: 'post',
            body: data
        }).then(this.checkStatus)
            .then(this.parseJson)
            .then((json) => this.setToken(json.user.token));
    }

    login(data) {
        return fetch(this.url.login, {
            method: 'post',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(this.checkStatus)
            .then(this.parseJson)
            .then((json) => this.setToken(json.user.token));
    }

    logout() {
        this.removeToken();
    }

    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            return response.json().then(json => {
                return Promise.reject({
                    status: response.status,
                    message: json
                });
            });
        }
    }

    parseJson(response) {
        return response.json();
    }
}

export const auth = new Auth();
