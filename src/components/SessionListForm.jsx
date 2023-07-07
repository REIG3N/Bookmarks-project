import { useState } from 'react';
import { Btn, ConfirmBtn, OpenBtn } from './styledComponents/Btn';


export default function SessionListForm({ AddToSessionList }) {
  const [showMainForm, SetShowMainForm] = useState(true);
  const [showGuidedForm, SetShowGuidedForm] = useState(true);
  
  const [whichBook, SetWhichBook] = useState("");
  const [duration, SetDuration] = useState("");
  const [summary, SetSummary] = useState("");
  const [keyMoment, SetKeyMoment] = useState("");
  const [subText, SetSubText] = useState("");
  const [feeling, SetFeeling] = useState("");
  const [freeNote, SetFreeNote] = useState("");

  const AddSession = (e) => {
    event.preventDefault();
    const sessionToAdd = {
      id: window.crypto.randomUUID(),
      whichBook: whichBook,
      duration: duration,
      summary: summary,
      keyMoment: keyMoment,
      subText: subText,
      feeling: feeling,
      freeNote: freeNote,
    }
    AddToSessionList(sessionToAdd)
    SetWhichBook("")
    SetDuration("")
    SetSummary("")
    SetKeyMoment("")
    SetSubText("")
    SetFeeling("")
    SetFreeNote("")
  }

  const list = JSON.parse(localStorage.getItem('ALL_BOOK_LIST'))
  console.log(list, ' === PARSE & GET')
  console.log(list[0], ' === PARSE & GET FIRST ELEMENT')
  console.log(list[0].title, ' === PARSE & GET FIRST ELEMENTS TITLE')
  console.log(list[0].id, ' === PARSE & GET FIRST ELEMENTS ID')
  const listToShow = []

  const AllBooksShow = () => {
      for (let i = 0; i < list.length; i++) {
        console.log(list[i].id);
        console.log(list[i].title);
        listToShow.push(list[i].title)
          // listToShow.push([{list_id: list[i].id},{list_title: list[i].title}])
        }
  }

        AllBooksShow()

  const ShowForm = (stateToChange, SetStateToChange) => {
    !stateToChange ? SetStateToChange(true) : SetStateToChange(false)
  }

  return (
    <>
      <Btn onClick={(e) => { ShowForm(showMainForm, SetShowMainForm) }}>Ajouter une note +</Btn>
      <div className={`sessionForm ${showMainForm ? "invisble" : "visible"}`}>

        <form onSubmit={AddSession}>
          <div className="mainForm">
            {/* <BookSelection key={x} element={x}/> */}

            <label htmlFor="whichBookInput" >Quel livre venez-vous de lire ?</label>
            <input type="text" placeholder='...' value={whichBook} onChange={e => SetWhichBook(e.target.value)}/>

            <label htmlFor="durationInput" >Combien de temps a durée votre lecture ?</label>
            <input type="text" placeholder='...' value={duration} onChange={e => SetDuration(e.target.value)}/>

            <OpenBtn type="button" onClick={(e) => { ShowForm(showGuidedForm, SetShowGuidedForm) }}>Voulez-vous utilisez la note guidée ?</OpenBtn>
            <div className={`guidedForm ${showGuidedForm ? "invisble" : "visible"}`}>

              <label htmlFor="summaryInput" >Faîtes un bref résumé des informations/évènements majeurs de votre lecture</label>
              <input type="text" placeholder='...' value={summary} onChange={e => SetSummary(e.target.value)}/>

              <label htmlFor="keyMomentInput" >Quels passages vous ont marqués ?</label>
              <input type="text" placeholder='...' value={keyMoment} onChange={e => SetKeyMoment(e.target.value)}/>

              <label htmlFor="subTextInput" >Quels sont les messages/sous-textes pensez-vous avoir pu identifier ?</label>
              <input type="text" placeholder='...' value={subText} onChange={e => SetSubText(e.target.value)}/>

              <label htmlFor="feelingInput" >Que ressentez-vous après cette lecture ?</label>
              <input type="text" placeholder='...' value={feeling} onChange={e => SetFeeling(e.target.value)}/>

            </div>

            <label htmlFor="freenote" >Ecrivez librement à propos de ce que vous avez lu:</label>
            <input type="textarea" placeholder='...' value={freeNote} onChange={e => SetFreeNote(e.target.value)}/>

            <ConfirmBtn type='submit'>Ajouter une note +</ConfirmBtn>
          </div>
        </form>
      </div>
    </>
  )
}