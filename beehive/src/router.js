import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './Pages/homePage/home-page';
import LoginPage from './Pages/login-page/login';

class PageRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={LoginPage} />
                </Switch>
            </Router>
        )
    }
}

export default PageRouter;