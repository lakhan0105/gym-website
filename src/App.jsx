import React from "react";
import {
  Hero,
  Navbar,
  ReviewsSection,
  Services,
  Testimonials,
} from "./Components";

function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero />
        <Services />
        <ReviewsSection />
      </div>
    </>
  );
}

export default App;
