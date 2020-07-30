import React, {useState, useEffect} from 'react';
import Board from 'react-trello';
import {db} from './Firebase'

const urlParam = '0';


//if this is the first time the board has been accessed set up a new default board

//cards don't need to be draggable

//maybe we can fork this code and re-write it so we don't need all the shit it has. 
//probably going to need to customize it anyways for conversations 
//first off lets get the board working 
//then get a new user to add a card 
//the board state needs to be held in firebase and we will need to update parts of it, 
// we don't need a lot of this stuff so what do we need ? 
// lanes that hold cards, need to be able to create a new card. Cards need to be draggable so we can move them ? 
// maybe not even. 
//plus the way this is made isn't great, too much state. 
// I want to lay the board out so I can create new cards, and make them draggable. The cards should have a place for a conversation ? 
//phases of thinking - define problem, you are working on something and you realize you haven't thought about something, then you need to collect information, and decide on what to do next. 
//two competing agendas are what you can do code wise and what you need to do product wise. 
// as much as sometimes it might feel like it would be COOL to do something, if it doesn't solve a problem what is the point? To show of your abilities ? Who cares lol 
// that beinng said, wow I'm really in writing more. I wish I could share these thoughts with people. That would feel great. M
// I need the board to look nice, what state do I need really ? Board has a list of lanes, lanes have cards. 
// lanes store cards, how do we manage dragging from one lane to another ? 
// How do we re-order cards in a lane. 
// in order to figure out how to do this I'm asking the simplest questions possible about the functionality of the board. That allows me to create issues. Which lead to code. 
//question driven development. 
// do cards need to know where they are ? Probably not, false they don't 
// Keep state only where it needs to be, bc of dragging from one lane to abother we might bneed to hold location in the board ? How does dragging work ? 
// do we need dragging - I mean ya it would be neat to know how it works, but I bet it's complicated and I don't really care. 



function makeBoard(){
  const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'What went well',
        label: '2/2',
        cards: [
          {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false},
          {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
        ]
      },
      {
        id: 'lane2',
        title: 'Something to improve',
        label: '0/0',
        cards: []
      },
      {
        id: 'lane3',
        title: 'Discussion',
        label: '0/0',
        cards: []
      },{
        id: 'lane4',
        title: 'Action',
        label: '0/0',
        cards: []
      }

    
  ]};
  return data;
}

function BoardContainer() {
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

export default BoardContainer;
