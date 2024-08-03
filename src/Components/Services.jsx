import React from "react";

// Images import
// const advancedEqp =
import advancedEqp from "../assets/advance-eqp.jpeg";
import fitnessExp from "../assets/fitness-exp.jpeg";

const servicesDetails = [
  {
    serviceName: "ultimate fitness guidance",
    serviceImg: fitnessExp,
    serviceInfo:
      "Our expert trainer, a champion bodybuilder, provides unparalleled guidance to help you achieve your fitness goals. Whether you're a beginner or a seasoned athlete, our comprehensive approach guarantees an unmatched fitness journey that will transform your life. Join us and experience the pinnacle of fitness excellence.",
    otherInfoArray: [
      "personal training",
      "bodybuilding coaching",
      "flexibility training",
      "Mobility training",
    ],
  },
  {
    serviceName: "advanced equipments",
    serviceImg: advancedEqp,
    serviceInfo:
      "We have invested in the newest technology to offer a superior workout experience, including intelligent cardio machines, multi-functional weight stations, and specialized equipment for targeted training. Our equipment is user-friendly and designed to accommodate all fitness levels, ensuring that you can workout safely and effectively.",
    otherInfoArray: ["clean", "professional", "safe", "Modern machines"],
  },
];

function Services() {
  return (
    <section className="text-white section-center pt-20" id="services">
      {/* map through the servicesDetails array */}
      {servicesDetails.map((service) => {
        const { serviceName, serviceImg, serviceInfo, otherInfoArray } =
          service;

        return (
          <div
            key={serviceName}
            className="flex justify-between gap-4 mb-24 even:flex-row-reverse"
          >
            <div className="max-w-[50%]">
              <h2 className="text-4xl mb-2 capitalize ">{serviceName}</h2>
              <p className="mb-4">{serviceInfo}</p>

              {/* other info */}
              <div className="flex flex-wrap gap-4  max-w-[90%]">
                {otherInfoArray.map((item) => {
                  return (
                    <p
                      key={item}
                      className="inline-block capitalize border border-[#68ec68] text-sm py-1 px-2 rounded"
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* image container */}
            <div className="block max-w-[600px]">
              <img src={serviceImg} alt="not found" className="w-full h-full" />
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Services;
