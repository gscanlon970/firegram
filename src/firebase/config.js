import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


  var firebaseConfig = {
    apiKey: "AIzaSyB_U_5nP8Rlne47ep_2x7uFlHgnA_8n7T0",
    authDomain: "firegram-19919.firebaseapp.com",
    databaseURL: "https://firegram-19919.firebaseio.com",
    projectId: "firegram-19919",
    storageBucket: "firegram-19919.appspot.com",
    messagingSenderId: "866943048273",
    appId: "1:866943048273:web:f8734a871c62d3bbe3f670"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };