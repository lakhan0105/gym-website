import React from "react";
import heroImg from "../assets/hero.webp";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Hero() {
  console.log(heroImg);
  return (
    <section
      style={{ backgroundImage: `url(${heroImg})` }}
      className={`bg-no-repeat bg-center h-[calc(100vh-60px)] md:h-[calc(100vh-20px)] bg-cover relative`}
    >
      {/* overlay layer */}
      <div className="bg-black absolute left-0 right-0 top-0 bottom-0 opacity-55"></div>

      {/* top gradient layer */}
      <div className="absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-[#000000de] to-transparent"></div>

      {/* bottom gradient layer */}
      <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-[#000000cc] md:from-[#000000d8] to-transparent"></div>

      <div className="flex flex-col justify-center items-start px-2 md:px-10 z-9 relative h-full backdrop-blur-[2px]">
        <h1 className="max-w-[90%] leading-tight text-4xl md:text-7xl font-bold bg-white p-2 shadow-md italic">
          Get In And Get Fit
          <br />
        </h1>
        <h1 className="max-w-[90%] text-4xl md:text-7xl font-bold bg-white mt-1.5 p-2 shadow-md italic">
          at MS Fitness
          <br />
        </h1>

        {/* small info about the gym */}
        <p className="text-white md:text-md mt-2 max-w-[70%]">
          High-quality equipments, clean facilities, and expert guidance.
        </p>

        {/* contact number*/}
        <div className="text-white text-lg flex items-center gap-2 mt-2">
          <span className="inline-block">
            <FaPhoneAlt />
          </span>
          <p>08123425611</p>
        </div>

        <a href="#contactus">
          <button className="text-sm md:text-md bg-[#32CD32] p-2 rounded uppercase font-bold mt-2 shadow-sm">
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
