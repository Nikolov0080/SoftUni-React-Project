import React, { useState, useEffect, useContext } from 'react'
import NaviItem from '../nav-item/navItem';
import '../../fire/fire';
import UserContext from '../../context/context';
import NavBar_items from './navBar_Items';

const Navigation = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const context = useContext(UserContext);
    const [navData, setNavData] = useState([])

    useEffect(() => {

        if (context.user) {
            setUser(context.user);
            setTimeout(() => setLoading(false), 650)

        } else {
            setTimeout(() => setLoading(false), 650)
        }
    }, [context]);

    useEffect(() => {
        setNavData(NavBar_items(user));
    }, [user])

    if (loading && navData !== [] ) {
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

    return (
        <div className="bg-primary container-max-width-lg" >
            <div className="row justify-content-md-center">
                <div className="row" >

                    {navData.map(({ path, link }, index) => {
                      return    <div key={index} className="col bg-primary" style={{ maxHeight: "65px", width: "12em" }} >
                        <NaviItem path={path} link={link} />
                    </div>
                    })}
                  

                </div>
            </div>
        </div>
    )


}

export default Navigation