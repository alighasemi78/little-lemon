import { useState } from "react";
import OrderInfo from "../components/OrderInfo";
import PersonalInfo from "../components/PersonalInfo";

const Reserve = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    occasion: "",
    numberOfPeople: "",
    tablePosition: "",
    notes: "",
    name: "",
    email: "",
  });

  const handleChange = (e, name) => {
    const value = e.target.value;
    const newFormData = { ...formData };
    newFormData[name] = value;
    setFormData({ ...newFormData });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <OrderInfo
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />
      </form>
    </>
  );
};

export default Reserve;
