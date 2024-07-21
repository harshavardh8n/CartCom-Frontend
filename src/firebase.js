// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import firebase from "firebase"
// //   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyAJzRo1tr7pXY77ZSJ7t2qd6_tGBHV2fIU",
//     authDomain: "ecommerce-94efd.firebaseapp.com",
//     projectId: "ecommerce-94efd",
//     storageBucket: "ecommerce-94efd.appspot.com",
//     messagingSenderId: "251438614976",
//     appId: "1:251438614976:web:ffac0cb7d4a969d24ce025",
//     measurementId: "G-DFV3CQYLPE"
//   };

//   // Initialize Firebase
//   const firebaseapp = firebase.initializeApp(firebaseConfig);
// //   const analytics = getAnalyti
//     const db = firebaseapp.firestore();
//     const auth = firebase.auth();

// export {db,auth}


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJzRo1tr7pXY77ZSJ7t2qd6_tGBHV2fIU",
  authDomain: "ecommerce-94efd.firebaseapp.com",
  projectId: "ecommerce-94efd",
  storageBucket: "ecommerce-94efd.appspot.com",
  messagingSenderId: "251438614976",
  appId: "1:251438614976:web:ffac0cb7d4a969d24ce025",
  measurementId: "G-DFV3CQYLPE"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };