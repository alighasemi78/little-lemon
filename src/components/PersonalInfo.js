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
        <FormItem name="name" label="Name" dark required>
          <input
            name="name"
            placeholder="enter your name"
            required
            value={props.formData.name}
            onChange={(e) => props.handleChange(e, "name")}
          />
        </FormItem>
        <FormItem name="email" label="Email" dark required>
          <input
            name="email"
            type="email"
            placeholder="enter your email"
            required
            value={props.formData.email}
            onChange={(e) => props.handleChange(e, "email")}
          />
        </FormItem>
        <Button onClick={() => navigate("/")}>Back</Button>
        <Button type="submit">Confirm</Button>
      </main>
    </section>
  );
};

export default PersonalInfo;
