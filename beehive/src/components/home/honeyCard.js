import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import style from './honeyCard.module.css';


const HoneyCard = (props) => {
console.log(props)
    return (
        <div className={style.card}>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={props.imageUrl} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button href="#" variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default HoneyCard;

