import React, { useEffect, useState } from 'react';
import Input from '../../components/input/input';
import PageLayout from '../../components/pageLayout/pageLayout';
import style from './login.module.css';
import { Button } from 'react-bootstrap';
import auth from '../../fire/fireAuth';
import { useHistory } from 'react-router-dom';
import validation from '../../validations/scripts/validators';
import errMessages from '../../validations/errorMessages/errorMessages';
import Notification from '../../notifications/notification';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [passVal, setPassVal] = useState(true)
    const [emailVal, setEmailVal] = useState(true)
    const [loginValid, setLoginValid] = useState(true);

    useEffect(() => {
        setEmailVal(true);
        setPassVal(true);
    }, [email, password])

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
                    {emailVal !== true ? <Notification type="error" message={errMessages.emailError()} /> : ""}
                    {passVal !== true ? <Notification type="error" message={errMessages.passwordError()} /> : ""}
                    {loginValid !== true ? <Notification type="error" message={errMessages.loginError()} /> : ""}

                    <Input name="email"
                        type="email"
                        id="email1"
                        label="Email address"
                        placeholder="Email"
                        onChange={setEmail}
                    />

                    <Input name="password"
                        type="password"
                        id="password"
                        label="Password"
                        placeholder="Password "
                        onChange={setPassword}
                  />
                    <Button onClick={loginUser} type="submit" variant="primary">Login</Button>
                </form>
            </div>
        </PageLayout>
    )

}

export default LoginPage;