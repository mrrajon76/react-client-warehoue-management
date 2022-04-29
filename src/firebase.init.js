// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9xnT-AI-JiquNqD2MF1blCiG4sV495E0",
    authDomain: "fullstack-warehouse-management.firebaseapp.com",
    projectId: "fullstack-warehouse-management",
    storageBucket: "fullstack-warehouse-management.appspot.com",
    messagingSenderId: "225274206658",
    appId: "1:225274206658:web:5cdf162853412d512a1e5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;