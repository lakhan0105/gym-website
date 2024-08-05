import React from "react";
import heroImg from "../assets/hero.webp";

function Hero() {
  console.log(heroImg);
  return (
    <section
      style={{ backgroundImage: `url(${heroImg})` }}
      className={`bg-no-repeat bg-center h-[100vh] bg-cover relative`}
    >
      {/* overlay layer */}
      <div className="bg-black absolute left-0 right-0 top-0 bottom-0 opacity-55"></div>

      {/* top gradient layer */}
      <div className="absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-[#000000de] to-transparent"></div>

      {/* bottom gradient layer */}
      <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-[#0000005b] to-transparent"></div>

      <div className="flex flex-col justify-center items-start px-3 md:px-10 z-9 relative h-full backdrop-blur-[2px]">
        <h1 className="max-w-[90%] text-5xl md:text-7xl font-bold bg-white p-2 shadow-md italic">
          Fitness Redefined
          <br />
        </h1>
        <h1 className="max-w-[90%] text-5xl md:text-7xl font-bold bg-white mt-1.5 p-2 shadow-md italic">
          at MS Fitness
          <br />
        </h1>

        <a href="#contactus">
          <button className="text-lg bg-[#32CD32] p-2 rounded uppercase font-bold mt-2 shadow-sm">
            Join now
          </button>
        </a>
      </div>

      {/* <div className="text-white text-5xl absolute bottom-2 w-full left-[50%]">
        <IoIosArrowDown className="" />
      </div> */}
    </section>
  );
}

export default Hero;
