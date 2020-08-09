import React, { useState, useEffect } from 'react';
import UserContext from './context/context';
import firebase from 'firebase';
import fireAuth from './fire/fireAuth';
import './fire/fire'

const Auth = (props) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [currentProduct, setCurrentProduct] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref('/users/' + user.uid).on('value', (snapshot) => {
                    const snap = snapshot.val();

                    const userData = {
                        email: snap.email,
                        id: user.uid,
                        username: snap.username,
                        lastUpdate: snap.lastUpdate,
                        profilePicture: snap.profilePicture,
                        orders: snap.orders
                    }

                    setUser(userData)
                    setLoading(false)
                })
            } else {
                signOut()
            }

        })
    }, [props])

    const signOut = () => {
        setUser(null)
        setLoading(false)
      fireAuth.signOut()

    }

    const setProduct = (product) => {
        setCurrentProduct(product);
    }

    if (loading) {
        return (
            <div className="text-center" style={{ marginTop: "200px" }}>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <UserContext.Provider value={{
            user,
            currentProduct,
            signOut,
            setProduct
        }}>

            {props.children}
        </UserContext.Provider>
    )
}

export default Auth;