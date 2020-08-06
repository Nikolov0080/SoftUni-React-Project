import React, { useState, useContext } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import UserContext from '../../context/context';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const OrderPage = () => {

    const context = useContext(UserContext);
    const history = useHistory();
    const [quantity, setQuantity] = useState(Number);

    const {
        imageUrl,
        description,
        name,
        price
    } = context.currentProduct;

    const submitOrder = (e) => {
        e.preventDefault();
        console.log("order submit +1")
    }

    const backToProducts = () => {
        return history.push('/products');
    }

    console.log(price)
    return (
        <PageLayout title="Place Your order">
            <div className="container-xxl-4 " style={{ border: "blue solid 4px", overflow: "hidden" }}>
                <div className="row">
                    <div className="col text-center" style={{ border: "green solid 4px" }}>
                        <h2>Product details</h2>
                        <div>




                            <Button type="submit" onClick={submitOrder}>Add to card</Button>
                            <Button type="submit" onClick={backToProducts}>Back to Products</Button>

                        </div>


                    </div>
                    <div className="col text-center" >
                        <h2>Product image</h2>
                        <div className="text-center" style={{border:"black solid 2px"}}>
                            <img className="rounded" src={imageUrl} style={{ width: "200", height: "300px" }} />
                        </div>
                    </div>

                </div>
            </div>
        </PageLayout>
    )
}


export default OrderPage;