import React, { useState, useEffect } from 'react'
import NaviItem from '../nav-item/navItem';
import '../../fire/fire';

import isLogged from '../../fire/isLogged';

const Navigation = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        isLogged((user) => {
            if (user) {

                const userData = {
                    email: user.email,
                    id: user.uid,
                    username: user.displayName
                    // TODO implement user values such as orders,username,
                }
                
                setUser(userData)
            } else {
                setUser(false)
            }
        })

    }, [])


    if (user) {
        return (
            <div className="bg-primary container-max-width-sm " >
                <div className="row justify-content-md-center">
                    <div className="row" >
                        <div className="col-sm bg-primary" >
                            <NaviItem path="/" link="Home" />
                        </div>
                        <div className="col-sm bg-primary "  >
                            <NaviItem path="/profile" link={user.username} />
                        </div>
                        <div className="col-sm bg-primary" >
                            <NaviItem path="/order" link="Order" />
                        </div>
                        <div className="col-sm bg-primary" >
                            <NaviItem path="/products" link="Products" />
                        </div>
                        <div className="col-sm bg-primary" >
                            <NaviItem path="/signOut" link="SignOut" />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
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
                    </div>
                </div>
            </div>
        )
    }


}


export default Navigation