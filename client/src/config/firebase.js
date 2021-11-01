
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW__I4T72XR5EBw-2nVtesV_zTKCAjT4U",
  authDomain: "audiophile-fb62b.firebaseapp.com",
  projectId: "audiophile-fb62b",
  storageBucket: "audiophile-fb62b.appspot.com",
  messagingSenderId: "576346801689",
  appId: "1:576346801689:web:ff4fcc405ab4aab8670c88",
  measurementId: "G-19R8ZNTW81"
};

const app  = initializeApp(firebaseConfig)


export default getFirestore();