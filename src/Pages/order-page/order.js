import React, { useState, useContext, useEffect } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import UserContext from '../../context/context';
import { useHistory } from 'react-router-dom';
import ProductDetails from '../../components/productDetails/productDetails';
const OrderPage = () => {

    const context = useContext(UserContext);
    const history = useHistory();


    if (!context.currentProduct) {
        setTimeout(() => {
            history.push('/products');
        }, 700)
        return (
            <h1>You will be redirected to Products</h1>
        )

    }

    const {
        imageUrl,
        description,
        name,
        price
    } = context.currentProduct;




    console.log(price)
    return (
        <PageLayout title="Place Your order">
            <div className="container-xxl-4 " style={{ border: "blue solid 4px", overflow: "hidden" }}>
                <div className="row">
                    <div className="col text-center" style={{ border: "green solid 4px" }}>


                        <ProductDetails name={name} price={price} user={context.user.username} userId={context.user.id} />

                    </div>
                    <div className="col text-center" >
                        <h2>Product image</h2>
                        <div className="text-center" style={{ border: "black solid 2px" }}>
                            <img className="rounded" src={imageUrl} style={{ width: "250", height: "323px" }} />
                        </div>
                    </div>

                </div>
            </div>
        </PageLayout>
    )
}


export default OrderPage;