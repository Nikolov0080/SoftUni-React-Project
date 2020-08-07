import React, { useContext, useState, useEffect } from 'react';
import db from '../../fire/DB-refs/orders';
import UserContext from '../../context/context';
import style from './card.module.css';
import { Button } from 'react-bootstrap';
const OrdersCart = (props) => {

    const context = useContext(UserContext);
    const id = context.user.id;
    const [orders, setOrders] = useState({});
    const [loading, setLoading] = useState(true)
    let totalPrice = 0
    const ordersRef = db.ref('orders/' + id);

    useEffect(() => {

        ordersRef.on('value', (snapshot) => {

            setOrders(snapshot.val());

            setTimeout(() => {

                setLoading(false);
            }, 500);
        });

    }, []);

    if (loading) {
        return (
            <div className="text-center" style={{ marginTop: "200px" }}>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    if (!orders) {
        return (
            <div className="text-center">
                <h2>No orders to complete</h2>
            </div>
        )
    }
    return (
        <div>
            {Object.entries(orders).map((order, index) => {
                const [orderId, orderData] = order;
                totalPrice += orderData.totalPrice;
                return (

                    <div key={index}>
                        <div className="container">
                            <div className="row align-items-center rounded border mt-4">
                                <div className="col-12 col-md-6 text-center"><img width="80%" height="200px" alt="Grandfather with child" src={orderData.imageUrl} sizes="(max-width: 660px) 100vw, 660px" /></div>
                                <div className="col-12 col-md-6">
                                    <p>{orderData.honeyType}</p>
                                    <p>{orderData.quantity}</p>
                                    <p>{orderData.totalPrice}</p>
                                    <p>{orderData.totalPrice}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

            <div className="row text-center mt-4 mb-4">
                <div className="col">
                    <h3>Total Price: {totalPrice}</h3>
                </div>
                <div className="col">
                    <Button variant="success">complete</Button>
                </div>
            </div>
        </div>
    );
};

export default OrdersCart;