import Button from "../components/Button";
import "../styles/Confirm.css";

const Confirm = () => {
  return (
    <>
      <section className="pageSection confirmMessages">
        <h1>Reservation completed</h1>
        <h2>Your reservation number is</h2>
        <h1>1pi102fj098asdjf9823802jf</h1>
        <h2>A confirmation email has been sent to your email as well</h2>
      </section>
      <section className="pageSection confirmButton">
        <Button>Back to home</Button>
      </section>
    </>
  );
};

export default Confirm;
