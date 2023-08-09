import { ListedElement, Title, Autor, Status,Infos } from './styledComponents/ListedElement';
import { DeleteBtn } from './styledComponents/Btn';


export default function ListedBook({ RemoveBook, book }) {
  return (
    <ListedElement>
      <Infos>
        <Title>{book.title}</Title>
        <Autor>{book.autor}</Autor>
        <Status>{book.status}</Status>
      </Infos>
      <div>
        <DeleteBtn onClick={() => RemoveBook(book)}>Supprimer</DeleteBtn>
      </div>
    </ListedElement>
  )
}