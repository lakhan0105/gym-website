import React from "react";
import Logo from "./Logo";
import { FaXmark } from "react-icons/fa6";
import Navlinks from "./Navlinks";
import Sociallinks from "./Sociallinks";

function Sidebar({ toggleSidebar, isSidebarOpen }) {
  return (
    <div
      className={`fixed top-0 h-screen left-0 right-0 bg-white z-10 flex flex-col text-xl md:hidden ${
        isSidebarOpen ? "flex" : "hidden"
      }`}
    >
      {/* Sidebar nav */}
      <nav className="h-[60px] flex justify-between items-center px-2 ">
        <Logo />

        {/* close button */}
        <button className="text-2xl" onClick={toggleSidebar}>
          <FaXmark />
        </button>
      </nav>

      <Navlinks
        extraClass={"flex flex-col items-center leading-10 mb-auto mt-16"}
        toggleSidebar={toggleSidebar}
      />

      <Sociallinks
        extraClass={"justify-center pb-5"}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
}

export default Sidebar;
