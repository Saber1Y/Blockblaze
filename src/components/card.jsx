import React from "react";
import Image from "next/image";


const Card = ({ img, header, text, btn }) => {
  return (
    <div className="max-w-sm  rounded-lg shadow">
      <Image className="rounded-t-lg" src={img} alt="" />

      <div className="p-5 bg-[#031B14] rounded-lg">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {header}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {text}
        </p>
        <div className="flex justify-end">
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black-900 rounded-lg  focus:outline-none ">
            btn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
