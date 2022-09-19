// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setActiveScreen } from "./view/index";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX8Y7p-lXrZFeqKFPRQPUK7DV2ayNxPvc",
  authDomain: "file-moi.firebaseapp.com",
  projectId: "file-moi",
  storageBucket: "file-moi.appspot.com",
  messagingSenderId: "977849898520",
  appId: "1:977849898520:web:0358a7349a171a771d156d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
setActiveScreen("loginPage");
// setActiveScreen("chatPage");
// setActiveScreen("registerPage");
// setActiveScreen("resetPassword");