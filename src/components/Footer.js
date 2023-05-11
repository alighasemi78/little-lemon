import { Link } from "react-router-dom";
import logo from "../assets/images/Asset 9@4x 1.png";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <main>
        <section>
          <header>Doormat navigation</header>
          <ul>
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
        </section>
        <section>
          <header>Contract</header>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </section>
        <section>
          <header>Social media links</header>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </section>
      </main>
    </footer>
  );
};

export default Footer;
