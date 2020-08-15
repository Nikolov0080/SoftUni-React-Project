import React, { useContext, useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Row, Col } from 'react-bootstrap';
import dbUtils from '../../../fire/utils/DB-utils';
import UserContext from '../../../context/context';
import Input from '../input/input'
import moment from 'moment';
import DropdownMenu from '../../utils/input/dropdown';
import style from './AF.module.css';

const AddressForm = ({ order, setIsNotification, setDeletedOrder }) => {

    const context = useContext(UserContext);
    const { register, handleSubmit, errors, } = useForm();
    const [userData, setUserData] = useState('');
    const ordersCur = useRef(0);

    let {
        email,
        id,
        username,
        profilePicture,
        orders
    } = context.user;

    ordersCur.current = orders;
    
    useEffect(() => {
        setUserData(Object.assign({}, {
            lastUpdate: '',
            email,
            username,
            profilePicture,
            orders: ordersCur.current += 1
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
        <div className="mt-5" >
            <form onSubmit={handleSubmit(onSubmit)} >
                {errors.fullName && errors.fullName.type === "required" &&
                    (<p className={style.err}>Full Name field is required</p>)}

                <Row >
                    <Col >
                        <DropdownMenu
                            register={register({ required: true })}
                            id="sect-city"
                            name="city"
                            label="Select city"
                        />
                    </Col>
                    <Col>
                        <Input
                            type="text"
                            id="fullName"
                            label="Full Name"
                            name="fullName"
                            register={register({ required: true })}
                        />

                        {errors.phone && errors.phone.type === "required" &&
                            (<p className={style.err}>Phone field is required</p>)}

                        {errors.phone && errors.phone.type === "validate" &&
                            (<p className={style.err}>Phone must be 10 digits starting with 0</p>)}

                        <Input
                            type="tel"
                            id="phone"
                            label="Phone"
                            name="phone"
                            register={register({
                                required: true, validate: (value) => {
                                    return !!+value.match(/^0\d{9}$/)
                                },
                            })}
                        />
                    </Col>
                    <Col>
                        {errors.addressLine && errors.addressLine.type === "required" &&
                            (<p className={style.err}>Address line field is required</p>)}

                        <Input
                            id="addressLine"
                            label="Address line"
                            name="addressLine"
                            register={register({ required: true })}
                        />
                        <Button type="submit" variant="success">Complete</Button>
                        <Button onClick={deleteOrder} variant="danger">Delete</Button>
                    </Col>
                </Row>
            </form>
        </div>
    )
}

export default AddressForm