import { initializeApp } from "firebase/app";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable, type Readable, derived } from "svelte/store";

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

/**
 * @returns a store with the current firebase user
 */
function userStore() {
    let unsubscribe: () => void;

    if (!auth || !globalThis.window) {
        console.warn('Auth is not initialized or not in browser');
        const { subscribe } = writable<User | null>(null);
        return {
            subscribe,
        }
    }

    const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
        unsubscribe = onAuthStateChanged(auth, (user) => {
            set(user);
        });

        return () => unsubscribe();
    });

    return {
        subscribe,
    };
}

export const user = userStore();