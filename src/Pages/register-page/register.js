import React, { useEffect, useState } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import Input from '../../components/input/input';
import style from './register.module.css';
import { Button } from 'react-bootstrap';
import Notification from '../../notifications/notification';
import { useForm } from 'react-hook-form'
import auth from '../../fire/fireAuth'

const RegisterPage = (props) => {


    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data)

        // auth.register(email, password, username, profilePicture).then(resp => {
        //     if (resp) {
        //         props.history.push('/products');
        //     } else {
        //         props.history.push('/register');
        //         setHaveAcc(false)
        //     }
        // });


    }

    return (
        <PageLayout title="Register">
            <div className={style.register}>
                <form onSubmit={handleSubmit(onSubmit)}>



                    <Input
                        name="username"
                        type="text"
                        id="username1"
                        label="Username"
                        placeholder="Username  at least 6 symbols"
                        register={register({ required: true })}

                    />

                    <Input
                        name="email"
                        type="email"
                        id="email1"
                        label="Email address"
                        placeholder="Email"
                        register={register({ required: true })}

                    />

                    <Input
                        name="password"
                        type="password"
                        id="pass"
                        label="Password"
                        placeholder="Enter password more than 6 symbols"
                        register={register({ required: true })}

                    />

                    <Input
                        name="password"
                        type="password"
                        id="re-pass"
                        label="Confirm password"
                        placeholder="Same as password field"
                        register={register({ required: true })}

                    />

                    <Input
                        name="profilePicture"
                        type="text"
                        id="profilePicture1"
                        label="Profile picture"
                        placeholder="image URL"
                        register={register({ required: false })}

                    />

                    <Button type="submit" variant="primary">Register</Button>
                </form>
            </div>
        </PageLayout>
    )
}




export default RegisterPage;