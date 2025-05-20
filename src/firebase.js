import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBFfQ3Lrp5xqDIFQsLQdZvDF8AWpCx2r4Y",
  authDomain: "disney-8f86d.firebaseapp.com",
  projectId: "disney-8f86d",
  storageBucket: "disney-8f86d.firebasestorage.app",
  messagingSenderId: "287828606305",
  appId: "1:287828606305:web:d5ada0b5b2286d542d5920",
  measurementId: "G-9QRYXE7B4X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;










// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBFfQ3Lrp5xqDIFQsLQdZvDF8AWpCx2r4Y",
//   authDomain: "disney-8f86d.firebaseapp.com",
//   projectId: "disney-8f86d",
//   storageBucket: "disney-8f86d.firebasestorage.app",
//   messagingSenderId: "287828606305",
//   appId: "1:287828606305:web:d5ada0b5b2286d542d5920",
//   measurementId: "G-9QRYXE7B4X"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);