import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tienda-de-mascotas-7dcce.firebaseapp.com",
  projectId: "tienda-de-mascotas-7dcce",
  storageBucket: "tienda-de-mascotas-7dcce.appspot.com",
  messagingSenderId: "892977971132",
  appId: "1:892977971132:web:bfed0526b6349fe22a75b9",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
