import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBvivTs_F9-pxdCJFTe86AgSo3KxeTOKdY",
    authDomain: "awesomeproject-80dbf.firebaseapp.com",
    databaseURL: "https://awesomeproject-80dbf-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "awesomeproject-80dbf",
    storageBucket: "awesomeproject-80dbf.appspot.com",
    messagingSenderId: "381833229389",
    appId: "1:381833229389:web:f5cd45c941af622fd89804"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

