const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://jsonplaceholder.typicode.com',
        supportFile: 'cypress/support/e2e.js',
        env: {
            allure: true // Включаем плагин
        },
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
        },
    },
});