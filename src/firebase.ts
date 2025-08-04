// src/firebase.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC4-9kQ2CCm_PvNZL2-TgQy83Rte0yuKn0",
  authDomain: "contactsofportfolio.firebaseapp.com",
  projectId: "contactsofportfolio",
  storageBucket: "contactsofportfolio.firebasestorage.app",
  messagingSenderId: "546037613239",
  appId: "1:546037613239:web:6f5704eac4d9328ea14332",
  measurementId: "G-G37SRZGVX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Connect to Firestore
export const db = getFirestore(app);
