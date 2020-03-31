import firebase from 'firebase/app';
import 'firebase/storage';

//Initialize firebase
const config = {
    apiKey: "AIzaSyCdJzslJEzshTQGMr3eEzmITZYv4iMZREE",
    authDomain: "fir-firebase-3f8ec.firebaseapp.com",
    databaseURL: "https://fir-firebase-3f8ec.firebaseio.com",
    projectId: "fir-firebase-3f8ec",
    storageBucket: "fir-firebase-3f8ec.appspot.com",
    messagingSenderId: "978774127922",
    appId: "1:978774127922:web:513087b1b86ac2e0a1d32b",
    measurementId: "G-G0ZKDH8QRP"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }