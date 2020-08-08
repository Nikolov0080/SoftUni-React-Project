import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ordersRef from '../../fire/DB-refs/orders';
import moment from 'moment';

const ProductDetails = ({ name, price, user, userId, imageUrl }) => {
    const history = useHistory();

    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    const [order, setOrder] = useState({});

    useEffect(() => {
        setOrder({
            imageUrl: imageUrl,
            totalPrice: total,
            honeyType: name,
            quantity: quantity,
            user: user,
            createdAt: moment().format('LLL')
        });
    }, [total, name, quantity, user, imageUrl]);

    const saveQuantity = (e) => {
        return setQuantity(e.target.value);
        
    }

    const submitOrder = (e) => {
        e.preventDefault();
      setTotal(quantity * price)
        ordersRef.ref('orders/' + userId).push(order).then(response => {
            console.log('Order saved to card!');
            history.push('/profile');
        })
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
                <form onSubmit={submitOrder}>

                    <div className="col mr-4">
                        <h4>Type: {name}</h4>
                    </div>
                    <div className="col">
                        <h4>Price: {price} USD</h4>
                    </div>
                    <div className="col">
                        <label id="quantity"><h4>Quantity:  </h4></label>
                        <input defaultValue="1" id="quantity" onChange={(e) => saveQuantity(e)} className="text-center" type="number"></input>
                    </div>

                    <div className="col">
                        <h5>{total} USD</h5>
                        <Button onClick={checkTotal}>Check total</Button>
                    </div>

                    <Button type="submit" style={{ margin: "20px" }} >Add to card</Button>
                </form>
            </div>


            <Button type="submit" onClick={backToProducts}>Back to Products</Button>

        </div>
    )
}


export default ProductDetails;
