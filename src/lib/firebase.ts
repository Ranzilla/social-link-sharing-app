import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD44jKSFEBYJxbuPu-GawCZ6DbWOQ5EQlM",
    authDomain: "sveltekit-linktree-f8159.firebaseapp.com",
    projectId: "sveltekit-linktree-f8159",
    storageBucket: "sveltekit-linktree-f8159.appspot.com",
    messagingSenderId: "621321125755",
    appId: "1:621321125755:web:fe4b6a9d4e10a641e087de"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();