import React ,{useContext} from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import style from './profilePage.module.css'
import { Row } from 'react-bootstrap';
import UserContext from '../../context/context';
import ProfileCard from '../../components/profileCard/profileCard';
import OrdersCard from '../../components/ordersCard/ordersCard';

const ProfilePage = (props) => {

    const context = useContext(UserContext)



    return (
        <PageLayout title="Welcome + (Username)">

            <div className="container col-12">
                <Row>

                    {/* User data */}
                    <div className="w-50 mt-4 " style={{ "border": "solid 3px #eee" }} >
                        <h1 className={style.header}>Profile info</h1>
                  
                      <ProfileCard />

                    </div>

                    {/* Orders Data */}
                    <div className="w-50 mt-4" style={{ "border": "solid 3px  #000", "float": "right" }} >

                        <h1 className={style.header}>Orders</h1>

                      <OrdersCard props={[1,2,3,4,5]}/>

                    </div>
                </Row>

            </div>
        </PageLayout>
    )
}

export default ProfilePage