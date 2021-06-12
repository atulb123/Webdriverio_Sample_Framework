const fs = require("fs")

class ReadTestData {

    getTestData(test_case_name) {
        return Array.from(JSON.parse(fs.readFileSync("test\\test_data\\test_data.json"))).filter(testData => testData['test_case_name'] === test_case_name)[0]
    }

    getUrl(env) {
        return JSON.parse(fs.readFileSync("test\\test_data\\test_url.json"))[env]
    }
}
module.exports = new ReadTestData()