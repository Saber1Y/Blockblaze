import React from "react";

const Segment = () => {
  return (
    <section className="flex flex-col bg-[#50837E] border rounded-lg w-1/4 px-10 py-8">
      <span className=" text-4xl">1</span>
      <div className="flex w-full">
        <h3 className="text-3xl pr-5">What is Blockchain?</h3>
      </div>
      <ol className="mt-3 font-raleway text-sm">
        <li>Basics of blockchain technology</li>
        <ol>How blockchain is applied to gaming</ol>
        <ol>Blokcchain gaming in comparison to traditional gaming</ol>
      </ol>
    </section>
  );
};

export default Segment;
