const BasePage = require("./BasePage")
class ProductPage extends BasePage{
    get checkoutButton() {
        return $("*=Checkout")
    }
    get productList() {
        return $$("div[class='card h-100']")
    }

    selectProductBasedOnProductName(productNames) {
        browser.waitUntil(() => this.productList.length > 0)
        this.productList.filter(e => Array.from(productNames).includes(e.$("h4 a").getText())).map(e => e.$('button').click())
        return this;
    }

    getNumberOfProductAdded() {
        return parseInt(this.checkoutButton.getText().replace(/[^0-9]+/g, ""))
    }

}
module.exports = new ProductPage()