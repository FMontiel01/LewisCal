// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIaXLeCPA1D4CD1zc3c9596DR3tsbr9lA",
  authDomain: "lewiscal-2360d.firebaseapp.com",
  projectId: "lewiscal-2360d",
  storageBucket: "lewiscal-2360d.appspot.com",
  messagingSenderId: "676880196837",
  appId: "1:676880196837:web:5b8b3dab699c57cd80a00c",
  measurementId: "G-P268G5V62W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase connected");