import FormItem from "./FormItem";
import "../styles/OrderInfo.css";

const OrderInfo = (props) => {
  return (
    <section className="pageSection orderInfo">
      <h1>Order Information</h1>
      <main>
        <FormItem name="date" label="Date" required formik={props.formik}>
          <input
            {...props.formik.getFieldProps("date")}
            id="date"
            type="date"
            placeholder="Date"
            required
          />
        </FormItem>
        <FormItem name="time" label="Time" required formik={props.formik}>
          <select
            {...props.formik.getFieldProps("time")}
            id="time"
            placeholder="Time"
            required
            disabled={props.availableTimes.length === 0}
          >
            <option value="" disabled hidden>
              Time
            </option>
            {props.availableTimes.map((time) => {
              return (
                <option key={time} value={time}>
                  {time}
                </option>
              );
            })}
          </select>
        </FormItem>
        <FormItem name="occasion" label="Occasion" formik={props.formik}>
          <select
            {...props.formik.getFieldProps("occasion")}
            id="occasion"
            placeholder="Occasion"
          >
            <option value="" disabled hidden>
              Occasion
            </option>
            <option value="birthday">birthday</option>
            <option value="engagement">engagement</option>
            <option value="anniversary">anniversary</option>
          </select>
        </FormItem>
        <FormItem
          name="numberOfPeople"
          label="Number of people"
          required
          formik={props.formik}
        >
          <input
            {...props.formik.getFieldProps("numberOfPeople")}
            id="numberOfPeople"
            type="number"
            placeholder="Number of people"
            min={1}
            max={10}
            required
          />
        </FormItem>
        <FormItem
          name="tablePosition"
          label="Table position"
          formik={props.formik}
        >
          <select
            {...props.formik.getFieldProps("tablePosition")}
            id="tablePosition"
            placeholder="Table Position"
          >
            <option value="" disabled hidden>
              Table Position
            </option>
            <option value="inside">inside</option>
            <option value="outside">outside</option>
          </select>
        </FormItem>
        <FormItem name="notes" label="Notes" formik={props.formik}>
          <textarea
            {...props.formik.getFieldProps("notes")}
            id="notes"
            placeholder="write your notes"
          />
        </FormItem>
      </main>
    </section>
  );
};

export default OrderInfo;
