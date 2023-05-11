import Button from "./Button";
import FormItem from "./FormItem";
import "../styles/PersonalInfo.css";

const PersonalInfo = () => {
  return (
    <section className="pageSection personalInfo">
      <h1>Personal Information</h1>
      <form>
        <FormItem
          name="name"
          label="Name"
          type="text"
          placeholder="enter your name"
          dark
        />
        <FormItem
          name="email"
          label="Email"
          type="email"
          placeholder="enter your email"
          dark
        />
        <Button>Back</Button>
        <Button>Confirm</Button>
      </form>
    </section>
  );
};

export default PersonalInfo;
