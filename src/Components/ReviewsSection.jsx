import React from "react";
import Testimonials from "./Testimonials";

function ReviewsSection() {
  return (
    <div
      className="px-[0.150rem] mb-16 text-white w-full overflow-hidden"
      id="reviews"
    >
      <h1 className="text-[2rem] md:text-4xl text-center mb-4">
        Hear from our members
      </h1>

      <div className="flex carousel-track justify-center">
        <Testimonials />
      </div>
    </div>
  );
}

export default ReviewsSection;
