import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCfyGUcdcnSAEBn7jLI9FMkLE2B_AtE0pI",
  authDomain: "retroboard-51fd3.firebaseapp.com",
  databaseURL: "https://retroboard-51fd3.firebaseio.com",
  projectId: "retroboard-51fd3",
  storageBucket: "retroboard-51fd3.appspot.com",
  messagingSenderId: "585575205647",
  appId: "1:585575205647:web:343de976f25cec98cccc7a",
  measurementId: "G-WQ717S7X13"
};
if(!firebase.apps.length) firebase.initializeApp(firebaseConfig);

 export default firebase;
 export const db = firebase.firestore();
 export const auth = firebase.auth();
 export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

