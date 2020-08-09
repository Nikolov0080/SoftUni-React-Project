import React, { useEffect, useState } from 'react';
import Input from '../../components/input/input';
import PageLayout from '../../components/pageLayout/pageLayout';
import style from './login.module.css';
import { Button } from 'react-bootstrap';
import auth from '../../fire/fireAuth';
import { useHistory } from 'react-router-dom';
import validator from 'validator';

const LoginPage = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);


    //VALIDATION
    const validateEmail = () => {
        if (!validEmail) {
            return (
                <p className={style.errorMessage}>Must be a valid email (example@email.com)</p>
            )
        }
    }

    const validatePassword = () => {
        if (!validPassword) {
            return (
                <p className={style.errorMessage}>Password must be at least 6 symbols letters and numbers</p>
            )
        }
    }

    //VALIDATION


    const loginUser = (e) => {
        e.preventDefault();

        //VALIDATION
        setValidEmail(validator.isEmail(email));
        setValidPassword(validator.isLength(password, { min: 6, max: 19 }));
        //VALIDATION
        console.log(validEmail)
        console.log(validPassword)

        if (validPassword && validPassword) {
            auth.login(email, password).then((resp) => {
                if (resp) {
                    return history.push('/products')
                }
                return history.push('/login')
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
                    {validateEmail()}

                    <Input name="password"
                        type="password"
                        id="password"
                        label="Password"
                        placeholder="Password "
                        onChange={setPassword}
                    />
                    {validatePassword()}


                    <Button onClick={loginUser} type="submit" variant="primary">Login</Button>
                </form>
            </div>
        </PageLayout>
    )

}

export default LoginPage;