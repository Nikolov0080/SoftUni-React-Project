import React, { useState, useEffect } from 'react';
import UserContext from './context/context';
import firebase from 'firebase';
import fireAuth from './fire/fireAuth'
import './fire/fire'
const Auth = (props) => {

    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {

                firebase.database().ref('/users/' + user.uid).once('value').then((snapshot) => {
                    const snap = snapshot.val();

                    console.log(snap)
                    const userData = {
                        email: snap.email,
                        id: user.uid,
                        username: snap.username,
                        registeredAt: snap.registeredAt,
                        profilePicture: snap.profilePicture
                    }

                    setUser(userData)
                })
            }

            setLoading(false)
        })
    }, [])

    const signOut = () => {
        fireAuth.signOut();
        setUser(null);
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
            signOut
        }}>

            {props.children}
        </UserContext.Provider>
    )
}

export default Auth;