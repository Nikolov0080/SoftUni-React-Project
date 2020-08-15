import React, { useState, useEffect } from 'react';
import style from './lastFive.module.css';
import db from '../../../fire/DB-refs/DB-ref';
import Loading from '../../../components/utils/loading/loading';
import { Row, Col } from 'react-bootstrap'

const LastFive = () => {

    const [lastFive, setLastFive] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (lastFive.length === 0) {
            db.ref('completedOrders/').limitToLast(5).once('value', (snapshot) => {
                if (snapshot.val()) {
                    setLastFive(Object.values(snapshot.val()).reverse())
                }
                setLoading(false);
            })
        }
    }, [lastFive]);

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="col text-center" style={{ background: "#7adae7" }}>
            <h1>Last five orders</h1>
            {lastFive.length === 0 ? <h1>No orders yet...</h1> : ''}
            {lastFive.map((item, i) => {
                return <Row key={i} className="text-center" style={{ width: "80%", border: "#fff solid 4px", marginLeft: '10%', padding: "5px" }}>
                    <Col className="text-right"> [{i+1}] --- <img className={style.honeyPic} alt="honey" src={item.imageUrl} /></Col>
                    <Col>{item.honeyType} for {item.totalPrice} USD</Col>
                    <Col>Ordered by: {item.user}</Col>
                    <Col>Shipping to: {item.address.city}</Col>
                    <Col>Date: {item.createdAt}</Col>
                </Row>
            })}
        </div>
    )
}

export default LastFive;
