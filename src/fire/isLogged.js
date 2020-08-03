import firebase from 'firebase';

const isLogged = (callBack) => firebase.auth().onAuthStateChanged(callBack);

export default isLogged;