import React, { useContext, useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import UserContext from '../../context/context';
import { useHistory } from 'react-router-dom';
import Loading from '../loading/loading';

const ProfileCard = () => {

    const context = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    useEffect(() => {
        if (context.user) { setLoading(false) }
    }, [context])

    const signOutUser = () => {
        context.signOut()
        history.push('/')
    }

    if (loading) {
        return (
         <Loading />
        )
    }

    return (
        <div>
            <Card className="text-center" >
                <Card.Img style={{ width: '16rem', height: '14em', margin: "0 auto", borderRadius: "50%" }}
                    src={context.user.profilePicture}></Card.Img>
                <Card.Body>
                    <Card.Title >Username: {context.user.username}</Card.Title>
                    <Card.Title>Email: {context.user.email}</Card.Title>
                    <Card.Title>Orders: {(context.user.orders || "No orders at all")}</Card.Title>
                    <Button onClick={signOutUser}>Sign out</Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <p>Last update:</p>
                    {context.user.lastUpdate}</Card.Footer>
            </Card>
        </div>
    );
};

export default ProfileCard;