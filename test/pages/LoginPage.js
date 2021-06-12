const BasePage = require("./BasePage")
class LoginPage extends BasePage{

    get usernameTextBox() {
        return $("#username")
    }
    get passwordTextBox() {
        return $("//input[@name='password']")
    }
    get signInButton() {
        return $("#signInBtn")
    }
    get errorMessage() {
        return $("//strong[.='Incorrect']")
    }
}
module.exports=new LoginPage()