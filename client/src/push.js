
import * as firebase from 'firebase/app';
import 'firebase/messaging';


export const initializeFirebase = () => {
    firebase.initializeApp({
        messagingSenderId: "SENDER_ID"
    });
}

navigator.serviceWorker.addEventListener('message', (event) => {
    console.log('message', event);
});