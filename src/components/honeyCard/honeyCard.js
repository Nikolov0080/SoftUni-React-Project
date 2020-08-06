import React, { useState, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import style from './honeyCard.module.css';
import UserContext from '../../context/context'

const HoneyCard = ({ imageUrl, name, description ,price}) => {

    const context = useContext(UserContext)
    const [showAll, setShowAll] = useState(false)
    const showMore = () => setShowAll(true);
    const showLess = () => setShowAll(false);

    const getProduct = () => context.setProduct({ imageUrl, name, description,price })

    const [content, limit] = [description, 60];
    const path = '/order/' + name.replace(' ', '_').toLowerCase();

    return (
        <div className={style.card}>
            <Card style={{ width: '18rem', margin: "10px", borderColor: "green" }}>
                <Card.Body style={{ "textAlign": "center" }}>
                    <Card.Img style={{ height: "12em", width: "10em" }} variant="bottom" src={imageUrl} />
                    <Card.Title>{name}</Card.Title>

                    <Card.Text>
                        {showAll === true
                            ?
                            content
                            :
                            content.slice(0, limit)+"..."}
                        <br />
                        {showAll === true
                            ?
                            <Button variant="outline-info" size="sm" onClick={showLess}>Show less</Button>
                            :
                            <Button variant="outline-info" size="sm" onClick={showMore}>Read more</Button>
                        }
                    </Card.Text>

                    <Button variant="primary" onClick={getProduct}>

                        <Link to={path} style={{ color: "white" }} >Buy this product</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default HoneyCard;