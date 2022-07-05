// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_x-fcmJWcbtZzyVQpKMxGASBElw10KWs",
  authDomain: "test-86b1d.firebaseapp.com",
  databaseURL: "https://test-86b1d-default-rtdb.firebaseio.com",
  projectId: "test-86b1d",
  storageBucket: "test-86b1d.appspot.com",
  messagingSenderId: "805184687560",
  appId: "1:805184687560:web:c530a880fcf14ad1ee04fd",
  measurementId: "G-W3JRLCREZ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Storage = getStorage(app);

export { Storage };
