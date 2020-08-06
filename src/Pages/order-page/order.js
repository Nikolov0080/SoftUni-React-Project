import React, { useContext } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import UserContext from '../../context/context';
import { Dropdown, Table } from 'react-bootstrap'
const OrderPage = () => {

    const context = useContext(UserContext);

    const {
        imageUrl,
        description,
        name,
        price
    } = context.currentProduct;

    const submitOrder = (e) => {
        e.preventDefault();
        console.log("dshd")
    }

    console.log(price)
    return (
        <PageLayout title="Place Your order">
            <div className="container-xxl-4 " style={{ border: "blue solid 4px", overflow: "hidden" }}>
                <div className="row">
                    <div className="col text-center" style={{ border: "green solid 4px" }}>
                        <h2>Product details</h2>
                        <div>
                            <form >

                                <Table>


                                    <tbody>
                                        <tr>

                                            <td>
                                                Price: {price}
                                            </td>

                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="outline-disabled" id="dropdown-basic">
                                                        select size
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>Action</Dropdown.Item>
                                                        <Dropdown.Item>Another action</Dropdown.Item>
                                                        <Dropdown.Item>Something else</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>

                                        </tr>
                                    </tbody>
                                </Table>




                                <button type="submit" onClick={submitOrder}></button>
                            </form>
                        </div>


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