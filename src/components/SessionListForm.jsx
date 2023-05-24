import { useState } from 'react'

export default function SessionListForm({ AddToSessionList }) {
  const [showMainForm, SetShowMainForm] = useState(true);
  const [showGuidedForm, SetShowGuidedForm] = useState(true);
  const [whichBookInput, SetWhichBookInput] = useState("");
  const [durationInput, SetDurationInput] = useState("");
  const [summaryInput, SetSummaryInput] = useState("");
  const [keyMomentInput, SetKeyMomentInput] = useState("");
  const [subTextInput, SetSubTextInput] = useState("");
  const [feelingInput, SetFeelingInput] = useState("");
  const [freeNoteInput, SetFreeNoteInput] = useState("");

  const AddSession = (e) => {
    event.preventDefault();
    const sessionToAdd = {
      id: window.crypto.randomUUID(),
      whichBook: whichBookInput,
      duration: durationInput,
      summary: summaryInput,
      keyMoment: keyMomentInput,
      subText: subTextInput,
      feeling: feelingInput,
      freeNote: freeNoteInput,
    }
    AddToSessionList(sessionToAdd)
    SetWhichBookInput("")
    SetDurationInput("")
    SetSummaryInput("")
    SetKeyMomentInput("")
    SetSubTextInput("")
    SetFeelingInput("")
    SetFreeNoteInput("")
  }

  const ShowForm = (stateToChange, SetStateToChange) => {
    !stateToChange ? SetStateToChange(true) : SetStateToChange(false)
  }

  return (
    <>
      <button onClick={(e) => { ShowForm(showMainForm, SetShowMainForm) }}>Ajouter une session de lecture</button>
      <div className={`sessionForm ${showMainForm ? "invisble" : "visible"}`}>

        <form onSubmit={AddSession}>
          <div className="mainForm">

            <label htmlFor="whichBookInput" value={whichBookInput} onChange={e => SetWhichBookInput(e.target.value)}>Quel livre venez-vous de lire ?</label>
            <input type="text" placeholder='...' />

            <label htmlFor="durationInput" value={durationInput} onChange={e => SetDurationInput(e.target.value)}>Combien de temps a durée votre lecture ?</label>
            <input type="text" placeholder='...' />

            <button type="button" onClick={(e) => { ShowForm(showGuidedForm, SetShowGuidedForm) }}>Voulez-vous utilisez la note guidée ?</button>
            <div className={`guidedForm ${showGuidedForm ? "invisble" : "visible"}`}>

              <label htmlFor="summaryInput" value={summaryInput} onChange={e => SetSummaryInput(e.target.value)}>Faîtes un bref résumé des informations/évènements majeurs de votre lecture</label>
              <input type="text" placeholder='...' />

              <label htmlFor="keyMomentInput" value={keyMomentInput} onChange={e => SetKeyMomentInput(e.target.value)}>Quels passages vous ont marqués ?</label>
              <input type="text" placeholder='...' />

              <label htmlFor="subTextInput" value={subTextInput} onChange={e => SetSubTextInput(e.target.value)}>Quels sont les messages/sous-textes pensez-vous avoir pu identifier ?</label>
              <input type="text" placeholder='...' />

              <label htmlFor="feelingInput" value={feelingInput} onChange={e => SetFeelingInput(e.target.value)} >Que ressentez-vous après cette lecture ?</label>
              <input type="text" placeholder='...' />

            </div>

            <label htmlFor="freenote" >Ecrivez librement à propos de ce que vous avez lu:</label>
            <input type="textarea" placeholder='...' />

            <button type='submit'>Ajouter une note +</button>
          </div>
        </form>
      </div>
    </>
  )
}