import React, { useEffect, useState } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import Input from '../../components/input/input';
import style from './register.module.css';
import { Button } from 'react-bootstrap';
import auth from '../../fire/fireAuth'
import validation from '../../validations/scripts/validators';
import errMessages from '../../validations/errorMessages/errorMessages';
import Notification from '../../notifications/notification';

const RegisterPage = (props) => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [haveAcc, setHaveAcc] = useState(true);
    const [vUsername, setVUsername] = useState(true);
    const [vPassword, setVPassword] = useState(true);
    const [vEmail, setVEmail] = useState(true);
    const [vPasswordMatch, setVPasswordMatch] = useState(true);


    useEffect(() => {
        setVUsername(true)
        setVPassword(true)
        setVEmail(true)
        setVPasswordMatch(true)
    }, [email, username, password, rePassword])

    const registerUser = (event) => {
        event.preventDefault();

        setVUsername(validation.register(email, password, username, rePassword).isValidUsername)
        setVPassword(validation.register(email, password, username, rePassword).isValidPassword)
        setVEmail(validation.register(email, password, username, rePassword).isValidEmail)
        setVPasswordMatch(validation.register(email, password, username, rePassword).isValidPasswordMatch)

        setHaveAcc(true);
        console.log(validation.register(email, password, username, rePassword))
        console.log(vUsername)
        if ((vUsername === true) && (vPassword === true) && (vEmail === true) && (vPasswordMatch === true)) {
            auth.register(email, password, username, profilePicture).then(resp => {
                if (resp) {
                    props.history.push('/products');
                } else {
                    props.history.push('/register');
                    setHaveAcc(false)
                }
            });
        }

    }

    return (
        <PageLayout title="Register">
            <div className={style.register}>
                <form>

                    {vUsername !== true ? <Notification type="error" message={errMessages.usernameError()} /> : ""}
                    {vPassword !== true ? <Notification type="error" message={errMessages.passwordError()} /> : ""}
                    {vEmail !== true ? <Notification type="error" message={errMessages.emailError()} /> : ""}
                    {vPasswordMatch !== true ? <Notification type="error" message={errMessages.passMatchError()} /> : ""}
                    {haveAcc !== true ? <Notification type="error" message={errMessages.haveAcc()} /> : ""}


                    <Input
                        name="username"
                        type="text"
                        id="username1"
                        label="Username"
                        placeholder="Username  at least 6 symbols"
                        onChange={setUsername}
                    />

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

                    <Input
                        name="profilePicture"
                        type="text"
                        id="profilePicture1"
                        label="Profile picture"
                        placeholder="image URL"
                        onChange={setProfilePicture}
                    />
                    {/* <p className={errorStyle.errorMessage}>{errMessages.haveAcc(haveAcc)}</p> */}

                    <Button onClick={registerUser} type="submit" variant="primary">Register</Button>
                </form>
            </div>
        </PageLayout>
    )
}




export default RegisterPage;