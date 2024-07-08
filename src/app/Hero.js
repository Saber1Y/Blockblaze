import React from "react";
import character1 from "../../public/images/character1.png";
import character2 from "../../public/images/character2.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-hero bg-cover">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <h5 className="border border-x-[#42AA99] border-y-[#703DC8]  rounded-lg ">
          <span className="tracking-widest leading-4 text-primary font-mess px-20 py-2 2xl:text-4xl">
            Welcome to Blockblaze Hub
          </span>
        </h5>
        <p className="mt-4 text-5xl tracking-wide font-normal 2xl:text-5xl">
          Join the revolution;{" "}
          <span className="text-[#118670]">Blockblaze Hub</span> your <br />
          gateway to next gen <span className="text-[#118670]">gaming</span>
        </p>
        <p className="mt-8 font-semibold font-raleway leading-5 tracking-wide 2xl:text-3xl">
          Experience the Ultimate in Blockchain Gaming, from Play-to
          <br />
          Earn Mechanics to NFT Marketplaces and Community Events.
        </p>
        <div className="mt-7 flex space-x-5">
          <button className="border-none rounded-lg bg-purple-700 text-white px-5 py-2">
            Get Started
          </button>
          <button className="border-none rounded-lg bg-primary text-white px-5 py-2">
            Play now
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-10 pb-10 z-10">
        <div className="w-1/2 flex justify-start">
          <Image
            src={character1}
            width={350}
            height={50}
            alt="female character"
            className="object-contain h-auto"
          />
        </div>
        <div className="w-1/2 flex justify-end">
          <Image
            src={character2}
            width={350}
            height={50}
            alt="male character"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
