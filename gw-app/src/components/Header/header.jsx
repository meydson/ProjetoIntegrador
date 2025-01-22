import React from "react";
import mainLogo from "../../assets/mainLogo.png";

const header = () => {
  return (
    <div className="w-full h-[197px] bg-principal flex justify-center items-center p-10">
      <img src={mainLogo} alt="" className="w-[306px] h-[107px]" />
    </div>
  );
};

export default header;
