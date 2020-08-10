import validator from 'validator';

export default (email, password) => {

    const valPass = (password) => {
        return validator.trim(password) &&
            validator.matches(password, /([a-zA-Z \d])\w+/) &&
            validator.isLength(password, { min: 6, max: 20 })
    }

    const isValidEmail = validator.isEmail(email);
    const isValidPassword = valPass(password);

    return {
        isValidEmail,
        isValidPassword
    }

}