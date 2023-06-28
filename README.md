# Introduction

This program has been developed using TypeScript, a statically typed superset of JavaScript that enables the creation of robust and scalable applications. TypeScript provides additional features such as type checking, interfaces, and advanced editor tooling, enhancing the overall development experience.

## Unit Testing

The unit tests were been implemented using Mocha and Chai. Mocha is a feature-rich JavaScript test framework that provides a flexible and expressive testing environment, while Chai is an assertion library that offers various assertion styles for making assertions in a readable and intuitive manner.

## Project Structure

The project has the following directory structure:

- `src/main.ts`: The main.ts file serves as the entry point of the program. It contains the main logic to initiate and run the application.
- `src/models`: Contains the Animal class with the method sound() and then a Cat and Dog class that inherits from the Animal class.
- `src/tests/unit-tests`: Contains the unit tests required for functions.
- `src/utils/number-utils.ts`: Contains the functions that: calculates the power of a number, calculates simple interest, prints out the odd numbers in an array, prints out the even numbers in an array.
- `src/utils/string-utils.ts`: Contains the functions that: concatenates two variables, checks if a string is a palindrome, removes repeated characters from a string, onverts any string value to upper case, converts any string value to a sentence case.
- `mochawesome-report`: COntains the reults of the unit tests.

## Prerequisites

To set up and run the program, you will need the following:

- [Node.js] You can download and install Node.js from the official Node.js website: https://nodejs.org.

- [VsCode] You can download and install Visual Studio Code from the official website: https://code.visualstudio.com.

Once you have Node.js and Visual Studio Code installed

1. Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/e-francis/AFL-Assessment.git
```

2. Install the required dependencies using npm. You can do this by navigating to the root of the cloned directory and running the following command:

```bash
npm install

```

## Running the Program and Unit Tests

To run the program and unit tests, you can use the `npm run all` command to run both simultaneously, `npm run program` to run only the program and `npm run tests` to run only the unit tests. Here's how you can execute it:

1. Open a terminal or command prompt.
2. Navigate to the project root directory.
3. Run the following command:

   ```
   npm run all
   ```

   ```
   npm run program
   ```

   ```
   npm run tests
   ```

   This command executes the `scripts` in the `package.json` file.

Please note that you need to install the necessary dependencies using `npm install` before running the tests for the first time.

## tsconfig.json

The `tsconfig.json` file is a TypeScript configuration file that specifies the compiler options for your project. Here's a breakdown of the options used in the provided `tsconfig.json` file:

`"target": "es2020"`: Sets the ECMAScript target version to ES2020.
`"module": "commonjs"`: Specifies the module system to CommonJS, which is compatible with Node.js.
`"outDir": "dist"`: Specifies the output directory for the compiled JavaScript files.
`"strict": true:` Enables strict type checking.
`"esModuleInterop"`: true: Enables interoperability between CommonJS and ES modules.
`"resolveJsonModule"`: true: Allows importing JSON files as modules.
`"sourceMap": true`: Generates source maps for the compiled JavaScript files.
`"baseUrl": "./"`: Sets the base URL for module resolution.
`"paths": {"*": ["src/*"]}`: Defines path mappings for module resolution, in this case mapping all modules to the src directory.
`"types": ["mocha", "chai"]`: Includes type definitions for Mocha and Chai libraries.
The `"include"` section specifies the files to be included in the compilation process, using glob patterns. It includes all .ts files under the `src directory`, the `main.ts` file, test files under `src/tests`, and test files in the tests directory.

The `"exclude"` section specifies the directories or files that should be excluded from the compilation process, in this case, the node_modules directory.
