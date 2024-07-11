import React from "react";
import Image from "next/image";
import glasses from "../../public/images/glasses.png";
import character3 from "../../public/images/character3.png";
import gamepad from "../../public/images/gamepad.png";

const Featured = () => {
  return (
    <section className="gradient-custom w-full p-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="p-4 space-y-3 md:w-1/2">
          <h2 className="text-[#118670] font-semibold text-3xl">
            Featured Games
          </h2>
          <p className="font-raleway font-bold  text-2xl">
            Discover our featured blockchain games.
          </p>
          <div className="flex space-x-5">
            <button className="border-none rounded-lg bg-purple-700 text-white px-5 py-2 hover:bg-transparent">
              Popular
            </button>
            <button className="border border-x-[#6F4DA0] bg-neutral-700 border-y-[#3E89A2] rounded-lg text-white px-5 py-2 hover:bg-transparent">
              Play now
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between w-full md:w-1/2 mt-8 md:mt-0">
          <div className="flex justify-center w-1/3">
            <Image src={glasses} alt="girl VR" className="w-full object-contain h-auto" />
          </div>
          <div className="flex justify-center w-1/3">
            <Image src={character3} alt="Character3" className="w-full object-contain h-auto" />
          </div>
          <div className="flex justify-center w-1/3">
            <Image src={gamepad} alt="Controller" className="w-full object-contain h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
