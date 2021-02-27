import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyArzU5IKtR9yTaiH7T6eSUk037Kpi21Aew",
  authDomain: "discord-clone-yt2.firebaseapp.com",
  projectId: "discord-clone-yt2",
  storageBucket: "discord-clone-yt2.appspot.com",
  messagingSenderId: "585254623929",
  appId: "1:585254623929:web:57a08d3130d8223c711968",
  measurementId: "G-NGNZ4VKXFK"
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;