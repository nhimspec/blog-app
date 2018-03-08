class Client {
    constructor() {
        this.url = {
            register: '/api/user/register',
            login: '/api/user/login'
        }
    }
    register(data) {
        return fetch(this.url.register, {
            method: 'post',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(this.checkStatus)
            .then(this.parseJson);
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
            .then(this.parseJson);
    }

    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            const error = new Error(`HTTP Error ${response.statusText}`);
            error.status = response.statusText;
            error.response = response;
            console.log(error);
            throw error;
        }
    }

    parseJson(response) {
        return response.json();
    }
}

export const client = new Client();
