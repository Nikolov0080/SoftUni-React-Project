import React from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';


const OrderPage = (props) => {
// console.log(props)
    return (
        <PageLayout title="Place Your order">
            <div className="container-xxl-4 " style={{ border: "blue solid 4px", overflow: "hidden" }}>
                <div className="row">
                    <div className="col text-center" style={{ border: "green solid 4px" }}>
                        <h2>Product details</h2>
                    </div>
                    <div className="col text-center" style={{ border: "green solid 4px" }}>
                        <h2>Product image</h2>
                    </div>

                </div>
            </div>
        </PageLayout>
    )
}


export default OrderPage;