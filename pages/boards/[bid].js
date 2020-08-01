import { useRouter } from 'next/router'
import BoardDemo from './BoardDemo'
//import SignIn from '../../components/SignIn.js'

//TODO how do we get the board to load on this route. 
// Use firebase auth to check for a token if the person is signed up and allowed to see this board.
// If they are allowed to see it, send them to the board
// If they aren't show an appropriate not authorized error. 

function Board(){
  // useEffect(() => {
  //   auth.onAuthStateChanged((user)=>{
  //     console.log(user)
  //   })
  // })
  const router = useRouter()
  const { bid } = router.query
  //return <SignIn/>
  //TODO turn dynamic route on 

  //don't let this pass it to a board unless there is a board in existence ? 
  //might need to think about this a Bit
  
  return(
    <>
      <header>
        <p>Board: {bid}</p>
      </header>
      <main>
        <BoardDemo boardId={bid}/>
      </main>
    </>
  )
}

export default Board
