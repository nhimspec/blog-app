import listapi from '../ListApi';
import { auth } from '../Auth';

class Category {
    constructor() {
        this.url = listapi.blog.category;
    }

    getList() {
        return fetch(this.url.getList, {
            method: 'get',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Token': auth.token
            },
        }).then(this.checkStatus)
            .then(this.parseJson);
    }

    create(data) {
        return fetch(this.url.create, {
            method: 'post',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Token': auth.token
            },
            body: JSON.stringify(data)
        }).then(this.checkStatus)
            .then(this.parseJson);
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

export const category = new Category();
