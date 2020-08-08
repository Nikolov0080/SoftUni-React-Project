import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import UserContext from '../../context/context';
import ButtonLink from '../button-link/button-link';

const ProfileCard = () => {

    const context = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (context.user) { setLoading(false) }
    }, [context])


    if (loading) {
        return (
            <div className="text-center" style={{ marginTop: "200px" }}>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Card className="text-center" >
                <Card.Img style={{ width: '16rem', height: '14em', margin: "0 auto", borderRadius: "50%" }}
                    src={context.user.profilePicture}></Card.Img>
                <Card.Body>
                    <Card.Title>Username: {context.user.username}</Card.Title>
                    <Card.Title>Email: {context.user.email}</Card.Title>
                    <Card.Title>Orders: {(context.user.orders || "No orders at all")}</Card.Title>
                    <ButtonLink to="/signOut" value="Sign out" />
                </Card.Body>
                <Card.Footer className="text-muted">
                    <p>Last update:</p>
                    {context.user.lastUpdate}</Card.Footer>
            </Card>
        </div>
    );
};

export default ProfileCard;