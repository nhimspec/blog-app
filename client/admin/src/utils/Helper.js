class Helper {
    constructor() {
        this.helper = {
            server_url: 'http://localhost',
            server_port: ':3000'
        }
    }

    getImageUrl(fileUrl) {
        return this.helper.server_url + this.helper.server_port + fileUrl;
    }
}

export const helper = new Helper();
