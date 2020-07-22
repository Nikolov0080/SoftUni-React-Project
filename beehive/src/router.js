import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from './Pages/homePage/home-page';


class PageRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </Router>
        )
    }
}

export default PageRouter;