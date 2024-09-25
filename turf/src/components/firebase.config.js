// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqskL5SjakMRNXFaK9E0-9Db33wKsUqRQ",
  authDomain: "turfsite-13b91.firebaseapp.com",
  projectId: "turfsite-13b91",
  storageBucket: "turfsite-13b91.appspot.com",
  messagingSenderId: "356319329037",
  appId: "1:356319329037:web:11e8c09d404481b854ce44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}