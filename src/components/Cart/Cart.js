import React, { useContext, useState, useEffect } from 'react';
import db from '../../fire/DB-refs/orders';
import UserContext from '../../context/context';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import dbUtils from '../../fire/utils/DB-utils';
import ButtonLink from '../button-link/button-link';
import Loading from '../loading/loading';
import style from './cart.module.css'

const OrdersCart = (props) => {

    const context = useContext(UserContext);

    const [orders, setOrders] = useState({});
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(null);

    let totalPrice = 0

    useEffect(() => {
        if(context.user!==null){
            setId(context.user.id)
        }
    }, [context])

    const ordersRef = db.ref('orders/' + id);

    useEffect(() => {

        ordersRef.once('value', (snapshot) => {

            setOrders(snapshot.val());
            setLoading(false);
        });

    }, [ordersRef]);

    const completeOrder = () => {

        let {
            email,
            id,
            username,
            profilePicture,
            orders
        } = context.user

        const userData = Object.assign({}, { lastUpdate: moment().format('MMMM Do YYYY, h:mm:ss a'), email, username, profilePicture, orders: orders += 1 })

        dbUtils.updateTotalSpend(totalPrice);

        dbUtils.updateUser(userData, id).then(() => {
            dbUtils.deleteOrders(id);
        })
    }

    if (loading) {
        return (
          <Loading />
        )
    }

    if (!orders) {
        return (
            <div className="text-center">
                <div className={style.emptyMessage}>
                <h2>No orders to complete</h2>
                <h2>Go to <ButtonLink  to="/products" value="Products" /> page and make one</h2>
                </div>
            </div>
        )
    }

    return (
        <div>
            {Object.values(orders).map((orderData, index) => {

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