import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reserve from "./pages/Reserve";
import Confirm from "./pages/Confirm";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
