import React, { useState } from 'react';
import Input from '../../components/input/input';
import PageLayout from '../../components/pageLayout/pageLayout';
import style from './login.module.css';
import { Button } from 'react-bootstrap';
import auth from '../../fire/fireAuth'
import { useHistory } from 'react-router-dom'

const LoginPage = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    const loginUser = (e) => {
        e.preventDefault()
        auth.login(email, password).then((resp) => {

            if (resp) {
                return history.push('/products')
            }
            return history.push('/login')
        })
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