import React from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import style from './profilePage.module.css'
import { ListGroup, Row, Button, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'
const ProfilePage = (props) => {


    return (
        <PageLayout title="Welcome + (Username)">

            <div className="container col-12">
                <Row>


                    {/* User data */}
                    <div className="w-50 mt-4 " style={{ "border": "solid 3px #eee" }} >
                        <h1 className={style.header}>Profile info</h1>
                          {/* <Image    roundedCircle /> */}
                        <Card className="text-center" >
                          <Card.Img style={{ width: '16rem',height:'14em',margin:"0 auto",borderRadius:"50%" }} src="https://picsum.photos/400/600.webp"></Card.Img>
                            <Card.Body>
                                <Card.Title>Username: (username)</Card.Title>
                                <Card.Title>Email: (username)</Card.Title>
                                <Card.Title>Orders: (Number)</Card.Title>
                                <Card.Title>Price of total Orders:(Number) </Card.Title>
                                <Button variant="primary"><Link style={{ color:"white" }} to="/signOut">Sign out</Link></Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">registered (date/time)</Card.Footer>
                        </Card>

                    </div>

                    {/* Orders Data */}
                    <div className="w-50 mt-4" style={{ "border": "solid 3px  #000", "float": "right" }} >

                        <h1 className={style.header}>Orders</h1>

                        <ListGroup>
                            <ListGroup.Item className="text-center">Cras justo odio <Button variant="danger" style={{ "float": "right" }}>Delete</Button></ListGroup.Item>
                            <ListGroup.Item className="text-center">Cras justo odio <Button variant="danger" style={{ "float": "right" }}>Delete</Button></ListGroup.Item>
                            <ListGroup.Item className="text-center">Cras justo odio <Button variant="danger" style={{ "float": "right" }}>Delete</Button></ListGroup.Item>
                            <ListGroup.Item className="text-center">Cras justo odio <Button variant="danger" style={{ "float": "right" }}>Delete</Button></ListGroup.Item>
                            <ListGroup.Item className="text-center">Cras justo odio <Button variant="danger" style={{ "float": "right" }}>Delete</Button></ListGroup.Item>
                            <ListGroup.Item className="text-center">Cras justo odio <Button variant="danger" style={{ "float": "right" }}>Delete</Button></ListGroup.Item>
                            <ListGroup.Item className="text-center">Cras justo odio <Button variant="danger" style={{ "float": "right" }}>Delete</Button></ListGroup.Item>

                        </ListGroup>

                    </div>
                </Row>

            </div>
        </PageLayout>
    )
}

export default ProfilePage