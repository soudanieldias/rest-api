import PropTypes from "prop-types";
import IBook from "../interfaces/IBook";
import './BookCard.css';

type BookProps = {
  bookData: IBook,
}

export default function BookCard({ bookData }:BookProps) {

  return (
    <button
      className="book-card"
      id={`card-button-${bookData.id}`}
      onClick={ (e:Event | any) => { console.log('Clicou em:', e.target.id); }}
    >
      <img
        src={ bookData.bookCover }
        alt={`Imagem do Livro${bookData.name}`}
        id={`card-image-${bookData.id}`}
      />
      <p id={`card-book-name-${bookData.id}`}>{ bookData.name}</p>
      <p id={`card-book-author-${bookData.id}`}>{ bookData.author }</p>
    </button>
  )
}

BookCard.propTypes = {
  bookData: PropTypes.object.isRequired,
}