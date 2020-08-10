const messages = {
    email: "Email is not correct [ example@email.com ]",
    password: "Password must be 6 symbols digits and letters",
    login: "Email or Password invalid try again or register a new account",
    passwordMatch: "Password and Re-Password do not match",
    haveAcc:"This email already exists in our database",
    username: "Username can contain only letters and digits"
}

export default {
    emailError(val) {
  return messages.email
     
    },
    passwordError() {
            return messages.password
    },
    loginError() {
            return messages.login
    },
    usernameError()  {
            return messages.username
    },
    passMatchError() {
            return messages.passwordMatch
    },
    haveAcc(){
            return messages.haveAcc
    }
}