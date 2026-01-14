// BaseApi.js
class BaseApi {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    sendRequest({ method, url, body = null, headers = {} }) {

        const token = Cypress.env('token')

        return cy.request({
            method: method,
            url: `${this.baseUrl}${url}`,
            body: body,
            headers: {
                ...headers,
                'Authorization': `Bearer ${token}`
            },
            failOnStatusCode: false
        });
    }
}
export default BaseApi;