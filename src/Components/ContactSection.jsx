import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

import locationImg from "../assets/location.webp";

const contactInfo = [
  { icon: <FaPhone />, info: "08123425611" },
  {
    icon: <FaLocationDot />,
    info: "30/31, main road, opp. keb, above adishwar whitefield, Mahadevapura Layout, Garudachar Palya, Mahadevapura, Bengaluru, Karnataka 560048",
    moreInfo: "Near Phoenix Market City - Mahadevapura",
  },
  {
    icon: <FaClock />,
    info: "5:30am - 10pm",
    moreInfo: "Open 7 days of the week",
  },
];

function ContactSection() {
  return (
    <section
      className="section-center text-white md:pb-32 mb-32"
      id="contactus"
    >
      <h1 className="text-[2rem] md:text-4xl text-center mb-4 md:hidden">
        Get in touch with us
      </h1>

      <div className="w-[95%] md:w-[89%] m-auto md:flex justify-between md:gap-7 rounded-md overflow-hidden">
        {/* IMAGE */}
        <div className="md:w-[630px]">
          <a href="https://l.instagram.com/?u=https%3A%2F%2Fmaps.app.goo.gl%2FPKVy7xsZBczgvUsu7%3Fg_st%3Dic&e=AT1aKN-sQKasq-FgFgidP3qOqY9ZG44KOCjVtneMl4vGkBAmvnsZCjWCfX3a22vlibEsqbKxk96ifT10CbIwxAuK9E4tYxkZiu08mw">
            <img
              src={locationImg}
              loading="lazy"
              className="h-full"
              alt="image not found"
            />
          </a>
        </div>

        {/* CONTACT INFO */}
        <div className="w-full md:w-[40%] p-3 md:p-0 bg-[#ffffff] text-black md:bg-transparent md:text-white">
          <h1 className="text-3xl md:text-4xl mb-3 hidden md:block">
            Get in touch with us
          </h1>

          {contactInfo.map((item) => {
            const { icon, info, moreInfo } = item;
            return (
              <div className="flex gap-2 mb-4 text-sm md:text-md">
                <span className="inline-block py-1">{icon}</span>
                <div>
                  <p className="">{info}</p>
                  <span className="mt-1 italic text-slate-600 md:text-slate-300">
                    {moreInfo}
                  </span>
                </div>
              </div>
            );
          })}

          <a href="https://maps.app.goo.gl/XrYkPQmeajTUmihs9">
            <button className="ml-6 mt-3 border rounded p-1 px-2 text-sm bg-[#000000e1] text-white hover:bg-[#000] hover:shadow-md hover:md:bg-white hover:md:text-black">
              Open in maps
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
