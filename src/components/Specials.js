import Button from "./Button";
import SpecialCard from "./SpecialCard";
import greekSalad from "../assets/images/greek salad.jpg";
import bruchetta from "../assets/images/bruchetta.svg";
import lemonDessert from "../assets/images/lemon dessert.jpg";

const Specials = () => {
  return (
    <section>
      <header>
        <h1>This weeks specials!</h1>
        <Button>Online Menu</Button>
      </header>
      <main>
        <SpecialCard
          image={greekSalad}
          title="Greek Salad"
          price="$12.99"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque voluptas corporis placeat vel neque quis ut voluptatum dolore inventore provident quidem earum at quae ea laborum nihil, fugit incidunt temporibus."
        />
        <SpecialCard
          image={bruchetta}
          title="Bruchetta"
          price="$12.99"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        />
        <SpecialCard
          image={lemonDessert}
          title="Lemon Dessert"
          price="$12.99"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque voluptas corporis placeat vel neque quis ut voluptatum dolore"
        />
      </main>
    </section>
  );
};

export default Specials;
