import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './Pages/homePage/home-page';
import LoginPage from './Pages/login-page/login';
import OrderPage from './Pages/order-page/order';
import RegisterPage from './Pages/register-page/register';
import ProductsPage from './Pages/products-page/products';
class PageRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/products" component={ProductsPage} />
                    <Route exact path="/order" component={OrderPage} />
                </Switch>
            </Router>
        )
    }
}

export default PageRouter;