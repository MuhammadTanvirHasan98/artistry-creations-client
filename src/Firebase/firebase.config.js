import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5bUlSB16kEi07zruG8sJ2VIIs3pfpmGY",
  authDomain: "artistry-creations.firebaseapp.com",
  projectId: "artistry-creations",
  storageBucket: "artistry-creations.appspot.com",
  messagingSenderId: "35499232266",
  appId: "1:35499232266:web:8a6df5d76a536e3426e3f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
