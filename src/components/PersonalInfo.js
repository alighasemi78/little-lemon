import Button from "./Button";
import FormItem from "./FormItem";
import "../styles/PersonalInfo.css";
import { useNavigate } from "react-router-dom";

const PersonalInfo = (props) => {
  const navigate = useNavigate();

  return (
    <section className="pageSection personalInfo">
      <h1>Personal Information</h1>
      <main>
        <FormItem name="name" label="Name" dark required formik={props.formik}>
          <input
            {...props.formik.getFieldProps("name")}
            placeholder="enter your name"
            required
          />
        </FormItem>
        <FormItem
          name="email"
          label="Email"
          dark
          required
          formik={props.formik}
        >
          <input
            {...props.formik.getFieldProps("email")}
            type="email"
            placeholder="enter your email"
            required
          />
        </FormItem>
        <Button onClick={() => navigate("/")}>Back</Button>
        <Button type="submit">Confirm</Button>
      </main>
    </section>
  );
};

export default PersonalInfo;
