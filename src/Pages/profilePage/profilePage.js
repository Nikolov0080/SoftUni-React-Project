import React  from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import style from './profilePage.module.css'
import { Row } from 'react-bootstrap';
import ProfileCart from '../../components/profileCart/profileCart';
import Cart from '../../components/Cart/Cart';

const ProfilePage = (props) => {

    return (
        <PageLayout title="Welcome + (Username)">

            <div className="container col-12">
                <Row>

                    {/* User data */}
                    <div className="w-50 mt-4 " style={{ "border": "solid 3px #eee"}} >
                        <h1 className={style.header}>Profile info</h1>
                  
                      <ProfileCart />

                    </div>

                    {/* Orders Data */}
                    <div className="w-50 mt-4" style={{ "border": "solid 3px  #000", "float": "right" ,maxHeight:"560px",overflow:"auto"}} >

                        <h1 className={style.header}>Cart</h1>

                      <Cart />

                    </div>
                </Row>

            </div>
        </PageLayout>
    )
}

export default ProfilePage