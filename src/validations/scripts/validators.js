import validator from 'validator';

const valPassAndUN = (input) => {
    return validator.trim(input) &&
        validator.matches(input, /([a-zA-Z \d])\w+/) &&
        validator.isLength(input, { min: 6, max: 20 })
}

const register = (email, password, username, rePassword) => {

    const isValidEmail = validator.isEmail(email);
    const isValidPasswordMatch = validator.matches(password, rePassword);
    const isValidPassword = !!valPassAndUN(password);
    const isValidUsername = !!valPassAndUN(username);

    return {
        isValidEmail,
        isValidPassword,
        isValidUsername,
        isValidPasswordMatch, 
    }

}

const login = (email, password) => {

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