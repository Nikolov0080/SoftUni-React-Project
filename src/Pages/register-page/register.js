import React, { useState, useEffect } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import Input from '../../components/input/input';
import style from './register.module.css';
import { Button } from 'react-bootstrap';
import auth from '../../fire/fireAuth'



const RegisterPage = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');


  const  registerUser = (event) => {
        event.preventDefault();

        if (password === rePassword) {
            auth.register(email, password);
            props.history.push('/products')

        } else {

            props.history.push('/register')

        }
    }


    return (
        <PageLayout title="Register">
            <div className={style.register}>
                <form>


                    <Input
                        name="email"
                        type="email"
                        id="email1"
                        label="Email address"
                        placeholder="Email"
                        onChange={setEmail}
                    />

                    <Input
                        name="password"
                        type="password"
                        id="pass"
                        label="Password"
                        placeholder="Enter password more than 6 symbols"
                        onChange={setPassword}
                    />


                    <Input
                        name="password"
                        type="password"
                        id="re-pass"
                        label="Confirm password"
                        placeholder="Same as password field"
                        onChange={setRePassword}
                    />

                    <Button onClick={registerUser} type="submit" variant="primary">Register</Button>


                </form>


            </div>
        </PageLayout>
    )

}




export default RegisterPage;