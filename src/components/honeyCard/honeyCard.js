import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import style from './honeyCard.module.css';

class HoneyCard extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
            imageUrl: props.imageUrl,
            name: props.name,
            description: props.description,
            showAll: false
        }
    }

    showMore = () => this.setState({ showAll: true });
    showLess = () => this.setState({ showAll: false });

    render() {

        const [content, limit] = [this.state.description, 60];

        return (
            <div className={style.card}>
                <Card style={{ width: '18rem', margin: "10px",borderColor:"green" }}>
                    <Card.Body style={{ "textAlign": "center" }}>
                        <Card.Img style={{ height: "12em", width: "10em" }} variant="bottom" src={this.state.imageUrl} />
                        <Card.Title>{this.state.name}</Card.Title>

                        <Card.Text>
                            {this.state.showAll === true
                                ?
                                content
                                :
                                content.slice(0, limit)}
                            <br />
                            {this.state.showAll === true
                                ?
                                <Button variant="outline-info" size="sm" onClick={this.showLess}>Show less</Button>
                                :
                                <Button variant="outline-info" size="sm" onClick={this.showMore}>Read more</Button>
                            }
                        </Card.Text>

                        <Button variant="outline-primary" ><Link  to="/order">Buy this product</Link></Button>
                    </Card.Body>
                </Card>
            </div>
        );

    }
}

export default HoneyCard;

