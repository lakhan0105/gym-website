import React from "react";

// Images import
import fitnessExp from "../assets/madan.webp";
import transformations from "../assets/transformations.png";

const servicesDetails = [
  {
    serviceName: "inspiring transformations",
    serviceImg: transformations,
    serviceInfo:
      "Our guidance, state-of-the-art equipment, and personalized training plans have helped numerous individuals transform their lives. Whether it's weight loss, muscle gain, or overall fitness, our success stories are a testament to the effectiveness of our approach.",
    otherInfoArray: [
      "personal training",
      "fat loss",
      "bodybuilding coaching",
      "flexibility training",
      "Mobility training",
    ],
  },
  {
    serviceName: "meet our champion trainer",
    serviceImg: fitnessExp,
    serviceInfo:
      "Our expert trainer is not just any coach; he's a celebrated champion in the bodybuilding community. With numerous accolades to his name, he brings a wealth of experience and a proven track record of success. His dedication to fitness and unparalleled guidance will inspire you to achieve your fitness goals.",
    otherInfoArray: [
      "Mr. Bangalore BB 2023 Gold",
      "Mr. Mahadevapura BB 2023 Gold",
      "Mr. Bangalore Men’s Physique 2023 Silver",
      "All India Open Bodybuilding Silver",
    ],
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
            className="flex justify-between items-start gap-4 mb-24 even:flex-row-reverse"
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
            <div className="block max-w-[580px]">
              <img src={serviceImg} alt="not found" className="w-full h-full" />
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Services;
