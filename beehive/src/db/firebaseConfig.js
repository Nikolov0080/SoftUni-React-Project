import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
    authDomain: "beehive---0.firebaseapp.com",
    databaseURL: "https://beehive---0.firebaseio.com/",
    storageBucket: "beehive---0.appspot.com"
};

export default firebase.initializeApp(firebaseConfig);