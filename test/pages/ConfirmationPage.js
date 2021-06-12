const BasePage = require("./BasePage")
class ConfirmationPage extends BasePage {
    get deliveryLocationTextBox() {
        return $("#country")
    }

    locationSuggestion(country) {
        return $("*=" + country)
    }

    get termsCheckBox() {
        return $("//label[contains(.,'agree with the')]")
    }

    get purchaseButton() {
        return $("//input[@value='Purchase']")
    }

    get orderCOnfirmationTextBlock() {
        return $("//strong[.='Success!']")
    }
}
module.exports = new ConfirmationPage()