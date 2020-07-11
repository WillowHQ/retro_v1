import React, {useState, useEffect} from 'react';
import Board from 'react-trello';
import {auth, db} from './Firebase'
import './App.css';

//TODO set up firebase realtime or cloud firestore. DONE
//move data to firebase before anything else and get it into a good structure. 
//cloud function that can be called only by admin to retrieve a json or a csv. 
// get a good name and url 
//TODO prompt person to login with google auth 
//TODO export to a json that is easy to work with 
//TODO landing page - copy format of funretro ? 

//TODO subscribe to db and store cards there 
//Premium TODO only people with the invite can view or edit the board, after closing the board only the admin can reopen it. 
// 

const urlParam = '0';

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '2/2',
      cards: [
        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false},
        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
    
  ]
}


//if this is the first time the board has been accessed set up a new default board

function makeBoard(){
  const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'Planned Tasks',
        label: '2/2',
        cards: [
          {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false},
          {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
        ]
      },
      {
        id: 'lane2',
        title: 'Completed',
        label: '0/0',
        cards: []
      },
    
  ]};
  return data;
}

function App() {
  const [boardData, setBoardData] = useState();
  useEffect (()=> {
    db.collection('boards').doc(urlParam)
      .onSnapshot(function(doc) {
        console.log("current data: ", doc.data())
      })
  });
  
  return (
    <div className="App">
      <Board data={makeBoard()} canAddLanes editable/>
    </div>
  );
}

export default App;
