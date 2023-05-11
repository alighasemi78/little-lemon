import Review from "./Review";
import "../styles/Testimonials.css";

const Testimonials = () => {
  return (
    <section className="pageSection testimonials">
      <h1>Testimonials</h1>
      <main className="testimonialsMain">
        <Review />
        <Review />
        <Review />
        <Review />
      </main>
    </section>
  );
};

export default Testimonials;
