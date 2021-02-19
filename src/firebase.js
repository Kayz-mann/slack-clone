import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRuIn94rguiBdWvQ8uGwyX0vZjThhkp0E",
  authDomain: "slack-clone-react-5d4f9.firebaseapp.com",
  projectId: "slack-clone-react-5d4f9",
  storageBucket: "slack-clone-react-5d4f9.appspot.com",
  messagingSenderId: "178076332565",
  appId: "1:178076332565:web:c3ba9243b1c848599f541c",
  measurementId: "G-S9FQ19LDKP"
};
// connect backend to frontend
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
// set up authentication for backend
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

