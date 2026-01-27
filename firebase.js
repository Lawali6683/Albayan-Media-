  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyAGPJpGroEyn4-F5xUi9Ys6P7QLOUOne-o",
    authDomain: "news-crarf.firebaseapp.com",
    databaseURL: "https://news-crarf-default-rtdb.firebaseio.com",
    projectId: "news-crarf",
    storageBucket: "news-crarf.firebasestorage.app",
    messagingSenderId: "640160398146",
    appId: "1:640160398146:web:dbe2e7e81f960ae6a866db",
    measurementId: "G-X4VY1LWGK3"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export { app, analytics, firebaseConfig };
