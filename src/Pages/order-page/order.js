import React, { useContext } from 'react';
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
        }, 400)
        return (
            <h1>You will be redirected to Products</h1>
        )
    }

    return (
        <PageLayout title="Place Your order">
            <div className="container-sm " style={{background:"#F2F4F4", overflow: "hidden" }}>
                <div className="row">
                    <div className="col text-center" >
                        <ProductDetails name={context.currentProduct.name} price={context.currentProduct.price} user={context.user.username} userId={context.user.id} imageUrl={context.currentProduct.imageUrl} />
                    </div>
                    <div className="col text-center" >
                        <div className="text-center">
                            <img className="rounded" alt="honey " src={context.currentProduct.imageUrl} style={{ width: "250", height: "323px" }} />
                        </div>
                    </div>

                </div>
            </div>
        </PageLayout>
    )
}


export default OrderPage;