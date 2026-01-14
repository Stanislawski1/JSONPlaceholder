import PostClient from '../api/clients/PostClient';
import AuthClient from '../api/clients/AuthClient';


Cypress.Commands.add('apiCreatePost', (postData) => {
    return PostClient.createPost(postData);
});

Cypress.Commands.add('apiGetPost', (id) => {
    return PostClient.getSinglePost(id)
});

Cypress.Commands.add('loginViaApi', (user, pass) => {
    AuthClient.login(user, pass).then(response => {
        Cypress.env('token', response.body.token);
    });
});

import Ajv from "ajv";
const ajv = new Ajv();

Cypress.Commands.add("validateSchema", (schema, data) => {
    const validate = ajv.compile(schema);
    const valid = validate(data);

    if (!valid) {
        const errors = validate.errors.map(err => `${err.instancePath} ${err.message}`).join(", ");
        throw new Error(`Schema validation failed: ${errors}`);
    }
});