import React, { useState } from 'react';
import Input from '../../components/input/input';
import PageLayout from '../../components/pageLayout/pageLayout';
import style from './login.module.css';
import { Button } from 'react-bootstrap';
import auth from '../../fire/fireAuth';
import { useHistory } from 'react-router-dom';
import validation from '../../validations/scripts/login';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [passVal, setPassVal] = useState(true)
    const [emailVal, setEmailVal] = useState(true)

    const loginUser = (e) => {
        e.preventDefault();

        const { isValidEmail, isValidPassword } = validation(email, password);

        setEmailVal(isValidEmail)
        setPassVal(isValidPassword)

        if (isValidEmail && isValidPassword) {
            auth.login(email, password).then((resp) => {
                if (resp) {
                    return history.push('/products')
                }
                return history.push('/login')
            })
        } else {
            
        }
    }

    const emailError = (validation) => {
        if (!validation) {
            return (
                <p className={style.errorMessage}>Email invalid [ example@email.com ]</p>
            )
        }

    }

    const passwordError = (validation) => {
        if (!validation) {
            return (
                <p className={style.errorMessage}>Min 6 symbols digits and letters</p>
            )
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
                    {emailError(emailVal)}

                    <Input name="password"
                        type="password"
                        id="password"
                        label="Password"
                        placeholder="Password "
                        onChange={setPassword}
                    />
                    {passwordError(passVal)}

                    <Button onClick={loginUser} type="submit" variant="primary">Login</Button>
                </form>
            </div>
        </PageLayout>
    )

}

export default LoginPage;