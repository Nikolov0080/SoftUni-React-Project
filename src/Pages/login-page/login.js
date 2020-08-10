import React, { useState } from 'react';
import Input from '../../components/input/input';
import PageLayout from '../../components/pageLayout/pageLayout';
import style from './login.module.css';
import errorStyle from '../../validations/error.module.css'
import { Button } from 'react-bootstrap';
import auth from '../../fire/fireAuth';
import { useHistory } from 'react-router-dom';
import validation from '../../validations/scripts/validators';
import errMessages from '../../validations/errorMessages/errorMessages';


const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [passVal, setPassVal] = useState(true)
    const [emailVal, setEmailVal] = useState(true)
    const [loginValid, setLoginValid] = useState(true);

    const loginUser = (e) => {
        e.preventDefault();

        const { isValidEmail, isValidPassword } = validation.login(email, password);

        setEmailVal(isValidEmail);
        setPassVal(isValidPassword);
        setLoginValid(true);

        if (isValidEmail && isValidPassword) {
            auth.login(email, password).then((resp) => {

                if (resp) {
                    return history.push('/products')
                } else {
                    setLoginValid(false);
                }
            })
        }
    }

    return (
        <PageLayout title="Login">
            <div className={style.login}>
                <form className="container">
                    <Input name="email"
                        type="email"
                        id="email1"
                        label="Email address"
                        placeholder="Email"
                        onChange={setEmail}
                    />
                    <p className={errorStyle.errorMessage}>{errMessages.emailError(emailVal)}</p>

                    <Input name="password"
                        type="password"
                        id="password"
                        label="Password"
                        placeholder="Password "
                        onChange={setPassword}
                    />
                    <p className={errorStyle.errorMessage}>{errMessages.passwordError(passVal)}</p>
                    <p className={errorStyle.errorMessage}>{errMessages.loginError(loginValid)}</p>


                    <Button onClick={loginUser} type="submit" variant="primary">Login</Button>
                </form>
            </div>
        </PageLayout>
    )

}

export default LoginPage;