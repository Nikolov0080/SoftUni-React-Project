import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ordersRef from '../../fire/DB-refs/orders';



const ProductDetails = ({ name, price, user, userId }) => {
    const history = useHistory();
    console.log(userId)
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    const [order, setOrder] = useState({});

    useEffect(() => {
        setOrder({
            totalPrice: total,
            honeyType: name,
            quantity: quantity,
            user: user
        })
    }, [total, name, quantity, user]);

    const saveQuantity = (e) => {
        console.log(quantity);
        return setQuantity(e.target.value);
    }

    const submitOrder = (e) => {
        e.preventDefault();

        ordersRef.ref('orders/' + userId).push(order);

        console.log(order);
    }

    const backToProducts = () => {
        return history.push('/products');
    }

    const checkTotal = () => {
        setTotal(quantity * price)
    }

    return (
        <div>

            <h2>Product details</h2>
            <div className="row-4">

                <div className="col mr-4">
                    <h4>Type: {name}</h4>
                </div>
                <div className="col">
                    <h4>Price: {price} USD</h4>
                </div>
                <div className="col">
                    <label id="quantity"><h4>Quantity:  </h4></label>
                    <input id="quantity" onChange={(e) => saveQuantity(e)} className="text-center" type="number"></input>
                </div>

                <div className="col">
                    <h5>{total} USD</h5>
                    <Button onClick={checkTotal}>Check total</Button>
                </div>

            </div>


            <Button type="submit" style={{ margin: "20px" }} onClick={(e) => submitOrder(e)}>Add to card</Button>
            <Button type="submit" onClick={backToProducts}>Back to Products</Button>

        </div>
    )
}


export default ProductDetails;
