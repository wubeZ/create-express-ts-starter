# Create Express TypeScript Starter

Create Express TypeScript Starter is a boilerplate project designed to help you quickly set up a new Express.js project with TypeScript. It includes pre-configured settings and dependencies for a seamless development experience.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)
- [Custom Folder Structure](#custom-folder-structure)
- [Features](#features)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)


## Getting Started

To get started with Create Express TypeScript Starter, follow these steps:

1. Use `npx` to create a new project based on the starter:

   ```sh
   npx @easy-starters/create-express-ts-starter your_project_name
   ```
   This command will create a new directory with the specified name (your_repo_name), set up the project inside it, and install all the dependencies.
2. Navigate into the newly created directory:

   ```sh
   cd your_project_name
   ```
3. Change some values in package.json to meet your project needs. You can modify the project name, description, author, and other configurations as necessary.
4. Create `.env` file using the provided example in `.env.example`.
5. Customize the README file to provide information specific to your project.
6. Start the development server:

   ```sh
   npm run dev
   ```



## Usage

After setting up your project, you can use the provided scripts and configuration to start developing your Express application. Here are the scripts below:

- **`npm run dev`:**  Start the development server with hot reloading.

- **`npm run start`:**  Run the production build of the project.

- **`npm run test`:**  Run all tests.

- **`npm run test-coverage`:**  Run all tests and generate code coverage report.

- **`npm run debug-test`:**  Run tests in debug mode with detection of open handles.

- **`npm run debug-test-coverage`:**  Run tests in debug mode with detection of open handles and generate code coverage report.

- **`npm run lint`:**  Run ESLint to lint TypeScript files.

- **`npm run lint:fix`:**  Run ESLint to lint TypeScript files and automatically fix fixable issues.

- **`npm run build`:**  Build the project for production.

- **`npm run prettier-watch`:**  Automatically format TypeScript files using Prettier on file change.

- **`npm run prettier:fix`:**  Format all TypeScript files using Prettier.

- **`npm run prepare`:**  Trigger Husky to set up Git hooks.


## Customization

Create Express TypeScript Starter can be customized to fit your specific requirements. You can modify configuration files, add or remove features, and integrate additional libraries or tools as needed.

## Custom Folder Structure

The project follows a customized folder structure to organize its source code and resources efficiently. Here's an overview of the folder structure:

- **src/common/**: Contains common files and utilities used across the project, such as `env.ts` for managing environment variables and `logger.ts` for logging.
- **src/resources/**: Contains resources organized by domain, with each resource folder containing `model.ts`, `interface.ts`, `controller.ts`, and `routes.ts` files for that specific resource.
- **src/middlewares/**: Contains middleware functions used in the Express application.
- **src/services/**: Contains configuration files and other service-related modules used in the project.
- **src/server.ts**: Entry point for the Express server.
- **src/app.ts**: Defines the Express application.

### Additional Files

- **.env.example**: Example environment variables file.
- **.gitignore**: Git ignore rules.
- **jest.config.js**: Jest configuration file.
- **package.json**: Node.js dependencies and scripts.
- **README.md**: Project documentation.
- **tsconfig.json**: TypeScript configuration file.

This folder structure provides a clear organization for the project's source code and resources, making it easier to navigate and maintain as the project grows.

## Features

- **TypeScript Support:** Write your Express application using TypeScript for enhanced type safety and developer productivity.
- **Express.js Integration:** Utilize the powerful features of Express.js to build robust and scalable web applications.
- **Mongoose Integration:** Seamlessly connect your Express application to MongoDB databases using Mongoose for data modeling and interaction.
- **Pino Logging:** Benefit from fast and efficient logging with Pino, a low-overhead Node.js logger.
- **Jest Testing:** Write and run tests for your application using Jest, a delightful JavaScript testing framework.
- **Nodemon Development:** Use Nodemon for automatic server restarts during development for a smooth development experience.
- **Prettier Formatting:** Maintain consistent code style and formatting with Prettier, an opinionated code formatter.
- **Husky Git Hooks:** Enforce code quality and standards with Husky pre-commit hooks for linting and formatting checks.
- **GitHub Actions CI:** Set up continuous integration with GitHub Actions to automate testing and deployment workflows.


## Contributing

Contributions to Create Express TypeScript Starter are welcome! To contribute, please follow these steps:

1. Fork the repository and create a new branch.
2. Make your changes and ensure that the code passes all tests.
3. Submit a pull request with a clear description of the changes you've made.
   
## Credits

Create Express TypeScript Starter was created by [Wubshet Zeleke](https://linkedin.com/in/wubshet-zeleke) and is maintained by the open-source community.

## License
Create Express TypeScript Starter is licensed under the MIT License.
