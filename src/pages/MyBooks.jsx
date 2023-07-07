import { useState, useEffect } from 'react'
import ListedBook from '../components/ListedBook';
import BookListForm from '../components/BookListForm';
import useLocalStorage from '../customHooks/useLocalStorage';
import ListedSession from '../components/ListedSession';

export default function MyBooks() {
    const [allBookList, SetAllBookList] = useLocalStorage('ALL_BOOK_LIST',[]);
    const [readingBookList, SetReadingBookList] = useLocalStorage('READING_BOOK_LIST',"");
    const [finishedBookList, SetFinishedBookList] =useLocalStorage('FINISHED_BOOK_LIST',"");
    const [planToReadlBookList, SetPlanToReadBookList] = useLocalStorage('PLANNED_BOOK_LIST',"");

  const AddToBookLists = (bookToAdd) => {
    const SelectedListCopy = [...allBookList];
    SelectedListCopy.push(bookToAdd);
    SetAllBookList(SelectedListCopy); 
     if (bookToAdd.status == "Currently reading"){
      const SelectedListCopy = [...readingBookList];
      SelectedListCopy.push(bookToAdd);
      SetReadingBookList(SelectedListCopy); 
    }
    if (bookToAdd.status == "Finished"){
      const SelectedListCopy = [...finishedBookList];
      SelectedListCopy.push(bookToAdd);
      SetFinishedBookList(SelectedListCopy); 
    }
    if (bookToAdd.status == "Plan to read"){
      const SelectedListCopy = [...planToReadlBookList];
      SelectedListCopy.push(bookToAdd);
      SetPlanToReadBookList(SelectedListCopy); 
    }
  }

  return (
    <>
      <h1>Vos livres</h1>

      <h3>Tout les livres</h3>
      <ul>
        {allBookList && allBookList.map(book => {
        
          return (
            <ListedBook book={book} key={book.id} />
          );            

        })}
      </ul>
      <h3>En cours de lecture</h3>
      <ul>
        {readingBookList && readingBookList.map(book => {
          return (
            <ListedBook book={book} key={book.id} />
          )
        })}
      </ul>
      <h3>Déjà Lues</h3>
      <ul>
        {finishedBookList && finishedBookList.map(book => {
          return (
            <ListedBook book={book} key={book.id} />
          )
        })}
      </ul>
      <h3>A lire plus tard</h3>
      <ul>
        {planToReadlBookList && planToReadlBookList.map(book => {
          return (
            <ListedBook book={book} key={book.id} />
          )
        })}
      </ul>
      <BookListForm AddToBookLists={AddToBookLists} />

    </>
  )
}