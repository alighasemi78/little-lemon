import Button from "./Button";
import hero from "../assets/images/restauranfood.jpg";
import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pageSection hero">
      <main className="heroMain">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          voluptas corporis placeat vel neque quis ut voluptatum dolore
          inventore provident quidem earum at quae ea laborum nihil, fugit
          incidunt temporibus.
        </p>
        <Button onClick={() => navigate("/reserve")}>Reserve a table</Button>
      </main>
      <img src={hero} alt="hero" />
    </section>
  );
};

export default Hero;
