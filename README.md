# Create Express TypeScript Starter

Create Express TypeScript Starter is a boilerplate project designed to help you quickly set up a new Express.js project with TypeScript. It includes pre-configured settings and dependencies for a seamless development experience.

**Requirements:** Node.js 22.13 or newer and a MongoDB instance (local or Atlas).

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)
- [Custom Folder Structure](#custom-folder-structure)
- [Features](#features)
- [What's New in v2](#whats-new-in-v2)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)


## Getting Started

To get started with Create Express TypeScript Starter, follow these steps:

1. Use `npx` to create a new project based on the starter:

   ```sh
   npx @easy-starters/create-express-ts-starter your_project_name
   ```
   This command will create a new directory with the specified name (your_project_name), set up the project inside it with a fresh git repository, and install all the dependencies.
2. Navigate into the newly created directory:

   ```sh
   cd your_project_name
   ```
3. Change some values in package.json to meet your project needs. The project name is already set; you can add a description, author, and other configurations as necessary.
4. Create a `.env` file from the provided example and point `MONGO_URI` at your database:

   ```sh
   cp .env.example .env
   ```
5. Customize the README file to provide information specific to your project.
6. Start the development server:

   ```sh
   npm run dev
   ```



## Usage

After setting up your project, you can use the provided scripts and configuration to start developing your Express application. Here are the scripts below:

- **`npm run dev`:**  Start the development server with hot reloading (tsx) and pretty logs.

- **`npm run start`:**  Run the production build of the project (`dist/server.js`).

- **`npm run build`:**  Build the project for production.

- **`npm run test`:**  Run all tests once with Vitest.

- **`npm run test:watch`:**  Run tests in watch mode.

- **`npm run test-coverage`:**  Run all tests and generate a code coverage report.

- **`npm run lint`:**  Run ESLint on the project.

- **`npm run lint:fix`:**  Run ESLint and automatically fix fixable issues.

- **`npm run prettier:fix`:**  Format all TypeScript files using Prettier.

- **`npm run prepare`:**  Trigger Husky to set up Git hooks (runs automatically on install).


## Customization

Create Express TypeScript Starter can be customized to fit your specific requirements. You can modify configuration files, add or remove features, and integrate additional libraries or tools as needed.

## Custom Folder Structure

The project follows a customized folder structure to organize its source code and resources efficiently. Here's an overview of the folder structure:

- **src/common/**: Contains common files and utilities used across the project, such as `logger.ts` for logging and `routes.ts` for the top-level router.
- **src/resources/**: Contains resources organized by domain, with each resource folder containing `model.ts`, `interface.ts`, `controller.ts`, and `routes.ts` files for that specific resource.
- **src/middlewares/**: Contains middleware functions used in the Express application, including the 404 and error handlers.
- **src/services/**: Contains service modules such as `db.ts`, which exposes `connectDB()` / `disconnectDB()`.
- **src/server.ts**: Entry point: connects to MongoDB, starts the server, and shuts down gracefully.
- **src/app.ts**: Defines the Express application.

### Additional Files

- **.env.example**: Example environment variables file.
- **.gitignore**: Git ignore rules.
- **eslint.config.mjs**: ESLint flat configuration.
- **vitest.config.ts**: Vitest configuration file.
- **tests/**: Vitest + Supertest tests.
- **package.json**: Node.js dependencies and scripts.
- **README.md**: Project documentation.
- **tsconfig.json**: TypeScript configuration file.

This folder structure provides a clear organization for the project's source code and resources, making it easier to navigate and maintain as the project grows.

## Features

- **TypeScript Support:** Write your Express application in strict TypeScript for enhanced type safety and developer productivity.
- **Express 5:** Built on Express 5, with async errors forwarded to a central error handler.
- **Mongoose Integration:** Connect to MongoDB databases using Mongoose for data modeling and interaction.
- **Pino Logging:** Fast, structured logging with Pino (pretty-printed in development).
- **Vitest Testing:** Write and run tests with Vitest and Supertest.
- **tsx Development:** Hot reloading during development with tsx, no build step needed.
- **ESLint + Prettier:** Consistent code style with ESLint (flat config) and Prettier.
- **Husky + lint-staged:** Pre-commit hooks lint and format staged files and run the tests.
- **GitHub Actions CI:** Lint, build, and test on Node 22 and 24 for every push and pull request.

## What's New in v2

- Upgraded to Express 5, Mongoose 9, Pino 10, Helmet 8, ESLint 10 and TypeScript 6 (strict mode).
- Replaced Jest with Vitest, and nodemon + ts-node with tsx.
- `.env` is loaded by Node's built-in `--env-file` support, so `dotenv` is gone.
- The server waits for the database before listening, exits cleanly if it can't connect, and no longer logs your connection string.
- Added a central error handler (500 for unexpected errors, correct 4xx for bad requests).
- `npm start` now runs `dist/server.js`.
- The CLI now creates projects from a pinned release tag, renames the project in `package.json`, and initializes a fresh git repository.

## Contributing

Contributions to Create Express TypeScript Starter are welcome! To contribute, please follow these steps:

1. Fork the repository and create a new branch.
2. Make your changes and ensure that the code passes all tests.
3. Submit a pull request with a clear description of the changes you've made.
   
## Credits

Create Express TypeScript Starter was created by [Wubshet Zeleke](https://linkedin.com/in/wubshet-zeleke) and is maintained by the open-source community.

## License
Create Express TypeScript Starter is licensed under the [MIT License](LICENSE).
