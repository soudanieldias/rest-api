import Header from '../components/Header';
import './Home.css';
import { useEffect, useState } from 'react';
import { makeGet } from '../services/axiosRequest';
import IBook from '../interfaces/IBook';
import BookCard from '../components/BookCard';

function Home() {
  const [booksData, setBooksData] = useState<IBook[]>();

  useEffect(() => {
    makeGet(`books`, {})
      .then((books) => { setBooksData(books.data)})
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="home">
      <Header />
      <section className="Books">
        {
          booksData && booksData.map((book) => (
            <BookCard key={book.id} bookData={book} />
          ))
        }
      </section>
    </div>
  );
}

export default Home;