import React from "react";

const inputfield = ({ type, name, placeholder, value, onChange }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full p-3 bg-gray rounded-md my-3 placeholder-black placeholder:text-lg"
      />
    </div>
  );
};

export default inputfield;
