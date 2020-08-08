import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const ButtonLink = ({ to, value ,variant}) => {
    return (

        <Button variant={variant || "primary"}>
            <Link style={{ color: "white" }} to={to}>{value}</Link>
        </Button>

    );
};



export default ButtonLink;