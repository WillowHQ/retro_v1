import { db, auth } from '../components/firebase'
import { useState, useEffect } from 'react'

//Add links

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
const Loading = () => <p>Loading...</p>

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
    setLoading(true)
    if(user){
     //try adding a try catch here ? 
     
      adminRef.where("userId", "==", user)
        .onSnapshot(querySnapshot => {
          console.log("query snapshot is", querySnapshot)
          let boardArray = []
          querySnapshot.forEach((board) => boardArray.push(board.data().title))
          console.log("Current boards", boardArray.join(", "))
          setBoards(boardArray)
          setLoading(false)

      })
    }
  },[user])
    
  //so I want to add a new board if I click the button. so inside of the admin collection get a reference to that collection 
  // then use that reference to add a new board with an auto generated id, and a dummy title. 
  const addBoard = id => {

    adminRef.add({
      userId: user,
      title: "New Board"
    })
  }

  return (
    <div>
      <p>This is the admin dashboard</p>
      <Board title="test"/>
      {loading ? <Loading/> : <Boards boards={boards}/>}
      <button onClick={addBoard}>Now we need a place to make a button</button>
    </div>

  )
  
}