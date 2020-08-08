import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import UserContext from '../../context/context';
import { Link } from 'react-router-dom'

const ProfileCard = () => {

    const context = useContext(UserContext)
  
    return (
        <div>
            <Card className="text-center" >
                <Card.Img style={{ width: '16rem', height: '14em', margin: "0 auto", borderRadius: "50%" }}
                    src={context.user.profilePicture}></Card.Img>
                <Card.Body>
                    <Card.Title>Username: {context.user.username}</Card.Title>
                    <Card.Title>Email: {context.user.email}</Card.Title>
                    <Card.Title>Orders: {(context.user.orders || "No orders at all")}</Card.Title>

                    <Button variant="primary"><Link style={{ color: "white" }} to="/signOut">Sign out</Link></Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <p>Last update:</p>
                    {context.user.lastUpdate}</Card.Footer>
            </Card>
        </div>
    );
};

ProfileCard.propTypes = {

};

export default ProfileCard;