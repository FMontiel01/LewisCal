// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDALbrgKb2xcyrCuP91Wh-28luF4De61TY",
  authDomain: "lewiscal-2909a.firebaseapp.com",
  projectId: "lewiscal-2909a",
  storageBucket: "lewiscal-2909a.firebasestorage.app",
  messagingSenderId: "381676115165",
  appId: "1:381676115165:web:3859a7a5e06805defd7734",
  measurementId: "G-N3GJGB715K"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase connected");
