import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-hero-bg">
      <h5 className="border-gradient text-primary font-mess rounded-full px-5 py-2">
        Welcome to Blockblaze Hub
      </h5>
      <p className="mt-4 text-5xl font-normal">
        Join the revolution;{" "}
        <span className="text-[#118670]">Blockblaze Hub</span> your <br />
        gateway to next gen <span className="text-[#118670]">gaming</span>
      </p>

      <p className="mt-5 font-semibold font-sans">
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
    </section>
  );
};

export default Hero;
