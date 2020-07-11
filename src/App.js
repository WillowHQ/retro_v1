import React, {useState, useEffect} from 'react';
import Board from 'react-trello';
import {auth, db} from './Firebase'
import './App.css';

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
    }
  ]
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
      <Board data={data}/>
    </div>
  );
}

export default App;
