import React from "react";
import { FaBowlFood } from "react-icons/fa6";
import { IoIosFitness } from "react-icons/io";
import { PiHeartbeatFill } from "react-icons/pi";

const additionalPgmsData = [
  { icon: <FaBowlFood />, title: "nutrition" },
  { icon: <IoIosFitness />, title: "home training" },
  { icon: <PiHeartbeatFill />, title: "cardio" },
];

function AdditionalPgms() {
  return (
    <div className="text-white flex justify-center items-center gap-7 md:gap-20 md:gap-20">
      {additionalPgmsData.map((item) => {
        const { icon, title } = item;

        return (
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-1">{icon}</span>
            <p className="text-base text-slate-300 uppercase font-semibold text-center">
              {title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default AdditionalPgms;
