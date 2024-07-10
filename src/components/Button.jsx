import React from "react";

const Button = ({ text }) => {
  return (
    <button className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-[#031B14]  rounded-lg  focus:outline-none border border-t-[#6F4DA0] border-b-[#0CC7A4] border-r-[#5D63A1] border-l-[#3E89A2] hover:bg-transparent">
      {text}
    </button>
  );
};

export default Button;
