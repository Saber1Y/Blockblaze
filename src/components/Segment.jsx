import React from "react";
import Button from "./Button";

const Segment = ({ number, header, details, bgColor }) => {
  return (
    <section className="flex flex-col  border rounded-lg  px-10 py-8 " style={{ backgroundColor: bgColor }}>
      <span className=" text-4xl">{number}</span>
      <div className="flex w-full">
        <h3 className="text-3xl pr-5">{header}</h3>
      </div>
      <ul className="mt-3 font-raleway text-sm">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <div className="flex justify-end">
        <Button text="Learn" />
      </div>
    </section>
  );
};

export default Segment;
