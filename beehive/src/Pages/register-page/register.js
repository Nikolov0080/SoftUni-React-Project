import React, { Component } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import Input from '../../components/input/input';
import style from './register.module.css';



class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.title
        }
    }

    render() {
        return (
            <PageLayout title="Register">
                <div className={style.register}>


                    <Input
                        name="username"
                        type="text"
                        id="username"
                        label="Username"
                        placeholder="Username more than 6 symbols"
                    />

                    <Input
                        name="email"
                        type="email"
                        id="email1"
                        label="Email address"
                        placeholder="Email"

                    />

                    <Input
                        name="password"
                        type="password"
                        id="pass"
                        label="Password"
                        placeholder="Enter password more than 6 symbols"
                    />


                    <Input
                        name="password"
                        type="password"
                        id="re-pass"
                        label="Confirm password"
                        placeholder="Same as password field"
                    />



                </div>
            </PageLayout>
        )
    }
}

export default RegisterPage;