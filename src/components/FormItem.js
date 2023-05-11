const FormItem = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
      />
    </div>
  );
};

export default FormItem;
