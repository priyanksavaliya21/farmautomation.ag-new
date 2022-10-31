// JavaScript
// src.firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "" ,
  authDomain: "" ,
  projectId: "" ,
  storageBucket: "" ,
  messagingSenderId: "" ,
  appId:"" ,
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }









































// apiKey: "AIzaSyAjlTzdW35IYg0JPjl2R5Fz32ZLxtKyVC8",
// authDomain: "farmautomation.firebaseapp.com",
// projectId: "farmautomation",
// storageBucket: "farmautomation.appspot.com",
// messagingSenderId: "845032244502",
// appId: "1:845032244502:web:16633291666e0b1c797c37"