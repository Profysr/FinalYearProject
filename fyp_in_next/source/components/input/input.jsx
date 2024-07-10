export const CustomInput = ({ id, label, type, placeholder }) => (
  <div className="customForm">
    <label htmlFor={id}>{label}</label>
    <input
      className="customInput"
      required
      placeholder={placeholder}
      id={id}
      type={type}
    />
  </div>
);

export const CustomButton = ({ text, className }) => (
  <button className={`customBtn ${className}`}>{text}</button>
);
