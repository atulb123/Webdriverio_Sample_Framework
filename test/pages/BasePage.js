module.exports = class BasePage {

    waitTillDisplayed(webelement, timeout=10000) {
        webelement.waitForDisplayed({ timeout: timeout })
        return this
    }

    clickOnWebElement(webelement,timeout=10000) {
        webelement.waitForDisplayed({ timeout: timeout })
        webelement.click()
        return this
    }

    enterTextToTextBox(webelement, value,timeout=10000) {
        webelement.waitForDisplayed({ timeout: timeout })
        webelement.setValue(value)
        return this
    }

    selectFromDynamicDropDown(inputTextBox, dropDownOption, value,timeout=20000) {
        inputTextBox.waitForDisplayed({ timeout: timeout })
        inputTextBox.setValue(value)
        dropDownOption.waitForDisplayed({ timeout: timeout })
        dropDownOption.click()
        return this
    }
}