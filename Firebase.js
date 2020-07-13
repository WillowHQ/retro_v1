import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
console.log("config is", config)
firebase.initializeApp(config);

 export default firebase;
 export const analytics = firebase.analytics();
 export const db = firebase.firestore();
 export const auth = firebase.auth();
 export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

