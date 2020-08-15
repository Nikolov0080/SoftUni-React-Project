import firebase from 'firebase';
import moment from 'moment';
import defaultImage from './image/defaultImage.png';

export default {
    register(email, password, username, profilePicture) {
        return firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {

             console.log(error.message)

        }).then(response => {
            if (response) {

                const userId = response.user.uid;
                const userEmail = response.user.email;

                profilePicture = (profilePicture || defaultImage)
                firebase.database().ref('users/' + userId).set({
                    username: username,
                    email: userEmail,
                    profilePicture: profilePicture,
                    lastUpdate: moment().format('MMMM Do YYYY, h:mm:ss a'),
                    orders: 0
                });

                return true
            }

        }).catch(e => {
            console.log(e)
        })
    },
    login(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {

            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
           
        }).then(response => {
            return true
        }).catch(e => {

            console.log(e)
            
        })
    },
    signOut() {
        return firebase.auth().signOut();
    }
}
