import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const ButtonLink = ({to,value}) => {
    return (
        <div>
             <Button variant="primary">
    <Link style={{ color: "white" }} to={to}>{value}</Link>
                 </Button>
        </div>
    );
};



export default ButtonLink;