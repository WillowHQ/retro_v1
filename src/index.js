import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { db, auth } from './Firebase'

//TODO set up firebase realtime or cloud firestore. 
//move data to firebase before anything else and get it into a good structure. 
//cloud function that can be called only by admin to retrieve a json or a csv. 
// get a good name and url 
//TODO prompt person to login with google auth 
//TODO export to a json that is easy to work with 
//TODO landing page - copy format of funretro ? 

//TODO subscribe to db and store cards there 
//Premium TODO only people with the invite can view or edit the board, after closing the board only the admin can reopen it. 
// 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
