import { Link } from "react-router-dom";
import logo from "../assets/images/Asset 9@4x 1.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="pageSection footer">
      <img src={logo} alt="logo" />
      <main className="footerMain">
        <section className="footerMainSection">
          <header>Doormat navigation</header>
          <ul className="footerMainUl">
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
        <section className="footerMainSection">
          <header>Contract</header>
          <ul className="footerMainUl">
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </section>
        <section className="footerMainSection">
          <header>Social media links</header>
          <ul className="footerMainUl">
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
