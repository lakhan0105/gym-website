import React from "react";
import Testimonials from "./Testimonials";

function ReviewsSection() {
  return (
    <div
      className="section-center text-white w-full overflow-hidden"
      id="reviews"
    >
      <h1 className="text-4xl text-center mb-4">Hear from our members</h1>

      <div className="flex carousel-track justify-center">
        <Testimonials />
      </div>
    </div>
  );
}

export default ReviewsSection;
