import firebase from 'firebase';

export default {
    register(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {

            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)

        });
    },
    login(email,password) {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {

            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
        });
    }
}
