import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Confirm = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <h1>Reservation completed</h1>
          <h2>Your reservation number is</h2>
          <h1>1pi102fj098asdjf9823802jf</h1>
          <h2>A confirmation email has been sent to your email as well</h2>
        </section>
        <section>
          <Button>Back to home</Button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Confirm;
