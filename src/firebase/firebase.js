
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBlanrssaR4ujD_FX19DEtDxf-_KiUxwbw",
  authDomain: "proyecto-react-38506.firebaseapp.com",
  projectId: "proyecto-react-38506",
  storageBucket: "proyecto-react-38506.appspot.com",
  messagingSenderId: "402880485575",
  appId: "1:402880485575:web:1c5c534448fa056b5e86e2"
};


const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app)