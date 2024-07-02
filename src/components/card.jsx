import React from "react";
import Image from "next/image";

const Card = ({ img, header, text, btn, id }) => {
  return (
    <div className="max-w-sm  rounded-lg shadow" id={id}>
      <Image
        className="rounded-lg"
        width={453}
        height={458}
        src={img}
        alt="img"
      />

      <div
        className={`p-5 ${id ? "bg-[#654494]" : "bg-[#031B14]"}  rounded-lg`}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {header}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {text}
        </p>
        <div className="flex justify-end ">
          <button className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-[#031B14]  rounded-lg  focus:outline-none ">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
