import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDYQoouFLEYvrwEt4b5UEN1m0a-dLkQ1BY",
    authDomain: "metro-hub-5a9d1.firebaseapp.com",
    projectId: "metro-hub-5a9d1",
    storageBucket: "metro-hub-5a9d1.appspot.com",
    messagingSenderId: "99574263237",
    appId: "1:99574263237:web:3c6179fa8c994cdb2f2fac",
    measurementId: "G-BGCXVKT91W"
  };

// Log the contents of the firebaseConfig object
console.log('Firebase Config:', firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export const imageDb = getStorage(app)

export { auth, storage };
