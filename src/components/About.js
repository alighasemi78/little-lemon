import about1 from "../assets/images/restaurant.jpg";
import about2 from "../assets/images/Mario and Adrian A.jpg";

const About = () => {
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
      </main>
      <aside>
        <img src={about1} alt="about1" />
        <img src={about2} alt="about2" />
      </aside>
    </section>
  );
};

export default About;
