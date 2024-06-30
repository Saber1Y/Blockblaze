import React from "react";
import splinter from "../../public/images/splinter.png";
import unlock from "../../public/images/unlock.png";
import uvium from "../../public/images/uvium.png";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-[#021611B5] relative flex items-center justify-between">
      <div className="">
        <h3>About</h3>
        <h5 className="font-normal text-4xl text-primary my-3">
          Blockblaze Hub
        </h5>
        <p className="text-3xl font-serif">
          Welcome to <span className="text-primary">BlockBlaze Hub</span>, the
          ultimate
          <br /> destination for blockchain gaming enthusiasts! Dive
          <br /> into a world where you can explore, play, and earn
          <br /> with cutting-edge blockchain games. Our platform
          <br /> offers a curated selection of
          <br /> top games, a bustling NFT marketplace, and a vibrant community
          <br />
          of gamers and developers. Join us and experience the
          <br /> future of gaming today
        </p>
      </div>

      <div className="flex bg-assasins bg-center">
        
        <Image src={splinter} width={250} />
        <Image src={unlock} width={250} className="z-20" />
        <Image src={uvium} width={250} />
      </div>
    </section>
  );
};

export default About;
