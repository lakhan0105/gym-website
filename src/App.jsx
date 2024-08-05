import React from "react";
import {
  ContactSection,
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
        <ContactSection />
      </div>
    </>
  );
}

export default App;
