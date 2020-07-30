import firebase from 'firebase';

export default {
    register(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {

            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
        }).then(response => {
            console.log("Email: " + response.user.email);
            console.log("User ID: " + response.user.uid);
        });
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
        })
    },
    isLogged() {
      return  firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                return user
                // ...
            } else {
                // User is signed out.
                return "No signed User detected... please Login"
                // ...
            }
        });
    },
    logOut() {
      return  firebase.auth().signOut();
    }
}
