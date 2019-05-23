import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC27JeATS1CrhBU7fCyDeccUZSBArp5ZE",
  authDomain: "sweat-to-summit.firebaseapp.com",
  databaseURL: "https://sweat-to-summit.firebaseio.com",
  projectId: "sweat-to-summit",
  storageBucket: "sweat-to-summit.appspot.com",
  messagingSenderId: "1091364656930",
  appId: "1:1091364656930:web:a6a0155869e34c01"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
