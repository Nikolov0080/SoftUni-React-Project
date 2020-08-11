import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import PageLayout from '../../components/pageLayout/pageLayout';

const ErrorPage = () => {
    return (
        <PageLayout title="Page not found :/">
            <div className="container">
                <h1>Something went wrong...</h1>
                <h2>No page on this address</h2>
                <Button variant="primary" style={{marginTop:"6em"}}>
                    <Link style={{ color: "white",fontSize:"40px" }} to="/">Go to Home page!!!</Link>
                </Button>
            </div>  
        </PageLayout>
    );
};

export default ErrorPage;