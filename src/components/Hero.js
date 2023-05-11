import Button from "./Button";
import hero from "../assets/images/restauranfood.jpg";

const Hero = () => {
  return (
    <section>
      <main>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          voluptas corporis placeat vel neque quis ut voluptatum dolore
          inventore provident quidem earum at quae ea laborum nihil, fugit
          incidunt temporibus.
        </p>
        <Button>Reserve a table</Button>
      </main>
      <img src={hero} alt="hero" />
    </section>
  );
};

export default Hero;
