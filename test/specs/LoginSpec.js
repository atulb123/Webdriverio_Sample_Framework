const loginPage = require("../pages/LoginPage")
const loginStep = require("../steps/LoginSteps")
const productPage = require('../pages/ProductPage')
const readTestData = require('../utils/ReadTestData')

describe('Validate Login', function () {
    it('SMOKE - verify valid login', function () {
        let test_data = readTestData.getTestData("valid_credentials")
        loginStep.performLogin(test_data['user_name'], test_data['password'])
    })

    it('SMOKE - verify invalid login', function () {
        let test_data = readTestData.getTestData("invalid_credentials")
        loginStep.performInvalidLogin(test_data['user_name'], test_data['password'])
    })
});