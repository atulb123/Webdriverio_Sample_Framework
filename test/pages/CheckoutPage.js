const BasePage = require("./BasePage")
class CheckoutPage extends BasePage{
    get continueShoppingButton() {
        return $("//button[contains(.,'Continue Shoppin')]")
    }

    get checkOutButton() {
        return $("//button[contains(.,'Checkout')]")
    }

    get getPriceList() {
        return $$('//td[4]//strong')
    }

    get totalPrice() {
        return $("//td[@class='text-right']")
    }

    getTotalSum() {
        this.totalPrice.waitForDisplayed()
        return this.getPriceList.map(e => parseFloat(e.getText().replace(/[^0-9]+/g, ""))).reduce((a, b) => a + b, 0)
    }
}
module.exports = new CheckoutPage()