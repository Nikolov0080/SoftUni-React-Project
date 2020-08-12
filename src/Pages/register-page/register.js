import React, { useEffect, useState } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import Input from '../../components/utils/input/input';
import style from './register.module.css';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import auth from '../../fire/fireAuth'

const RegisterPage = (props) => {

    const [haveAcc, setHaveAcc] = useState(false)
    const { register, handleSubmit, errors, watch } = useForm();

    useEffect(() => {
        setHaveAcc(false);
    }, [])

    const onSubmit = ({ email, username, password, profilePicture }) => {

        auth.register(email, password, username, profilePicture).then(resp => {
            if (resp) {
                props.history.push({ pathname: '/', state: "registered" });
            } else {
                props.history.push('/register');
                setHaveAcc(true)
            }
        });


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
                        register={register({ required: true, minLength: 6, pattern: /^[A-Za-z\d]+$/i })}
                    />

                    {errors.username && errors.username.type === "pattern" &&
                        (<p className={style.err}>Username can contain only letters and numbers</p>)}

                    {errors.username && errors.username.type === "required" &&
                        (<p className={style.err}>Please enter Username</p>)}

                    {errors.username && errors.username.type === "minLength" &&
                        (<p className={style.err}>Username must be 6 characters long</p>)}


                    <Input
                        name="email"
                        type="email"
                        id="email1"
                        label="Email address"
                        placeholder="Email"
                        register={register({ required: true, pattern: /^\S+@\S+\.\S+$/ })}
                    />

                    {errors.email && errors.email.type === "required" &&
                        (<p className={style.err}>Please enter Email</p>)}

                    {haveAcc === true ? <p>The email address is already in use by another account.</p> : ''}

                    {errors.email && errors.email.type === "pattern" &&
                        (<p className={style.err}>Please enter valid Email</p>)}

                    <Input
                        name="password"
                        type="password"
                        id="pass"
                        label="Password"
                        placeholder="Enter password more than 6 symbols"
                        register={register({ required: true, minLength: 6 })}
                    />

                    {errors.password && errors.password.type === "required" &&
                        (<p className={style.err}>Please enter your Password</p>)}

                    {errors.password && errors.password.type === "minLength" &&
                        (<p className={style.err}>Password must be 6 characters long</p>)}

                    <Input
                        name="rePassword"
                        type="password"
                        id="re-pass"
                        label="Confirm password"
                        placeholder="Same as password field"
                        register={register({
                            required: true, minLength: 6,
                            validate: (value) => {
                                return value === watch('password');
                            }
                        })}
                    />

                    {errors.rePassword && errors.rePassword.type === "required" &&
                        (<p className={style.err}>Please enter your Confirm password field</p>)}

                    {errors.rePassword && errors.rePassword.type === "validate" &&
                        (<p className={style.err}>Passwords must match !</p>)}

                    <Input
                        name="profilePicture"
                        type="text"
                        id="profilePicture1"
                        label="Profile picture (optional)"
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