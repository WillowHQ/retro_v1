//make a board with a set of lanes that have cards. 
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { db } from '../../components/firebase'

const Lanes = (props) => {
  const laneStructure = [
    {
      //things to sustain 
      title: "Things to sustain", 
      laneId: 0
    }, 
    {
      title: "Things to work on",
      laneId: 1
    }, 
    { 
      title: "Questions",
      laneId: 4

    }, 
    {
      title: "Decisions",
      laneId: 2
    }, 
    {
      //Action lane
      title: "Actions", 
      laneId: 3
    }
  ]
  // console.log("boardRef is ", props.boardId)
  const boardRef = db.collection('boards').doc(props.boardId)
  const lanePresentation = laneStructure.map((lane) => {
    return (
        <Lane title={lane.title} laneId={lane.laneId} boardRef={boardRef}/>
    )
  })
 
  return (
    <div className="lanes">
      {lanePresentation}
    </div>
  )
}
const Lane = (props) => {

  const {laneId}  = props
  const [cards, setCards] = useState([])
  const { register, handleSubmit } = useForm()
  const [loading, setLoading] = useState(false)
  const cardsRef = props.boardRef.collection("cards")

  useEffect(()=> {
    
    cardsRef.where("laneId", "==", laneId)
      .onSnapshot(querySnapshot => {
        let cardArray = []
        querySnapshot.forEach((card)=> {
          console.log("card is ", card.id)
          // console.log("card meta data", card.metaData())

          cardArray.push({id: card.id, data: card.data()})
        })
        setCards(cardArray)
        setLoading(false)
      })
  }, [])
  const onSubmitForm = (formData) => {
    alert("Hoi your phone number is: " + formData.cardTitle)
    cardsRef.add({
      title: formData.cardTitle,
      laneId: laneId
    })
  } 
  const MakeCardButton = () => {
    return (
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <label>Card Title:
          <input type="text" name="cardTitle" ref={register}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
  const handleDelete = (id) => {
    console.log("get Id", id)
    cardsRef.doc(id).delete().then(function(){
      console.log("document deleted", id)
    }).catch(function(error) {
      console.error("Error removing", error)
    })
  }

  return (
    <div className="lane">
      <h2 className="lane-header">{props.title}</h2>
        <CardList cards={cards} handleDelete={handleDelete}/>
        <MakeCardButton/>
      <h2 className="lane-footer"></h2>
    </div>

  )
}
const CardList = ({cards, handleDelete}) => {
  const cardItems = cards.map((card) => <IssueCard id={card.id} title={card.data.title} handleDelete={handleDelete}/>)
  return (
    <div className="card-list">{cardItems}</div>
  )
}
const IssueCard = ({id, title, handleDelete}) => {

  return (
    <div>
      <p>{title}</p>
      <button onClick={() => handleDelete(id)}>Delete Me</button>
    </div>
  )
}

const BoardDemo = (props) => {

  return (
    <div className="board">
      <p> board id is: {props.boardId} </p>
      {props.boardId ? <Lanes boardId={props.boardId} /> : <div>Loading...</div>}
    </div>
  )
}

export default BoardDemo

