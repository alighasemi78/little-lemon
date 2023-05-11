import "../styles/SpecialCard.css";

const SpecialCard = (props) => {
  return (
    <article className="specialCard">
      <img src={props.image} alt="specialImage" />
      <main className="specialCardMain">
        <header className="specialCardMainHeader">
          <h3>{props.title}</h3>
          <p>{props.price}</p>
        </header>
        <p>{props.description}</p>
        <p>Order a delivery</p>
      </main>
    </article>
  );
};

export default SpecialCard;
