import "../styles/FormItem.css";

const FormItem = (props) => {
  return (
    <div className={`formItem${props.dark ? " dark" : ""}`}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
      />
      <span>ERROR</span>
    </div>
  );
};

export default FormItem;
