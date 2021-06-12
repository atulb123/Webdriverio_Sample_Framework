Please Follow Below Steps to run TC's:

Pre-requisite:
1. Node should be installed
2. Check Node version using node -v

Folder Structure:
1. pages -> It has all locators based on POM
2. specs -> It has test cases
3. steps -> It has all steps related to each test case
4. utils -> It has all utility methods mainly reading test data files

To run the test case go the project directory and run below command:
1. Download all dependcies by going to project path and run npm install
2. To Run Smoke test use npm run smoke_test
3. To run Regression test case use regression_test
4. To generate allure report run generate_report

Note: If any issue related to allure is shown, install allure commandline globally using npm install -g allure-commandline