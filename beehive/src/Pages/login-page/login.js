import React, { Component } from 'react';
import Input from '../../components/input/input';
import PageLayout from '../../components/pageLayout/pageLayout';
import style from './login.module.css';
import { Button } from 'react-bootstrap';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            email: '',
            password: ''
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }


    handleEmail(event) {
        this.setState({ email: event });
    }

    handlePassword(event) {
        this.setState({ password: event });
    }

    loginUser(event) {
        event.preventDefault();

        console.log(this.state)
    }

    render() {
        return (
            <PageLayout title="Login">
                <div className={style.login}>
                    <form className="container">
                        <Input name="email"
                            type="email"
                            id="email1"
                            label="Email address"
                            placeholder="Email "
                            onChange={this.handleEmail}
                        />

                        <Input name="password"
                            type="password"
                            id="password"
                            label="Password"
                            placeholder="Password "
                            onChange={this.handlePassword}
                        />

                        <Button onClick={this.loginUser} type="submit" variant="primary">Login</Button>
                    </form>
                </div>


            </PageLayout>
        )
    }
}

export default LoginPage;

