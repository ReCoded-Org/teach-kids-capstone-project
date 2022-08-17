// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqZMwMFuGYUeXbCVQpstKAmhPKN3hN6T8",
  authDomain: "upload-images-41779.firebaseapp.com",
  projectId: "upload-images-41779",
  storageBucket: "upload-images-41779.appspot.com",
  messagingSenderId: "215123421224",
  appId: "1:215123421224:web:e21e96505240f1490bed1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const storage = getStorage(app)