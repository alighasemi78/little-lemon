import FormItem from "./FormItem";
import "../styles/OrderInfo.css";

const OrderInfo = (props) => {
  return (
    <section className="pageSection orderInfo">
      <h1>Order Information</h1>
      <main>
        <FormItem name="date" label="Date" required>
          <input
            name="date"
            type="date"
            placeholder="date"
            required
            value={props.formData.date}
            onChange={(e) => props.handleChange(e, "date")}
          />
        </FormItem>
        <FormItem name="time" label="Time" required>
          <input
            name="time"
            type="time"
            required
            value={props.formData.time}
            onChange={(e) => props.handleChange(e, "time")}
          />
        </FormItem>
        <FormItem name="occasion" label="Occasion">
          <select
            name="occasion"
            placeholder="Occasion"
            value={props.formData.occasion}
            onChange={(e) => props.handleChange(e, "occasion")}
          >
            <option value="" disabled hidden>
              Occasion
            </option>
            <option value="birthday">birthday</option>
            <option value="engagement">engagement</option>
            <option value="anniversary">anniversary</option>
          </select>
        </FormItem>
        <FormItem name="numberOfPeople" label="Number of people" required>
          <input
            name="numberOfPeople"
            type="number"
            placeholder="Number of people"
            min={1}
            max={10}
            required
            value={props.formData.numberOfPeople}
            onChange={(e) => props.handleChange(e, "numberOfPeople")}
          />
        </FormItem>
        <FormItem name="tablePosition" label="Table position">
          <select
            name="tablePosition"
            placeholder="Table Position"
            value={props.formData.tablePosition}
            onChange={(e) => props.handleChange(e, "tablePosition")}
          >
            <option value="" disabled hidden>
              Table Position
            </option>
            <option value="inside">inside</option>
            <option value="outside">outside</option>
          </select>
        </FormItem>
        <FormItem name="notes" label="Notes">
          <textarea
            name="notes"
            placeholder="write your notes"
            value={props.formData.notes}
            onChange={(e) => props.handleChange(e, "notes")}
          />
        </FormItem>
      </main>
    </section>
  );
};

export default OrderInfo;
