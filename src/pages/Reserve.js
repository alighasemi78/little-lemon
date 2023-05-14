import { useEffect, useState } from "react";
import OrderInfo from "../components/OrderInfo";
import PersonalInfo from "../components/PersonalInfo";
import { fetchAPI, submitAPI } from "../api.js";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Reserve = () => {
  const navigate = useNavigate();
  const [availableTimes, setAvailableTimes] = useState([]);
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      occasion: "",
      numberOfPeople: "",
      tablePosition: "",
      notes: "",
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Required"),
      time: Yup.string().required("Required"),
      numberOfPeople: Yup.number()
        .required("Required")
        .min(1, "Minimum is 1")
        .max(10, "Maximum is 10"),
      name: Yup.string().required("Required"),
      email: Yup.string().required("Required").email("Wrong format"),
    }),
    onSubmit: (values) => {
      const okay = submitAPI(values);
      if (okay) {
        navigate("/confirm");
      }
    },
  });

  useEffect(() => {
    if (formik.values.date) {
      const date = new Date(formik.values.date);
      setAvailableTimes(fetchAPI(date));
    }
  }, [formik.values.date]);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <OrderInfo availableTimes={availableTimes} formik={formik} />
        <PersonalInfo formik={formik} />
      </form>
    </>
  );
};

export default Reserve;
