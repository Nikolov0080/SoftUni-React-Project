const messages = {
    email: "Email is not correct [ example@email.com ]",
    password: "Min 6 symbols digits and letters",
    login: "Email or Password invalid try again or register a new account",
    passwordMatch: "Password and Re-Password do not match",
    username: "Username can contain only letters and digits"
}

export default {
    emailError(val) {
        if (!val) {
            return messages.email
        }
    },
    passwordError(val) {
        if (!val) {
            return messages.password
        }
    },
    loginError(val) {
        if (!val) {
            return messages.login
        }
    },
    
}