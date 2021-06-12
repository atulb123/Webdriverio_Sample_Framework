const orderProductSteps = require("../steps/OrderProductSteps")
const readTestData = require('../utils/ReadTestData')
describe('Order Product', function () {
    it("SMOKE|REGRESSION - Confirm Product", function () {
        orderProductSteps.orderProduct(readTestData.getTestData("valid_credentials"))
    })
})