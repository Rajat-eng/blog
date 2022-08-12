import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore' 

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA0nMfsnpkBuc4yAzqYaLk-X0QtLd31MQY",
  authDomain: "blog-23674.firebaseapp.com",
  projectId: "blog-23674",
  storageBucket: "blog-23674.appspot.com",
  messagingSenderId: "329316876471",
  appId: "1:329316876471:web:60e88f36288c75c7a30d32"
};


firebase.initializeApp(firebaseConfig);

export const firestore=firebase.firestore();