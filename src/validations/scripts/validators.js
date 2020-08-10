import validator from 'validator';

const register = (email, password, username, rePassword) => {

    const valPassAndUN = (password) => {
        return validator.trim(password) &&
            validator.matches(password, /([a-zA-Z \d])\w+/) &&
            validator.isLength(password, { min: 6, max: 20 })
    }

    const isValidEmail = validator.isEmail(email);
    const isValidPasswordMatch = validator.matches(password, rePassword);

    const isValidPassword = valPassAndUN(password);
    const isValidUsername = valPassAndUN(username);

    return {
        isValidEmail,
        isValidPassword,
        isValidUsername,
        isValidPasswordMatch
    }

}

const login = (email, password) => {

    const valPassAndUN = (password) => {
        return validator.trim(password) &&
            validator.matches(password, /([a-zA-Z \d])\w+/) &&
            validator.isLength(password, { min: 6, max: 20 })
    }

    const isValidEmail = validator.isEmail(email);


    const isValidPassword = valPassAndUN(password);


    return {
        isValidEmail,
        isValidPassword,
    }
}


export default {
    login,
    register
}