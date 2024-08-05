// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { doc, setDoc, getFirestore } from '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDBpc1IaSRYWrz74w3IYOYLZXQYM3JKPgE",
  authDomain: "projeto-bhm.firebaseapp.com",
  projectId: "projeto-bhm",
  storageBucket: "projeto-bhm.appspot.com",
  messagingSenderId: "111851069384",
  appId: "1:111851069384:web:97d6bfd34163c426c36afd",
  measurementId: "G-RSB8XWWH8S"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const db = getFirestore(app);
export const auth = getAuth(app);


