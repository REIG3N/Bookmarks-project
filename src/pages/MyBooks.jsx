import ListedBook from '../components/ListedBook';
import BookListForm from '../components/BookListForm';
import useLocalStorage from '../customHooks/useLocalStorage';
import StyledBookList from '../components/styledComponents/StyledBookList';


export default function MyBooks({  }) {
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

  const RemoveBook = (bookToRemove) => {
    const SelectedListCopy = [...allBookList];
    const UpdatedSelectedListCopy = SelectedListCopy.filter(book => book.id !== bookToRemove.id);
    SetAllBookList(UpdatedSelectedListCopy);
    if (bookToRemove.status == "Currently reading"){
      const SelectedListCopy = [...readingBookList];
      const UpdatedSelectedListCopy = SelectedListCopy.filter(book => book.id !== bookToRemove.id);
      SetReadingBookList(UpdatedSelectedListCopy); 
    }
    if (bookToRemove.status == "Finished"){
      const SelectedListCopy = [...finishedBookList];
      const UpdatedSelectedListCopy = SelectedListCopy.filter(book => book.id !== bookToRemove.id);
      SetFinishedBookList(UpdatedSelectedListCopy);
    }
    if (bookToRemove.status == "Plan to read"){
      const SelectedListCopy = [...planToReadlBookList];
      const UpdatedSelectedListCopy = SelectedListCopy.filter(book => book.id !== bookToRemove.id);
      SetPlanToReadBookList(UpdatedSelectedListCopy);
    }
  }

  return (
    <>
      <h1>Vos livres</h1>

        <BookListForm AddToBookLists={AddToBookLists} />
      <h3>Tout les livres</h3>
      <StyledBookList>
        {allBookList && allBookList.map(book => {
        
          return (
            <ListedBook book={book} key={book.id} RemoveBook={RemoveBook} />
          );            

        })}
      </StyledBookList>
      <h3>En cours de lecture</h3>
      <StyledBookList>
        {readingBookList && readingBookList.map(book => {
          return (
            <ListedBook book={book} key={book.id} RemoveBook={RemoveBook} />
          )
        })}
      </StyledBookList>
      <h3>Déjà Lues</h3>
      <StyledBookList>
        {finishedBookList && finishedBookList.map(book => {
          return (
            <ListedBook book={book} key={book.id} RemoveBook={RemoveBook} />
          )
        })}
      </StyledBookList>
      <h3>A lire plus tard</h3>
      <StyledBookList>
        {planToReadlBookList && planToReadlBookList.map(book => {
          return (
            <ListedBook book={book} key={book.id} RemoveBook={RemoveBook} />
          )
        })}
      </StyledBookList>
    </>
  )
}