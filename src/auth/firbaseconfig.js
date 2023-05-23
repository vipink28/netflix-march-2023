import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD5g5aCSjRjP6BHARbH2oZ8zdRn1aVuKpU",
    authDomain: "netflix-6b294.firebaseapp.com",
    projectId: "netflix-6b294",
    storageBucket: "netflix-6b294.appspot.com",
    messagingSenderId: "440352333697",
    appId: "1:440352333697:web:a08415fa934026767f9280"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);