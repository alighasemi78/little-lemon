const SpecialCard = (props) => {
  return (
    <article>
      <img src={props.image} alt="specialImage" />
      <main>
        <header>
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
