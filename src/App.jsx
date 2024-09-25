import React, { useState } from "react";
import {
  Hero,
  Navbar,
  Stories,
  Sidebar,
  PlansSection,
  LocationSection,
} from "./Components/index";
import ProgramsSection from "./Components/ProgramsSection";

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
        <Stories />
        <ProgramsSection />
        <PlansSection />
        <LocationSection />
        <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </div>
    </>
  );
}

export default App;
