import React, { useState } from "react";
import {
  ContactSection,
  Hero,
  Navbar,
  ReviewsSection,
  Services,
  Sidebar,
  Testimonials,
} from "./Components";

function App() {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  // function to toggle the sidebar
  function toggleSidebar() {
    setisSidebarOpen((prev) => !prev);
    document.body.style.overflow = `${isSidebarOpen ? "auto" : "hidden"}`;
  }

  return (
    <>
      <div className="relative">
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <Hero />
        <Services />
        <ReviewsSection />
        <ContactSection />
        <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </div>
    </>
  );
}

export default App;
