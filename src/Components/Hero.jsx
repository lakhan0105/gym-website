import React from "react";
import heroImg from "../assets/hero.webp";
import bgVideo from "../assets/ms-fitness-bg-video.mp4";
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  console.log(heroImg);
  return (
    <section
      className={`relative bg-no-repeat bg-center h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]`}
    >
      {/* overlay layer */}
      <div className="bg-black absolute left-0 right-0 top-0 bottom-0 opacity-25 z-20"></div>

      {/* top gradient layer */}
      <div className="fixed top-0 left-0 right-0 h-[12%] bg-gradient-to-b from-[#000000de] to-transparent z-20"></div>

      {/* bottom gradient layer */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#000000d8] to-transparent z-20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[18%] bg-gradient-to-t from-[#000000d8] to-transparent z-20 opacity-80"></div>

      {/* video container */}
      <div className="absolute right-0 bottom-0 h-full w-full z-10 ">
        <video
          src={bgVideo}
          muted
          autoPlay
          loop
          style={{ objectFit: "cover" }}
          className="h-full w-full"
        ></video>
      </div>

      {/* hero text */}
      <div className="absolute flex flex-col items-center justify-center left-[50%] w-[95%] bottom-36 md:bottom-28 translate-x-[-50%] z-40 text-white text-center">
        <h2 className="uppercase text-7xl font-bold flex items-center gap-3 italic">
          push your limits
        </h2>

        <h3 className="text-2xl font-bold flex items-center gap-2 mt-2 mb-3 italic">
          <span className="inline-block w-[50px] md:w-[100px] h-[1px] bg-white text-white "></span>
          at msfitness
          <span className="inline-block w-[50px] md:w-[100px] h-[1px] bg-white text-white "></span>
        </h3>
        <div className="flex gap-4 text-lg max-w-[70%] md:max-w-[50%] text-center">
          Experience personalized training with modern equipments, and achieve
          your fitness goals.
        </div>
      </div>

      <div className="absolute bottom-[5%] left-[40%] md:left-[47%] z-30 cursor-pointer text-xl">
        <button className="relative px-3 py-1 text-lg mt-8 bg-[#D32F2F] text-white hover:bg-[#B71C1C] uppercase font-semibold rounded">
          Join now
        </button>

        {/* arrow is relative to the join button (above) */}
        <span className="absolute bottom-[-70%] left-[50%] translate-x-[-50%] text-center text-white">
          <a href="#services">
            <FaArrowDown />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
