import Footer from "../components/Footer";
import Header from "../components/Header";
import OrderInfo from "../components/OrderInfo";
import PersonalInfo from "../components/PersonalInfo";

const Reserve = () => {
  return (
    <>
      <Header />
      <main>
        <OrderInfo />
        <PersonalInfo />
      </main>
      <Footer />
    </>
  );
};

export default Reserve;
