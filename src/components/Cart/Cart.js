import React, { useContext, useState, useEffect } from 'react';
import db from '../../fire/DB-refs/orders';
import UserContext from '../../context/context';
import style from './card.module.css';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import dbUtils from '../../fire/utils/DB-utils';


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

    // Add price to total price for the site
    // update User + order

    const completeOrder = () => {

        let {
            email,
            id,
            username,
            profilePicture,
            orders
        } = context.user

        const userData = Object.assign({}, { lastUpdate: moment().format('MMMM Do YYYY, h:mm:ss a'), email, username, profilePicture, orders: orders += 1 })
        
        dbUtils.updateTotalSpend(totalPrice)
        
        dbUtils.updateUser(userData, id).then(resp => {
            console.log(resp);
            dbUtils.deleteOrders(id);
        })
    }

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
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Honey type</td>
                                                <td>{orderData.honeyType}</td>
                                            </tr>
                                            <tr>
                                                <td>Quantity</td>
                                                <td>{orderData.quantity}</td>
                                            </tr>
                                            <tr>
                                                <td>Total price</td>
                                                <td>{orderData.totalPrice} USD</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

            <div className="row text-center mt-4 mb-4 position-bottom">
                <div className="col">
                    <h3>Total Price: {totalPrice} USD</h3>
                </div>
                <div className="col">
                    <Button onClick={completeOrder} variant="success">Complete</Button>
                </div>
            </div>
        </div>
    );
};

export default OrdersCart;