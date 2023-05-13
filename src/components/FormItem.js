import "../styles/FormItem.css";

const FormItem = (props) => {
  return (
    <div className={`formItem${props.dark ? " dark" : ""}`}>
      <label htmlFor={props.name}>
        {props.label}
        {props.required && " *"}
      </label>
      {props.children}
      {/* <span>ERROR</span> */}
    </div>
  );
};

export default FormItem;
