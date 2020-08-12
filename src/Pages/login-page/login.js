import React, { useEffect, useState } from 'react';
import Input from '../../components/input/input';
import PageLayout from '../../components/pageLayout/pageLayout';
import style from './login.module.css';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import auth from '../../fire/fireAuth';
import { useForm } from 'react-hook-form'

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
                return history.push({ pathname: '/', state: "logged" })
            } else {
                setEmailInUse(true);
                history.push('/login')
            }
        })
    }

    return (
        <PageLayout title="Login">
            {emailInUse === true ? <p>Email or password wrong,try again</p> : ""}
            <div className={style.login}>
                <form className="container" onSubmit={handleSubmit(onSubmit)}>

                    <Input name="email"
                        type="email"
                        id="email1"
                        label="Email address"
                        placeholder="Email"
                        register={register({ required: true, pattern: /^\S+@\S+\.\S+$/ })}
                    />

                    {errors.email && errors.email.type === "required" &&
                        (<p className={style.err}>Please enter Email</p>)}

                    {errors.email && errors.email.type === "pattern" &&
                        (<p>Please enter valid Email</p>)}

                    <Input name="password"
                        type="password"
                        id="password"
                        label="Password"
                        placeholder="Password "
                        register={register({ required: true, minLength: 6 })}
                    />

                    {errors.password && errors.password.type === "required" &&
                        (<p>Please enter your Password</p>)}

                    {errors.password && errors.password.type === "minLength" &&
                        (<p>Password must be 6 characters long</p>)}

                    <Button type="submit" variant="primary">Login</Button>
                </form>
            </div>
        </PageLayout>
    )
}

export default LoginPage;