import { useState } from 'react';
import { Btn, ConfirmBtn, OpenBtn } from './styledComponents/Btn';
import ShowFormDiv, { DarkBG, FormHeader, FormInputDiv, FormInput } from './styledComponents/FormDiv';
import close_menu from '../../public/close_menu.svg';

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
  console.log(listToShow, ' === PARSE & GET ALL TITLE BOOKS')

  const ShowForm = (stateToChange, SetStateToChange) => {
    !stateToChange ? SetStateToChange(true) : SetStateToChange(false)
  }

  return (
    <>
      <Btn onClick={(e) => { ShowForm(showMainForm, SetShowMainForm) }}>Ajouter une note +</Btn>
      <DarkBG style={{ display: showMainForm ? 'none' : 'block' }}>
        <ShowFormDiv style={{ display: showMainForm ? 'none' : 'block' }}>

          <div className={`sessionForm ${showMainForm ? "invisble" : "visible"}`} style={{display: 'flex', flexDirection: 'column'}}>
            <FormHeader >
              <h3 style={{ margin: 'auto' }}>Ajouter une note </h3>
              <button onClick={(e) => { ShowForm(showMainForm, SetShowMainForm) }} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}><img src={close_menu} style={{ width: '20px', height: '20px', }} /></button>
            </FormHeader>

            <form onSubmit={AddSession}>
                <FormInputDiv>
                  <label htmlFor="whichBookInput" >Quel livre venez-vous de lire ?</label>
                  <FormInput type="text" placeholder='...' value={whichBook} onChange={e => SetWhichBook(e.target.value)} />
                </FormInputDiv>

                <FormInputDiv>
                  <label htmlFor="durationInput" >Combien de temps a durée votre lecture ?</label>
                  <FormInput type="text" placeholder='...' value={duration} onChange={e => SetDuration(e.target.value)} />
                </FormInputDiv>

                <OpenBtn type="button" onClick={(e) => { ShowForm(showGuidedForm, SetShowGuidedForm) }}>Voulez-vous utilisez la note guidée ?</OpenBtn>
                <div className={`guidedForm ${showGuidedForm ? "invisble" : "visible"}`}>

                  <FormInputDiv>
                    <label htmlFor="summaryInput" >Faîtes un bref résumé des informations/évènements majeurs de votre lecture</label>
                    <FormInput type="text" placeholder='...' value={summary} onChange={e => SetSummary(e.target.value)} />
                  </FormInputDiv>

                  <FormInputDiv>
                    <label htmlFor="keyMomentInput" >Quels passages vous ont marqués ?</label>
                    <FormInput type="text" placeholder='...' value={keyMoment} onChange={e => SetKeyMoment(e.target.value)} />
                  </FormInputDiv>

                  <FormInputDiv>
                    <label htmlFor="subTextInput" >Quels sont les messages/sous-textes pensez-vous avoir pu identifier ?</label>
                    <FormInput type="text" placeholder='...' value={subText} onChange={e => SetSubText(e.target.value)} />
                  </FormInputDiv>

                  <FormInputDiv>
                    <label htmlFor="feelingInput" >Que ressentez-vous après cette lecture ?</label>
                    <FormInput type="text" placeholder='...' value={feeling} onChange={e => SetFeeling(e.target.value)} />
                  </FormInputDiv>
                </div>

                <FormInputDiv>
                <label htmlFor="freenote" >Ecrivez librement à propos de ce que vous avez lu:</label>
                <FormInput type="textarea" placeholder='...' value={freeNote} onChange={e => SetFreeNote(e.target.value)} />
                </FormInputDiv>

                <ConfirmBtn type='submit' style={{ margin: 'auto', bottom: '0px' }}>Valider</ConfirmBtn>
            </form>
          </div>
        </ShowFormDiv>
      </DarkBG>
    </>
  )
}