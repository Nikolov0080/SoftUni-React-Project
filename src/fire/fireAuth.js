import firebase from 'firebase';
import moment from 'moment';

export default {
    register(email, password, username, profilePicture) {
        return firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            if (error) { return false }
            console.log(error.code)
            console.log(error.message)
        }).then(response => {

            const userId = response.user.uid;
            const userEmail = response.user.email;

            profilePicture = (profilePicture || "https://publicdomainvectors.org/tn_img/bee-50.png")

            console.log("Email: " + userEmail);
            console.log("User ID: " + userId);



            firebase.database().ref('users/' + userId).set({
                username: username,
                email: userEmail,
                profilePicture: profilePicture,
                registeredAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
            });

            return true

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
            console.log("Email: " + response.user.email);
            console.log("User ID: " + response.user.uid);
            return true
        }).catch(e => {
            console.log(e)
        })
    },
    signOut() {
        return firebase.auth().signOut();

    }
}
