import firebase from 'firebase';

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// };
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
console.log("config is", firebaseConfig)
if(!firebase.apps.length) firebase.initializeApp(firebaseConfig);

 export default firebase;
 export const db = firebase.firestore();
 export const auth = firebase.auth();
 export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

