const loginPage = require("../pages/LoginPage")
const productPage = require("../pages/ProductPage")
const loginSteps = require("./LoginSteps")
const checkoutPage = require("../pages/CheckoutPage")
const chaiexpect = require('chai').expect
const confirmationPage = require("../pages/ConfirmationPage")

class OrderProductSteps {
    orderProduct(testData) {
        loginSteps.performLogin(testData['user_name'], testData['password'])
        chaiexpect(productPage.selectProductBasedOnProductName(testData['products']).getNumberOfProductAdded()).to.be.equal(Array.from(testData['products']).length)
        productPage.clickOnWebElement(productPage.checkoutButton)
        checkoutPage.waitTillDisplayed(checkoutPage.continueShoppingButton, 2000)
        chaiexpect(checkoutPage.getTotalSum()).to.be.equal(parseFloat(checkoutPage.totalPrice.getText().replace(/[^0-9]+/g, "")))
        checkoutPage.clickOnWebElement(checkoutPage.checkOutButton)
        confirmationPage.selectFromDynamicDropDown(confirmationPage.deliveryLocationTextBox, confirmationPage.locationSuggestion(testData['country']), testData['country']).clickOnWebElement(confirmationPage.termsCheckBox).clickOnWebElement(confirmationPage.purchaseButton)
        return confirmationPage.orderCOnfirmationTextBlock.isDisplayed();
    }
}
module.exports = new OrderProductSteps()