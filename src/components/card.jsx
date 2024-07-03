import React from "react";
import Image from "next/image";
import Button from "./Button";

const Card = ({ img, header, text, id }) => {
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
          <Button text={"Play now"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
