import React from "react";

const button = ({ label, type, onClick }) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className="min-w-36 bg-gradient-to-b from-principal to-terciary rounded-lg hover:from-terciary hover:to-principal p-3 flex justify-center w-full text-white cursor-pointer"
      >
        {label}
      </button>
    </div>
  );
};

export default button;
