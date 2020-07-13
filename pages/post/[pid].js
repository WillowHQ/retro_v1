import { useRouter } from 'next/router'
//import SignIn from '../../components/SignIn.js'

//TODO how do we get the board to load on this route. 
// Use firebase auth to check for a token if the person is signed up and allowed to see this board.
// If they are allowed to see it, send them to the board
// If they aren't show an appropriate not authorized error. 

const Post = () => {
  const router = useRouter()
  const { pid } = router.query
  //return <SignIn/>
  //TODO turn dynamic route on 
  return <p>Post: {pid}</p>
}

export default Post
