import React, { Component } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import Input from '../../components/input/input';
import style from './register.module.css';
import { Button } from 'react-bootstrap';



class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
        }

        this.setUsername = this.setUsername.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setRePassword = this.setRePassword.bind(this);
        this.registerUser = this.registerUser.bind(this);

    }

    setUsername(username) {
        this.setState({ username })
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
console.log(this.state)
    }


    render() {
        return (
            <PageLayout title="Register">
                <div className={style.register}>
                    <form>
                        <Input
                            name="username"
                            type="text"
                            id="username"
                            label="Username"
                            placeholder="Username more than 6 symbols"
                            onChange={this.setUsername}
                        />

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