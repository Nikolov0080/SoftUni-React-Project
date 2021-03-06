import React, { useContext, useEffect, useState, useRef } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import style from './profilePage.module.css'
import { Row } from 'react-bootstrap';
import ProfileCard from '../../components/profile-cart/profileCard/profileCard';
import Cart from '../../components/profile-cart/Cart/Cart';
import UserContext from '../../context/context';
import Notification from '../../notifications/notification'

const ProfilePage = (props) => {
    const context = useContext(UserContext).user.username;
    const [title, setTitle] = useState('');
    const mounted = useRef(false)

    const isNotification = !!(props.location.state === 'completed');
    const deletedOrder = !!(props.location.state === 'deleted');


    useEffect(() => {

        mounted.current = true

        if (mounted.current) {
            setTitle(`Welcome ${context}`);
            mounted.current = false;
        }
    }, [context]);

    return (
        <PageLayout title={title}>

            {isNotification === true ? <Notification type="success" message="Order is Complete !" /> : ''}
            {deletedOrder === true ? <Notification type="error" message="Order is Deleted !" /> : ''}

            <div className="container col-12">
                <Row>

                    {/* User data */}
                    <div className="w-50 mt-4 "  >
                        <h1 className={style.header}>Profile info</h1>

                        <ProfileCard />

                    </div>

                    {/* Orders Data */}
                    <div className="w-50 mt-4" style={{  "float": "right", maxHeight: "560px", overflow: "auto" }} >

                        <h1 className={style.header}>Cart</h1>

                        <Cart />

                    </div>
                </Row>

            </div>
        </PageLayout>
    )
}

export default ProfilePage