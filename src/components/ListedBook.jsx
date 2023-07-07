import { ListedElement } from './styledComponents/ListedElement';
import { DeleteBtn } from './styledComponents/Btn';


export default function ListedBook({ book }) {
  return (
    <ListedElement>
      <div className="infos">
        <p>{book.title}</p>
        <p>{book.autor}</p>
        <p>{book.status}</p>
      </div>
      <div>
        <DeleteBtn>Supprimer</DeleteBtn>
      </div>
    </ListedElement>
  )
}