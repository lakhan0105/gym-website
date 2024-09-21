import React from "react";
import Testimonials from "./Testimonials";

function ReviewsSection() {
  return (
    <section
      className="px-[0.150rem] pt-20 mb-16 text-white w-full overflow-hidde"
      id="reviews"
    >
      <h1 className="text-[2rem] md:text-4xl text-center mb-4">
        Hear from our members
      </h1>

      <div className="flex carousel-track justify-center">
        <Testimonials />
      </div>
    </section>
  );
}

export default ReviewsSection;
