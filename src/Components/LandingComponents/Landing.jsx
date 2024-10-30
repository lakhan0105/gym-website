import React, { useState } from "react";
import {
  Navbar,
  Hero,
  Stories,
  ProgramsSection,
  PlansSection,
  LocationSection,
  Sidebar,
} from "../index";

function Landing() {
  // state to control sidebar
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  // function to toggle the sidebar
  function toggleSidebar() {
    setisSidebarOpen((prev) => !prev);
    document.body.style.overflow = `${isSidebarOpen ? "auto" : "hidden"}`;
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Hero />
      <Stories />
      <ProgramsSection />
      <PlansSection />
      <LocationSection />
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
    </>
  );
}

export default Landing;
