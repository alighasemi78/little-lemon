import "../styles/FormItem.css";

const FormItem = (props) => {
  return (
    <div className={`formItem${props.dark ? " dark" : ""}`}>
      <label htmlFor={props.name}>
        {props.label}
        {props.required && " *"}
      </label>
      {props.children}
      {props.formik.touched[props.name] && props.formik.errors[props.name] && (
        <span>{props.formik.errors[props.name]}</span>
      )}
    </div>
  );
};

export default FormItem;
