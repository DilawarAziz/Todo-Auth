// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getDatabase,ref,set,push } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// var firebasearr = [ getDatabase,ref,set,push]
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrlY7bn99iS_fY0n1EgIOMT-eYPiHibmo",
  authDomain: "authantication-96e8e.firebaseapp.com",
  projectId: "authantication-96e8e",
  storageBucket: "authantication-96e8e.appspot.com",
  messagingSenderId: "699395021278",
  appId: "1:699395021278:web:2f87b0b94c433eb478e54f",
  measurementId: "G-NDBTZZT6H1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
