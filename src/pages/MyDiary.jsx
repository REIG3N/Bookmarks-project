import ListedSession from '../components/ListedSession';
import SessionListForm from '../components/SessionListForm';
import '../styles/MyDiary.css';
import { useState } from 'react'

export default function MyDiary() {
  const [sessionList, SetSessionList] = useState([]);

  const AddToSessionList = (sessionToAdd) => {
    // const sessionListCopy = [...sessionList]
    // sessionListCopy.push(sessionToAdd)
    // SetSessionList(sessionListCopy)*
    SetSessionList([...sessionList, sessionToAdd])    
  }

  return (
    <>
      <h1>Vos notes de lectures</h1>
      <SessionListForm AddToSessionList={AddToSessionList} />
      <h2>Historique de lecture</h2>
      <ul>
        {sessionList.length === 0 && "Pas de note"}
        {sessionList && sessionList.map((session) => {
          return <ListedSession 
            session={session} 
            key={session.id} 
             />
          
        })}
      </ul>
    </>
  )
}