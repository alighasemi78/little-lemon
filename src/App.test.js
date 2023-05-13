import { fireEvent, logDOM, render, screen } from "@testing-library/react";
import OrderInfo from "./components/OrderInfo";
import Reserve from "./pages/Reserve";
import { BrowserRouter } from "react-router-dom";

test("renders reserve page first heading", () => {
  const formData = {};
  const setFormData = () => null;
  const handleChange = () => null;
  render(
    <OrderInfo
      formData={formData}
      setFormData={setFormData}
      handleChange={handleChange}
    />
  );
  const headingElement = screen.getByText("Order Information");
  expect(headingElement).toBeInTheDocument();
});

test("submits form", () => {
  render(
    <BrowserRouter>
      <Reserve />
    </BrowserRouter>
  );
  const submitElement = screen.getByText("Confirm");
  fireEvent.click(submitElement);
  console.log(logDOM);
});
