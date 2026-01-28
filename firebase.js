  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyCKVF6zLSro5QNhqvg1j3KHVRozHRi7hvc",
    authDomain: "albayan-media.firebaseapp.com",
    databaseURL: "https://albayan-media-default-rtdb.firebaseio.com",
    projectId: "albayan-media",
    storageBucket: "albayan-media.firebasestorage.app",
    messagingSenderId: "324321871210",
    appId: "1:324321871210:web:83d57b2a7bdff695b11113",
    measurementId: "G-S501BSH3J6"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export { app, analytics, firebaseConfig };
