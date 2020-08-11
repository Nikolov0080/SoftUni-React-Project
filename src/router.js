import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './Pages/homePage/home-page';
import LoginPage from './Pages/login-page/login';
import OrderPage from './Pages/order-page/order';
import RegisterPage from './Pages/register-page/register';
import ProductsPage from './Pages/products-page/products';
import Profile from './Pages/profilePage/profilePage';
import ErrorPage from './Pages/errorPage/errorPage';
import ProtectedRoute from './protectedRoute/protectedRoute';
import ProtectedRouteLogged from './protectedRoute/protectedRouteLogged';

const PageRouter = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <ProtectedRouteLogged exact path="/login" component={LoginPage} />
                <ProtectedRouteLogged exact path="/register" component={RegisterPage} />
                <ProtectedRoute exact path="/products" component={ProductsPage} />
                <ProtectedRoute exact path="/profile" component={Profile} />
                <ProtectedRoute exact path="/order/:name" component={OrderPage} />
                <Route exact path="*" component={ErrorPage} />
            </Switch>
        </Router>
    )

}

export default PageRouter;