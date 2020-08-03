import firebase from 'firebase';


export default {
    register(email, password, username) {
        return firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            if (error) { return false }
            console.log(error.code)
            console.log(error.message)
        }).then(response => {

            console.log("Email: " + response.user.email);
            console.log("User ID: " + response.user.uid);

            response.user.updateProfile({
                displayName: username
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
