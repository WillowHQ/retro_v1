import { db, auth } from '../components/firebase'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import BoardContainer from '../components/BoardContainer.js'


//Add links

const Board = (props) => <Link href="/boards/7A4O8kG4pdSx5ChRyCrv">Things</Link>
const Boards = ({ boards }) => {

  //structure a proper URL 
  //redirect to a blank board
  //Board will need some love
  //add state to board from board route
  //how to get other devs to work on this - most likely show them how far it has come

  console.log("What is boards", boards)
  const boardContainer = boards.map((board) => 
    <Link href="/boards/7A4O8kG4pdSx5ChRyCrv">{board.userId}</Link>
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

  let boardRef = db.collection('boards')

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

  // useEffect(()=> {
  //   setLoading(true)
  //   if(user){
  //    //try adding a try catch here ? 
  //     boardRef.where("userId", "==", user)
  //       .onSnapshot(querySnapshot => {
  //         console.log("query snapshot is", querySnapshot)
  //         let boardArray = []
  //         querySnapshot.forEach((board) => boardArray.push(board.data().title))
  //         console.log("Current boards", boardArray.join(", "))
  //         setBoards(boardArray)
  //         setLoading(false)

  //     })
  //   }
  // },[user])
    
  //so I want to add a new board if I click the button. so inside of the admin collection get a reference to that collection 
  // then use that reference to add a new board with an auto generated id, and a dummy title. 
  const addBoard = () => {

    boardRef.add({
      userId: user,
      title: "New Board"
    })
  }

  return (
    <div>
      <h1>This is the admin dashboard</h1>
      <Board title="test"/>
      {loading ? <Loading/> : <Boards boards={boards}/>}
      <button onClick={addBoard}>Now we need a place to make a button</button>
    </div>

  )
  
}