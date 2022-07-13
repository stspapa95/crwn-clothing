import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  // doc is used to set a document instance
  doc,
  // Access documents data
  getDoc,
  // Set documents data
  setDoc,
} from "firebase/firestore";

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

//You can instantiate different providers e.g. Facebook, GitHub
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

//Initialize Firestore DB
const firestoreDB = getFirestore();

//Create user inside Firestore
export const createAuthUserDoc = async (user) => {

  const userDocRef = doc(firestoreDB, "users", user?.uid);
  const userData = await getDoc(userDocRef);

  //Check if there is an existing document reference for that user
  if (!userData.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (e) {
      console.log(`Error when creating the user`, e.message);
    }
  }

  return userDocRef;
};
