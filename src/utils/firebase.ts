import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC_6tgpyCtPsC7e_nSyW_IpuFudGH7UTQ",
  authDomain: "themoneyapp-882a5.firebaseapp.com",
  projectId: "themoneyapp-882a5",
  storageBucket: "themoneyapp-882a5.appspot.com",
  messagingSenderId: "957635928397",
  appId: "1:957635928397:web:abedf188d3bd5f3cdd9704"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;