import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC76tyfeTCMjHM-vNilEIlj0Uu9wAe10NA",
  authDomain: "react-blog-app-19297.firebaseapp.com",
  projectId: "react-blog-app-19297",
  storageBucket: "react-blog-app-19297.appspot.com",
  messagingSenderId: "636046428689",
  appId: "1:636046428689:web:c74527d98f43c14abe3fb0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
