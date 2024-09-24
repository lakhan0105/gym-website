import React from "react";

import gymBgImg from "../assets/fitness-exp3.webp";

// import icons
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

const contactData = [
  { id: "0", icon: <FaPhone />, data: "08123425611" },
  { id: "1", icon: <FaLocationDot />, data: "mahadevapura, bengaluru - 48" },
  {
    id: "2",
    icon: <FaClock />,
    data: "5:30am - 10:30pm",
    extraData: "Open 7 days of the week",
  },
];

const plansData = [
  {
    id: "0",
    planPrice: 6500,
    planFeatures: [
      { id: "0", text: "unlimited access to gym" },
      { id: "1", text: "trainers" },
      { id: 2, text: "nutrition" },
    ],
  },
];

function PlansSection() {
  return (
    <section className="section-center min-h-[calc(80vh-70px)] flex items-center">
      <div className="flex justify-center items-center gap-10">
        {/* left */}
        <div className="w-[60%] h-[500px] relative">
          <div className="w-full h-full relative">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={gymBgImg}
              alt=""
            />
          </div>
        </div>

        {/* right */}
        <div className="w-[30%] text-white mt-0 font-sans">
          {/* plan cards */}
          {plansData?.map((planData) => {
            const { id, planPrice, planFeatures } = planData;
            return (
              <div
                key={id}
                className="p-5 rounded-lg ring-1 ring-white/30 bg-[#2a2a2a]/60 backdrop-blur-md mb-12"
              >
                <h3 className="text-4xl font-bold">₹{planPrice}/year</h3>
                <div className="h-[0.5px] my-3 ring- w-full bg-gray-100/40"></div>
                <ul className="">
                  {planFeatures?.map((item) => {
                    const { id, text } = item;
                    return (
                      <li key={id} className="list-disc ml-6">
                        {text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          {/* contact info */}
          <div className="text-slate-300">
            {contactData?.map((item) => {
              const { id, icon, data, extraData } = item;

              return (
                <div key={id} className="mt-4 capitalize">
                  <div key={id} className="flex gap-2">
                    <span className="mt-1 text-xl">{icon}</span>
                    <p className="text-lg">{data}</p>
                  </div>
                  <span className="block ml-7 italic text-base">
                    {extraData}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlansSection;
