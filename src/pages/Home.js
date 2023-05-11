import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default Home;
