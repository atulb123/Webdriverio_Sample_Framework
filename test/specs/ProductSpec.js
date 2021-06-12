const loginStep = require("../steps/LoginSteps")
const readTestData = require('../utils/ReadTestData')
const productPage = require('../pages/ProductPage')
const chaiexpect = require("chai").expect

describe('Add elements to cart', function () {
    it('REGRESSION - Validate elements count on cart', function () {
        let test_data = readTestData.getTestData("valid_credentials")
        loginStep.performLogin(test_data['user_name'], test_data['password'])
        expect(productPage.checkoutButton).toBeDisplayed()
        productPage.selectProductBasedOnProductName(test_data['products'])
        chaiexpect(Array.from(test_data['products']).length).to.be.equal(productPage.getNumberOfProductAdded())
    })
})