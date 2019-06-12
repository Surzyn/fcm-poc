import React from 'react';


import * as firebase from 'firebase/app';
import 'firebase/messaging';

function App() {
    return (
        <div>
            Hello there!
            <button onClick={askForPermissioToReceiveNotifications}>Click me</button>
        </div>
    );
}

export const askForPermissioToReceiveNotifications = async () => {
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('token:', token);

        return token;
    } catch (error) {
        console.error(error);
    }
}

export default App;
