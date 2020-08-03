import React, { Component } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import Input from '../../components/input/input';
import style from './register.module.css';
import { Button } from 'react-bootstrap';
import auth from '../../fire/fireAuth'

class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }

        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setRePassword = this.setRePassword.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    setEmail(email) {
        this.setState({ email })
    }

    setPassword(password) {
        this.setState({ password })
    }

    setRePassword(rePassword) {
        this.setState({ rePassword })
    }

    registerUser = (event) => {
        event.preventDefault();

        const {
            email,
            password,
            rePassword
        } = this.state

        if (password === rePassword) {
            auth.register(email, password);
            this.props.history.push('/products')

        } else {

            this.props.history.push('/register')

        }
    }


    render() {
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
                            onChange={this.setEmail}
                        />

                        <Input
                            name="password"
                            type="password"
                            id="pass"
                            label="Password"
                            placeholder="Enter password more than 6 symbols"
                            onChange={this.setPassword}
                        />


                        <Input
                            name="password"
                            type="password"
                            id="re-pass"
                            label="Confirm password"
                            placeholder="Same as password field"
                            onChange={this.setRePassword}
                        />

                        <Button onClick={this.registerUser} type="submit" variant="primary">Register</Button>


                    </form>


                </div>
            </PageLayout>
        )
    }
}

export default RegisterPage;