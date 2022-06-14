import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAukYHWifUEZfp6CvLbrNo-vVZ8eiq9luE",
  authDomain: "sp-clothing-db.firebaseapp.com",
  projectId: "sp-clothing-db",
  storageBucket: "sp-clothing-db.appspot.com",
  messagingSenderId: "929989334769",
  appId: "1:929989334769:web:28f35339390cb3862dfb50",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
