import React from "react";
import Button from "./Button";

const Segment = ({ number, header, details, bgColor }) => {
  return (
    <section
      className="flex flex-col  border rounded-lg  px-10 py-8"
      style={{ backgroundColor: bgColor }}
    >
      <span className=" text-4xl">{number}</span>
      <div className="flex w-full">
        <h3 className="text-xl md:text-3xl pr-5">{header}</h3>
      </div>
      <ul className="mt-3 font-raleway text-sm list-disc list-inside">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <div className="flex items-center md:justify-end my-4">
        <Button text="Learn" />
      </div>
    </section>
  );
};

export default Segment;
