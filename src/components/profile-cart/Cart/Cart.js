import React, { useContext, useState, useEffect } from 'react';
import db from '../../../fire/DB-refs/DB-ref';
import UserContext from '../../../context/context';
import ButtonLink from '../../utils/button-link/button-link';
import Loading from '../../utils/loading/loading';
import style from './cart.module.css'
import AddressForm from '../../utils/addressForm/addressForm';
import Notification from '../../../notifications/notification'


const OrdersCart = (props) => {

    const context = useContext(UserContext);

    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(null);
    const [isNotification, setIsNotification] = useState(false);
    const [deletedOrder, setDeletedOrder] = useState(false);

    useEffect(() => {

        if (context.user !== null) {
            setId(context.user.id)
        }

    }, [context])

    const orderRef = db.ref('orders/' + id);

    useEffect(() => {
        const setData = () => {
            orderRef.on('value', (snap) => {
                setOrder(snap.val())
            })
        }

        if (order === null) {
            setData();
            setTimeout(()=>{
                setLoading(false)
            },350)
        }

    }, [orderRef, order]);

    if (loading) {
        return (
                <Loading />
        )
    }

    if (!order) {
        return (
            <div className="text-center">
                <div className={style.emptyMessage}>
                    <h2>No orders to complete</h2>
                    <h2>Go to <ButtonLink to="/products" value="Products" /> page and make one</h2>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div>
                {isNotification === true ? <Notification type="success" message="Order is Complete !" /> : ''}
                {deletedOrder === true ? <Notification type="error" message="Order is Deleted !" /> : ''}

                <div className="container">
                    <div className="row align-items-center rounded border mt-4">
                        <div className="col-12 col-md-6 text-center"><img width="80%" height="200px" alt="Grandfather with child" src={order.imageUrl} sizes="(max-width: 660px) 100vw, 660px" /></div>
                        <div className="col-12 col-md-6">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Honey type</td>
                                        <td>{order.honeyType}</td>
                                    </tr>
                                    <tr>
                                        <td>Quantity</td>
                                        <td>{order.quantity}</td>
                                    </tr>
                                    <tr>
                                        <td>Total price</td>
                                        <td>{order.totalPrice} USD</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" text-center">

                <AddressForm order={order}
                    setIsNotification={setIsNotification}
                    setDeletedOrder={setDeletedOrder}
                />

            </div>
        </div>
    );
};

export default OrdersCart;