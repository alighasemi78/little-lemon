import FormItem from "./FormItem";
import "../styles/OrderInfo.css";

const OrderInfo = () => {
  return (
    <section className="pageSection orderInfo">
      <h1>Order Information</h1>
      <form>
        <FormItem name="date" label="Date" type="text" placeholder="date" />
        <FormItem name="time" label="Time" type="text" placeholder="time" />
        <FormItem
          name="occasion"
          label="Occasion"
          type="text"
          placeholder="occasion"
        />
        <FormItem
          name="numberOfPeople"
          label="Number of people"
          type="text"
          placeholder="number of people"
        />
        <FormItem
          name="tablePosition"
          label="Table position"
          type="text"
          placeholder="table position"
        />
        <FormItem
          name="notes"
          label="Notes"
          type="text"
          placeholder="write your notes"
        />
      </form>
    </section>
  );
};

export default OrderInfo;
