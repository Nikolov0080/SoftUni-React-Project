import React, { useEffect, useState } from 'react';
import Input from '../../components/input/input';
import PageLayout from '../../components/pageLayout/pageLayout';
import style from './login.module.css';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import auth from '../../fire/fireAuth';
import { useForm } from 'react-hook-form'
import Notification from "../../notifications/notification"

const LoginPage = () => {

    const [emailInUse, setEmailInUse] = useState(false)

    const history = useHistory();

    useEffect(() => {
        setEmailInUse(false)
    }, [])

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = ({ email, password }) => {
        auth.login(email, password).then((resp) => {
            if (resp) {
                return history.push('/products')
            } else {
                setEmailInUse(true);
                history.push('/login')
            }
        })
    }

    return (
        <PageLayout title="Login">

            <div className={style.login}>
                <form className="container" onSubmit={handleSubmit(onSubmit)}>

                    {errors.email && errors.email.type === "required" && (<Notification type="error" message="Please enter your email" />)}
                    {errors.password && errors.password.type === "required" && (<Notification type="error" message="Please enter your password" />)}
                    {errors.password && errors.password.type === "minLength" && (<Notification type="error" message="Password must be at least 6 characters long" />)}
                    {emailInUse === true ? <Notification type="error" message="Email or Password wrong" /> : ""}


                    <Input name="email"
                        type="email"
                        id="email1"
                        label="Email address"
                        placeholder="Email"
                        register={register({ required: true })}
                    />

                    <Input name="password"
                        type="password"
                        id="password"
                        label="Password"
                        placeholder="Password "
                        register={register({ required: true, minLength: 6 })}

                    />
                    <Button type="submit" variant="primary">Login</Button>
                </form>
            </div>
        </PageLayout>
    )

}

export default LoginPage;