import React from 'react';
import { Card, Button } from 'react-bootstrap';
import style from './honeyCard.module.css';


const HoneyCard = (props) => {
    
    return (
        <div className={style.card}>
            <Card style={{ width: '18rem' }}>
                <Card.Body style={{"text-align":"center"}}>
                <Card.Img style={{height:"12em",width:"10em"}} variant="bottom" src={props.imageUrl} />
                    <Card.Title>{props.name}</Card.Title>
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

