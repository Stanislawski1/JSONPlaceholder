export default class BaseApi {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    sendRequest(options) {
        if (typeof cy['allure'] === 'function') {
            cy['allure']().step(`API Request: ${options.method || 'GET'} ${options.url}`);
        }

        return cy.request({
            baseUrl: this.baseUrl,
            failOnStatusCode: false,
            ...options
        });
    }
}