import React, { useContext, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import dbUtils from '../../../fire/utils/DB-utils';
import UserContext from '../../../context/context';

import moment from 'moment';

const AddressForm = ({ order ,setIsNotification,setDeletedOrder}) => {

    const context = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const [userData, setUserData] = useState('');
    

    let {
        email,
        id,
        username,
        profilePicture,
        orders
    } = context.user;


   

    useEffect(() => {
        setUserData(Object.assign({}, {
            lastUpdate: '',
            email,
            username,
            profilePicture,
            orders: orders += 1
        }))
    }, [username, email, profilePicture, orders])



    const onSubmit = (address) => {

        userData.lastUpdate = moment().format('MMMM Do YYYY, h:mm:ss a')

        const finalOrder = { address: address, ...order }
        console.log(finalOrder);

        dbUtils.updateOrder(id, finalOrder);
        dbUtils.updateTotalSpend(order.totalPrice, userData.username);
        dbUtils.addToCompletedOrders(id)
        dbUtils.updateUser(userData, id).then(() => {
            dbUtils.deleteOrders(id);
        })
        setIsNotification(true);
    }

    const deleteOrder = () => {
        setDeletedOrder(true);
        return dbUtils.deleteOrders(context.user.id);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >

                <label id="city">City:</label>
                <input id="city" name="city"
                    ref={register({ required: true })} />
                <br />
                <label id="street">Street</label>
                <input id="street" name="street"
                    ref={register({ required: true })} />
                <br />

                <label id="postCode">Post code</label>
                <input id="postCode" name="postCode"
                    ref={register({ required: true })} />
                <br />
                <br />

                <Button type="submit">Complete</Button>
            </form>
            <Button onClick={deleteOrder} variant="danger">Delete</Button>


        </div>
    )
}

export default AddressForm