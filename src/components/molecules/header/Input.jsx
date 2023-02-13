import React from "react";

const Input = ({
  type,
  name,
  placeholder = "",
  required = false,
  disabled = false,
}) => {
  return (
    <input
      className="w-full border rounded-md py-1 px-4 text-base text-dark-500 border-light-500 font-regular outline-none focus:border-primary-500  "
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  );
};

export default Input;
