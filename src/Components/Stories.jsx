import React from "react";

// Images import
import fitnessExp from "../assets/madan.webp";
import transformations from "../assets/transformations.webp";

const storyDetails = [
  {
    storyName: "inspiring transformations",
    storyImg: transformations,
    storyInfo:
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
    storyName: "meet our champion trainer",
    storyImg: fitnessExp,
    storyInfo:
      "Our expert trainer is not just any coach; he's a celebrated champion in the bodybuilding community. With numerous accolades to his name, he brings a wealth of experience and a proven track record of success. His dedication to fitness and unparalleled guidance will inspire you to achieve your fitness goals.",
    otherInfoArray: [
      "Mr. Bangalore BB 2023 Gold",
      "Mr. Mahadevapura BB 2023 Gold",
      "Mr. Bangalore Men’s Physique 2023 Silver",
      "All India Open Bodybuilding Silver",
    ],
  },
];

function Stories() {
  return (
    <section className="text-white pt-28 px-6 px-2 relative" id="stories">
      {/* top-gradient */}
      <div className="absolute top-0 left-0 right-0 h-[16%] bg-gradient-to-b from-[#000000d8] to-transparent z-20"></div>

      {storyDetails.map((story) => {
        const { storyName, storyImg, storyInfo, otherInfoArray } = story;

        return (
          <div
            key={storyName}
            className="section-center flex flex-col-reverse md:flex-row justify-between items-start gap-4 mb- md:even:flex-row-reverse"
          >
            <div className="w-full md:max-w-[50%]">
              <h2 className="text-3xl md:text-4xl mb-2 capitalize ">
                {storyName}
              </h2>
              <p className="text-sm md:text-md mb-4 max-w-[95%]">{storyInfo}</p>

              {/* other info */}
              {/* <div className="flex flex-wrap gap-2 md:gap-4  md:max-w-[90%] text-sm md:text-md">
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
              </div> */}
            </div>

            {/* image container */}
            <div className="block max-w-[580px]">
              <img
                src={storyImg}
                loading="lazy"
                alt="not found"
                className="w-full h-full"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Stories;
