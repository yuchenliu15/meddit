const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyAIhfL02ma5ynLQh2z8Xvy-5y1UwExwcJc",
    authDomain: "meddit-25e2b.firebaseapp.com",
    databaseURL: "https://meddit-25e2b.firebaseio.com",
    projectId: "meddit-25e2b",
    storageBucket: "meddit-25e2b.appspot.com",
    messagingSenderId: "917960780816",
    appId: "1:917960780816:web:e3a2fee2c1b67e987dae95",
    measurementId: "G-E3M53LWKT1"
};


/*
const firebaseConfig = {
    apiKey: process.env.FB_apiKey,
    authDomain: process.env.FB_authDomain,
    databaseURL: process.env.FB_databaseURL,
    projectId: process.env.FB_projectId,
    storageBucket: process.env.FB_storageBucket,
    messagingSenderId: process.env.FB_messagingSenderId,
    appId: process.env.FB_appId,
    measurementId: process.env.FB_measurementId
};
*/

module.exports = firebase.initializeApp(firebaseConfig)
