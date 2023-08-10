import { useState } from 'react';
import { Btn, ConfirmBtn, OpenBtn } from './styledComponents/Btn';
import { SelectInput } from './styledComponents/SelectInput';
import ShowFormDiv, { DarkBG,FormHeader,FormInputDiv,FormInput} from './styledComponents/FormDiv';
import close_menu from '../../public/close_menu.svg';


export default function BookListForm({ AddToBookLists }) {
  const [titleInput, SetTitleInput] = useState("");
  const [autorInput, SetAutorInput] = useState("");
  const [statusInput, SetStatusInput] = useState("Currently reading");
  const [showForm, SetShowForm] = useState(false);

  const ShowForm = (stateToChange, SetStateToChange) => {
    !stateToChange ? SetStateToChange(true) : SetStateToChange(false)
  }
  const AddBook = (e) => {
    event.preventDefault();
    const bookToAdd = {
      id: window.crypto.randomUUID(),
      title: titleInput,
      autor: autorInput,
      status: statusInput,
    }
    AddToBookLists(bookToAdd)
    SetTitleInput("")
    SetAutorInput("")
  }

  return (
    <>
      <Btn onClick={(e) => { ShowForm(showForm, SetShowForm) }}>Ajouter un livre +</Btn>
      <DarkBG style={{ display: showForm ? 'block' : 'none' }}>
        <ShowFormDiv style={{ display: showForm ? 'block' : 'none'}} >
          <FormHeader >
            <h3 style={{ margin: 'auto' }}>Ajouter un livre</h3>
            <button onClick={(e) => { ShowForm(showForm, SetShowForm) }} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}><img src={close_menu} style={{ width: '20px', height: '20px', }} /></button>
          </FormHeader>
          
          <form onSubmit={AddBook} >
            <FormInputDiv >
              <label htmlFor='title'>Titre :</label>
              <FormInput
                type="text"
                id='title'
                value={titleInput}
                onChange={e => SetTitleInput(e.target.value)}
                />
            </FormInputDiv>
            <FormInputDiv>
            <label htmlFor='autor'>Auteur :</label>
            <FormInput
              type="text"
              id='auteur'
              value={autorInput}
              onChange={e => SetAutorInput(e.target.value)} />
            </FormInputDiv>
            <FormInputDiv>
            <label htmlFor="status-select">Status :</label>
            <SelectInput
              name="status"
              id="status-select"
              value={statusInput}
              onChange={e => SetStatusInput(e.target.value)}
            >
              <option>Currently reading</option>
              <option>Finished</option>
              <option>Plan to read</option>
            </SelectInput>
            </FormInputDiv>
            <ConfirmBtn type='submit' style={{ margin: 'auto', bottom: '0px' }}>Valider</ConfirmBtn>
          </form >
        </ShowFormDiv>
      </DarkBG>

    </>
  )
}