import React from "react";
import Image from "next/image";
import glasses from "../../public/images/glasses.png";
import character3 from "../../public/images/character3.png";
import gamepad from "../../public/images/gamepad.png";

const Featured = () => {
  return (
    <section className="gradient-custom w-full">
      <div className="flex items-center ">
        <div className="p-4 space-y-4">
          <h2 className="text-primary font-semibold text-3xl">
            Featured Games
          </h2>
          <p className="font-mess tracking-wide">
            Featured games Discover our featured to blockchain games{" "}
          </p>
          <div className=" flex space-x-5 bg-neutral-900 w-2/2">
            <button className="border-none rounded-lg bg-purple-700 text-white px-5 py-2">
              Get Started
            </button>
            <button className="border border-x-[#6F4DA0] border-y-[#3E89A2] rounded-lg  text-white px-5 py-2">
              Play now
            </button>
          </div>
        </div>
        <Image src={glasses} width={200} alt="girl VR" className="ml-10" />

        <div className="flex justify-end w-full relative">
          <Image src={character3} width={200} alt="Character3" className="" />
          <Image src={gamepad} width={180} alt="Controller" />
        </div>
      </div>
    </section>
  );
};

export default Featured;
