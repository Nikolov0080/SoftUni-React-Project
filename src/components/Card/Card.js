import React, { useContext, useState, useEffect } from 'react';
import { ListGroup, Button, Table } from 'react-bootstrap';
import db from '../../fire/DB-refs/orders';
import UserContext from '../../context/context';

const OrdersCard = (props) => {

    const context = useContext(UserContext);
    const id = context.user.id;
    const [orders, setOrders] = useState({});
    const [loading, setLoading] = useState(true)

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
            <ListGroup>
                {Object.entries(orders).map((order, index) => {
                    const [orderId, orderData] = order;
                    console.log(orderData)
                    return (

                        <ListGroup.Item key={index} >
                            <div className="text-center">
                                <Table striped bordered hover variant="light">
                                    <thead>
                                        <tr>

                                            <th>Honey type</th>
                                            <th>Quantity</th>
                                            <th>Final price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                    <td>{orderData.honeyType}</td>
                                            <td>{orderData.quantity}</td>
                                            <td>{orderData.totalPrice} USD</td>
                                        </tr>
                                       
                                        <tr>

                    <td colSpan="3">Added on: {orderData.createdAt}</td>
                                          
                                        </tr>
                                    </tbody>
                                </Table>
                                {/*                                
                                    <h5>Honey type: {orderData.honeyType}</h5>
                               
                               
                                    <h5>Quantity: {orderData.quantity}</h5> */}


                                <div className="row-2 ">
                                    <Button variant="success" >Complete</Button>
                                    <Button variant="danger ml-2" >Delete</Button>
                                </div>
                            </div>



                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
        </div >
    );


};



export default OrdersCard;