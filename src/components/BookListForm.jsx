import { useState } from 'react'

export default function BookListForm({ AddToBookLists }) {
  const [titleInput, SetTitleInput] = useState("");
  const [autorInput, SetAutorInput] = useState("");
  const [statusInput, SetStatusInput] = useState("Currently reading");

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
    < form onSubmit={AddBook} >
      <label htmlFor='title'>Titre :</label>
      <input
        type="text"
        id='title'
        value={titleInput}
        onChange={e => SetTitleInput(e.target.value)} />
      <label htmlFor='autor'>Auteur :</label>
      <input
        type="text"
        id='auteur'
        value={autorInput}
        onChange={e => SetAutorInput(e.target.value)} />
      <label htmlFor="status-select">Status :</label>


      <select
        name="status"
        id="status-select"
        value={statusInput}
        onChange={e => SetStatusInput(e.target.value)}
      >
        <option></option>
        <option>Currently reading</option>
        <option>Finished</option>
        <option>Plan to read</option>
      </select>

      <button type='submit'>Ajouter un livre +</button>
    </form >
  )
}