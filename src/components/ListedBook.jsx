export default function ListedBook({ book }) {
  console.log(book)
  return (
    <li>
      <p>{book.title}</p>
      <p>{book.autor}</p>
      <p>{book.status}</p>
    </li>
  )
}