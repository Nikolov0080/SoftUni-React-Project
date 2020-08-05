import React from 'react';
import { ListGroup, Row, Button, Card } from 'react-bootstrap';


const OrdersCard = ({props}) => {

    return (
        <div>
            <ListGroup>
                {props.map((x, i) => {

                    return <ListGroup.Item key={i} className="text-center">{x} <Button variant="danger" style={{ "float": "right" }}>Delete</Button></ListGroup.Item>
                })}

            </ListGroup>
        </div>
    );
};



export default OrdersCard;