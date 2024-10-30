import React from "react";

function SingleCard({ title, img, currIndex, index, isMobileView }) {
  const sliderStyles = {
    transform: `translateX(${100 * (index - currIndex)}%)`,
    position: "absolute",
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    backgroundColor: `#000`,
  };

  // const nothing = {};

  // const another = isMobileView ? sliderStyles : nothing;

  return (
    <article
      style={isMobileView ? sliderStyles : null}
      className="md:w-[300px] md:h-[350px] bg-no-repeat rounded-xl overflow-hidde text-white overflow-hidden md:relative"
    >
      <img
        src={img}
        alt="not found"
        className="w-full h-full object-contain md:object-cover"
      />

      {/* bottom-gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black to-transparent"></div>

      {/* article title */}
      <h2 className="absolute bottom-3 w-full text-center text-4xl text-slate-300 text-[28px] md:text-2xl capitalize font-semibold tracking-wide">
        {title}
      </h2>
    </article>
  );
}

export default SingleCard;
