import React, { useEffect, useState } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import Input from '../../components/input/input';
import style from './register.module.css';
import errorStyle from '../../validations/error.module.css'
import { Button } from 'react-bootstrap';
import auth from '../../fire/fireAuth'
import validation from '../../validations/scripts/validators';
import errMessages from '../../validations/errorMessages/errorMessages';

const RegisterPage = (props) => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [haveAcc, setHaveAcc] = useState(true);

    const [valData, setValData] = useState({
        isValidEmail: true,
        isValidPassword: true,
        isValidUsername: true,
        isValidPasswordMatch: true,
        isFormValid: false
    })

    const {
        isValidEmail,
        isValidPassword,
        isValidUsername,
        isValidPasswordMatch,
        isFormValid
    } = validation.register(email, password, username, rePassword)

    const registerUser = (event) => {
        event.preventDefault();

        setValData({
            isValidEmail,
            isValidPassword,
            isValidUsername,
            isValidPasswordMatch,
            isFormValid
        })

        console.log(valData)
setHaveAcc(true)
        if (isFormValid) {
            auth.register(email, password, username, profilePicture).then(resp => {
                if (resp) {
                    props.history.push('/products');
                }
            });
        } else {
            setHaveAcc(false)
            props.history.push('/register');
        }
    }

    return (
        <PageLayout title="Register">
            <div className={style.register}>
                <form>

                    <Input
                        name="username"
                        type="text"
                        id="username1"
                        label="Username"
                        placeholder="Username  at least 6 symbols"
                        onChange={setUsername}
                    />
                    <p className={errorStyle.errorMessage}>{errMessages.usernameError(valData.isValidUsername)}</p>
                    <Input
                        name="email"
                        type="email"
                        id="email1"
                        label="Email address"
                        placeholder="Email"
                        onChange={setEmail}
                    />
                    <p className={errorStyle.errorMessage}>{errMessages.emailError(valData.isValidEmail)}</p>

                    <Input
                        name="password"
                        type="password"
                        id="pass"
                        label="Password"
                        placeholder="Enter password more than 6 symbols"
                        onChange={setPassword}
                    />
                    <p className={errorStyle.errorMessage}>{errMessages.passwordError(valData.isValidPassword)}</p>


                    <Input
                        name="password"
                        type="password"
                        id="re-pass"
                        label="Confirm password"
                        placeholder="Same as password field"
                        onChange={setRePassword}
                    />
                    <p className={errorStyle.errorMessage}>{errMessages.passMatchError(valData.isValidPasswordMatch)}</p>

                    <Input
                        name="profilePicture"
                        type="text"
                        id="profilePicture1"
                        label="Profile picture"
                        placeholder="image URL"
                        onChange={setProfilePicture}
                    />
                    <p className={errorStyle.errorMessage}>{errMessages.haveAcc(haveAcc)}</p>

                    <Button onClick={registerUser} type="submit" variant="primary">Register</Button>


                </form>


            </div>
        </PageLayout>
    )

}




export default RegisterPage;