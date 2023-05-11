import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="pageSection header">
      <Link to="/" className="headerLogo">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="headerNav">
        <ul className="headerUl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reserve">Reservation</Link>
          </li>
          <li>
            <Link to="/order">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
