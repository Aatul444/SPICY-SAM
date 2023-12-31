import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// environment.prod.ts
export const environment = {
  production: false,
  apiUrl: 'https://api.example.com',
  enableDebugging: false,
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig: {
    apiKey: "AIzaSyBxEfgaxro3Afy-NuUZx_kiYBlOq2bb-tw",
    authDomain: "spicy-sam.firebaseapp.com",
    projectId: "spicy-sam",
    storageBucket: "spicy-sam.appspot.com",
    messagingSenderId: "337394749090",
    appId: "1:337394749090:web:84735425c110e3da1851fb",
    measurementId: "G-WDCDP78X0B"
  }

};
