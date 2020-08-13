import React, { useContext, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Row, Col } from 'react-bootstrap';
import dbUtils from '../../../fire/utils/DB-utils';
import UserContext from '../../../context/context';
import Input from '../input/input'
import moment from 'moment';
import DropdownMenu from '../../utils/input/dropdown';

const AddressForm = ({ order, setIsNotification, setDeletedOrder }) => {

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
        <div >
            <form onSubmit={handleSubmit(onSubmit)} >
                <Row >
                    <Col >
                        <Input
                            id="city"
                            label="City"
                            name="city"
                            register={register({ required: true })}
                        />
                    </Col>
                    <Col>
                        <Input
                            id="postCode"
                            label="postCode"
                            name="postCode"
                            register={register({ required: true })}
                        />
                    </Col>
                    <Col>
                        <Input
                            id="street"
                            label="Street"
                            name="street"
                            register={register({ required: true })}
                        />
                    </Col>

                </Row>
                <Button type="submit">Complete</Button>
            </form>
            <Button onClick={deleteOrder} variant="danger">Delete</Button>
        </div>
    )
}

export default AddressForm