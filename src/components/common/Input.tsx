import type { Dispatch, SetStateAction } from "react";

const Input = ({
  label,
  attribute,
  value,
  placeholder,
  onChange,
  type = "text"
}: {
  type?: "text" | "number"
  label: string;
  attribute: string;
  value: string;
  placeholder: string;
  onChange: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <>
      <label htmlFor={attribute}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        name={attribute}
        id={attribute}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-black border-solid border-1 p-1 "
      />
    </>
  );
};

export default Input;
