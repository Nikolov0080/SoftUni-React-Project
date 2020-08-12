import React from 'react'
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import dbUtils from '../../../fire/utils/DB-utils';

const AddressForm = ({ id, userData, order }) => {


    const { register, handleSubmit, errors } = useForm();


    const onSubmit = (data) => {

        // dbUtils.updateTotalSpend(order.totalPrice, userData.username);
        // dbUtils.addToCompletedOrders(id)
        // dbUtils.updateUser(userData, id).then(() => {
        //     dbUtils.deleteOrders(id);
        // });
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >

                <label id="city">City:</label>
                <input id="city" name="city" ref={register} />
                <br />
                <label id="street">Street</label>
                <input id="street" name="street" ref={register} />
                <br />

                <label id="postCode">Post code</label>
                <input id="postCode" name="postCode" ref={register} />

                <br />
                <br />

                <Button type="submit">Complete</Button>
            </form>
        </div>
    )
}



export default AddressForm

