import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reserve from "./pages/Reserve";
import Confirm from "./pages/Confirm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </>
  );
}

export default App;
