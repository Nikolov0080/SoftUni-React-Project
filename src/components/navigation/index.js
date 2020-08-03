import React from 'react'
import NaviItem from '../nav-item/navItem';

const Navigation = () => {
    return (
        <div className="bg-primary container-max-width-sm " >
            <div className="row justify-content-md-center">
                <div className="row" >
                    <div className="col-sm bg-primary" >
                        <NaviItem path="/" link="Home" />
                    </div>
                    <div className="col-sm bg-primary">
                        <NaviItem path="/login" link="Login" />
                    </div>
                    <div className="col-sm bg-primary" >
                        <NaviItem path="/register" link="Register" />
                    </div>
                    <div className="col-sm bg-primary" >
                        <NaviItem path="/order" link="Order" />
                    </div>
                    <div className="col-sm bg-primary" >
                        <NaviItem path="/products" link="Products" />
                    </div>
                    <div className="col-sm bg-primary" >
                        <NaviItem path="/signOut" link="Sign out" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navigation