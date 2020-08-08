import React, { useState, useEffect, useContext } from 'react'
import NaviItem from '../nav-item/navItem';
import '../../fire/fire';
import UserContext from '../../context/context';

const Navigation = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const context = useContext(UserContext);

    useEffect(() => {

        setUser(context.user);
        if (context.user) {
            setLoading(false)
        } else {
            setTimeout(() => setLoading(false), 650)
        }

    }, [context]);

    if (loading) {
        return (
            <div className="bg-primary container-max-width-sm" >
                <div className="row justify-content-md-center" >
                    <div className="text-center row" >
                        <h5 style={{ color: "white" }}>loading . . .  </h5>
                        <div className="spinner-border  text-light" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (user) {
        return (
            <div className="bg-primary container-max-width-lg" >
                <div className="row justify-content-md-center">
                    <div className="row" >
                        <div className="col bg-primary"style={{maxHeight:"65px",width:"12em"}} >
                            <NaviItem path="/" link="Home" />
                        </div>
                        <div className="col bg-primary " style={{maxHeight:"65px",width:"12em"}} >
                            <NaviItem path="/profile" link="Cart" />
                        </div>
                        <div className="col bg-primary"style={{maxHeight:"65px",width:"12em"}} >
                            <NaviItem path="/order" link="Order" />
                        </div>
                        <div className="col bg-primary" style={{maxHeight:"65px",width:"12em"}}>
                            <NaviItem path="/products" link="Products" />
                        </div>
                        <div className="col bg-primary"style={{maxHeight:"65px",width:"12em"}} >
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
                        <div className="col-sm bg-primary" style={{maxHeight:"65px",width:"12em"}} >
                            <NaviItem path="/" link="Home" />
                        </div>
                        <div className="col-sm bg-primary"style={{maxHeight:"65px",width:"12em"}}>
                            <NaviItem path="/login" link="Login" />
                        </div>
                        <div className="col-sm bg-primary"style={{maxHeight:"65px",width:"12em"}} >
                            <NaviItem path="/register" link="Register" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation