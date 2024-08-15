// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ5ZDwhFP0gFI2vEq9cJ82Mn5nvttZ3Ok",
  authDomain: "supreme-car-sore.firebaseapp.com",
  projectId: "supreme-car-sore",
  storageBucket: "supreme-car-sore.appspot.com",
  messagingSenderId: "173323967104",
  appId: "1:173323967104:web:eb3fcdbbb4f1a09156e465"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;