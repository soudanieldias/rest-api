import book from '../images/book.png';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img src={book} alt="Book GIF Animation" />
      My Books - Página Inicial
    </div>
  );
}

export default Header;