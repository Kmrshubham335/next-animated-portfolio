"use client";

import Image from "next/image";

const Homepage = () => {
  return (

      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2  lg:h-full lg:w-1/2 relative ">
          <Image src="/hero.png" alt="" fill  className="object-contain  flex justify-center items-center " />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-5 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-2xl  md:text-3xl  font-bold">
          Digital Alchemist Transforming Tomorrow's Experiences
          </h1>
          {/* DESC */}
          <p className=" md:text-xl ">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-5">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
  );
};

export default Homepage;