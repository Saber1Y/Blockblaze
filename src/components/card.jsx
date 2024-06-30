import React from "react";
import Image from "next/image";
import Frame1 from "../../public/images/Frame1.png";

const Card = () => {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow">
      <Image src={Frame1} width={100} height={100} />
    </div>
    // <Image src={Frame1} />
  );
};

export default Card;
