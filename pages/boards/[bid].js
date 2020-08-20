import { useRouter } from 'next/router'
import { Layout } from 'antd'
import BoardDemo from './BoardDemo'

const { Header, Footer, Content } = Layout
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
    <Layout>
      <Header>
        <p>Board: {bid}</p>
      </Header>
      <Content>
        <BoardDemo boardId={bid}/>
      </Content>
    </Layout>
  )
}

export default Board
