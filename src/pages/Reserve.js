import Footer from "../components/Footer";
import Header from "../components/Header";
import OrderInfo from "../components/OrderInfo";
import PersonalInformation from "../components/PersonalInfo";

const Reserve = () => {
  return (
    <>
      <Header />
      <main>
        <OrderInfo />
        <PersonalInformation />
      </main>
      <Footer />
    </>
  );
};

export default Reserve;
