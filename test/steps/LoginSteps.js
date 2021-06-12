const loginPage = require('../pages/LoginPage')
const productPage = require('../pages/ProductPage')

class LoginSteps {
    performLogin(username, password) {
        loginPage.enterTextToTextBox(loginPage.usernameTextBox, username).enterTextToTextBox(loginPage.passwordTextBox, password).clickOnWebElement(loginPage.signInButton)
        expect(productPage.checkoutButton).toBeDisplayed()
    }

    performInvalidLogin(username, password) {
        loginPage.enterTextToTextBox(loginPage.usernameTextBox, username).enterTextToTextBox(loginPage.passwordTextBox, password).clickOnWebElement(loginPage.signInButton)
        expect(loginPage.errorMessage).toBeDisplayed()
    }
}
module.exports = new LoginSteps()