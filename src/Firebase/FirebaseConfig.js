import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyB51V0JGgGFoXgKioFOK6IX1Fx-2jeH_EY",
  authDomain: "resume-builder-74366.firebaseapp.com",
  databaseURL: "https://resume-builder-74366-default-rtdb.firebaseio.com",
  projectId: "resume-builder-74366",
  storageBucket: "resume-builder-74366.appspot.com",
  messagingSenderId: "1013708706049",
  appId: "1:1013708706049:web:9615ff94019e855a848b00",
  measurementId: "G-L23P28LQ6W",
};

const app = initializeApp(firebaseConfig);

const Auth = getAuth(app);

export { app, Auth };
