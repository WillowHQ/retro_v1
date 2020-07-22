import { db, auth } from '../components/firebase'
import { useState, useEffect } from 'react'




//now what ? 
const Board = (props) => <p>Things</p>
const Boards = ({ boards }) => {
  console.log("What is boards", boards)
  const boardContainer = boards.map((board) => 
    <li>Test</li>
  )
  return (
    <ul>{boardContainer}</ul>
  )
}
// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12]
// const listItems = numbers.map((number) =><li>{number}</li>)
//so the problem is that initially boards is empty and we don't waht to display them until they are retrieved

export default function AdminDashboard(){
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [boards, setBoards] = useState([{title:"thing"}])

  //prob need to put all this into a useEffect to keep it cleaner and avoid improper rendering
  let adminRef = db.collection('boards')
  auth.onAuthStateChanged(function(user){
    if(user) {
      let displayName = user.displayName
      let email = user.email;
      let uid = user.uid;
      setUser(uid)
      console.log("User id is :", uid)
    }
  })
  //put the uid into the 

  //the next thing I need to do is figure out how to use loading and error to handle the fact that the snapshot query is getting triggered 

  useEffect(()=> {
    if(user){
     //try adding a try catch here ? 
     
      adminRef.where("userId", "==", user)
        .onSnapshot(querySnapshot => {
          console.log("query snapshot is", querySnapshot)
          let boardArray = []
          querySnapshot.forEach((board) => boardArray.push(board.data().title))
          console.log("Current boards", boardArray.join(", "))
          setBoards(boardArray)

      })
    }
  },[user])
    
  //so I want to add a new board if I click the button. so inside of the admin collection get a reference to that collection 
  // then use that reference to add a new board with an auto generated id, and a dummy title. 
  const addBoard = id => {
    //check if admin already exists 
    //actually fuck it just make it flat and don't worry about organizing boards yet
    adminRef.add({
      userId: user,
      title: "New Board"
    })
  }
  //trying to get board to show up, probably doing something silly here 
  // const Board = (props) => <p>{props.title}</p>
  // const Boards = () => boards.map((board) => {
  //   return (
  //     <Board title={board.title}/>
  //   )
  // })


  return (
    <div>
      <p>This is the admin dashboard</p>
      <Board title="test"/>
      <Boards boards={boards}/>
      <button onClick={addBoard}>Now we need a place to make a button</button>
    </div>

  )
  
}