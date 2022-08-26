import Header from '../components/Header';
import './Home.css';
import { useEffect, useState } from 'react';
import { makeGet } from '../services/axiosRequest';
import { IBook } from '../../../backend/src/interfaces/IBook';

function Home() {
  const [booksData, setBooksData] = useState<IBook[]>();

  useEffect(() => {
    makeGet(`books`, {})
      .then((books) => { setBooksData(books.data)})
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    console.log(booksData);
  }, [booksData]);

  return (
    <div className="home">
      <Header />
      <section className="Books">
        {
          booksData && booksData.map((book) => (
          <div key={book.id}>
            <div>Título: { book.name }</div>
            <div>Autor: { book.author }</div>
            <img src={ book.bookCover } alt={`Capa do Livro ${book.name}`} />
          </div>
          ))
        }
      </section>
    </div>
  );
}

export default Home;