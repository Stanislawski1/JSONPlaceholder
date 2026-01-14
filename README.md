# Cypress API Automation Framework

A professional-grade API testing framework built with **Cypress**, implementing modern design patterns and quality assurance best practices.

The project targets the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) for demonstration purposes.

## Tech Stack

* **Cypress** — Core automation framework.
* **JavaScript (ES6+)** — Development language.
* **Ajv** — JSON Schema validation (Contract Testing).
* **Faker.js** — Dynamic test data generation.
* **Allure Report** — Advanced interactive reporting.
* **Page Object (Client) Pattern** — Architectural pattern for logic separation.

## Project Architecture

The framework follows a multi-layered architecture:

1.  **Base API**: Centralized class managing `baseUrl`, `Headers`, and `Global Authorization`.
2.  **API Clients**: Endpoint wrappers (e.g., `PostClient.js`) that abstract request details.
3.  **Custom Commands**: Extensions of the `cy` object for clean, semantic test steps.
4.  **Data Management**: Combined use of static Fixtures and a dynamic `DataGenerator` (Faker-based).
5.  **Schema Validation**: A dedicated layer ensuring server responses match defined API contracts.

### Key Features

* **Global Authorization**: Automatic Bearer Token injection via the Base API layer.
* **Contract Testing**: Every critical response is validated against a JSON Schema.
* **Dynamic Data**: Unique posts (titles, bodies) are generated for every test run.
* **Allure Integration**: Rich, searchable reports with request/response logging.