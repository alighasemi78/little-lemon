import Button from "./Button";
import FormItem from "./FormItem";

const PersonalInformation = () => {
  return (
    <section>
      <h1>Personal Information</h1>
      <form>
        <FormItem
          name="name"
          label="Name"
          type="text"
          placeholder="enter your name"
        />
        <FormItem
          name="email"
          label="Email"
          type="email"
          placeholder="enter your email"
        />
        <Button>Back</Button>
        <Button>Confirm</Button>
      </form>
    </section>
  );
};

export default PersonalInformation;
