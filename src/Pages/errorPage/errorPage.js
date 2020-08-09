import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import PageLayout from '../../components/pageLayout/pageLayout';
import errorImg from './errorImg.jpg';
import style from "./errorPage.module.css";

const ErrorPage = (props) => {
    return (
        <PageLayout title="Page not found :/">

            <div className={style.leftDiv}>
                <h1>Something went wrong...</h1>
                <h2>No page on this address</h2>

                <Button variant="primary" style={{marginTop:"6em"}}>
                    <Link style={{ color: "white",fontSize:"40px" }} to="/">Go to Home page!!!</Link>
                </Button>

            </div>
            <div className={style.rightDiv}>

                <img alt="sdhfhsdjk" className={style.errorImage} src={errorImg}></img>
            </div>
            
        </PageLayout>
    );
};

export default ErrorPage;