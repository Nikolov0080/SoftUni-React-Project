import React, { useState, useEffect, useContext } from 'react'
import NaviItem from '../nav-item/navItem';
import '../../fire/fire';
import UserContext from '../../context/context';
import NavBar_items from './navBar_Items';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Navigation = () => {

    const context = useContext(UserContext);
    const history = useHistory();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [navData, setNavData] = useState([])

    useEffect(() => {

        if (context.user) {
            setUser(context.user);
            setTimeout(() => setLoading(false),200)
        } else {
            setTimeout(() => setLoading(false), 200)
        }
    }, [context]);

    useEffect(() => {
        setNavData(NavBar_items(user));
    }, [user]);

    const signOutUser = () => {
        context.signOut();
        history.push('/login')
    }

    if (loading && navData !== []) {
        return (
            <div className="bg-primary container-max-width-sm" >
                <div className="row justify-content-md-center" style={{backgroundColor:'green'}}>
                    <div className="text-center row" >
                        <h1 style={{ color: "white", height: "55px"  }}>loading . . .  </h1>
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
                        return <div key={index} className="col bg-primary" style={{ maxHeight: "65px", width: "12em" }} >
                            <NaviItem path={path} link={link} />
                        </div>
                    })}

                    {context.user !== null ? <Button variant="danger" onClick={signOutUser}>Sign out</Button> : ''}

                </div>
            </div>
        </div>
    )
}

export default Navigation