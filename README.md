# Guru99 Cypress Test Automation Project

This is a test automation project developed using Cypress to verify the following functionality of Guru99 website. The project includes tests to verify that a user can:

Login with valid credentials.
Login with invalid credentials.
Create a New customer
Open a new account for the customer.
Withdraw money from an existing account (Using the account details from the new account)

# Results

The test results are stored in the mochaawesome folder in the test-results in JSON format generated using Mochawesome.

# Installation

To install this project, please follow these steps:

Clone the repository to your local machine
Install Node.js and NPM on your machine
Navigate to the project root directory in your terminal or command prompt
Run the command npm install to install all the dependencies required for this project
Running Tests
To run the tests, navigate to the project root directory and run the following command:

npm run test
This will run all the tests in the project and generate the test results in the test-results folder.

# Continuous Integration

This project uses CircleCI as the continuous integration tool. The configuration file for CircleCI can be found in the .circleci folder.

Whenever a new commit is pushed to the main branch, CircleCI will automatically run the tests and report the results in the CircleCI dashboard.
