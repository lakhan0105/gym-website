import React from "react";
import Logo from "./Logo";
import { FaXmark } from "react-icons/fa6";
import Navlinks from "./Navlinks";
import Sociallinks from "./Sociallinks";
import { useMyContext } from "../Context/ContextProvider";
import DashboardBtn from "./DashboardBtn";
import LogoutBtn from "../Auth/LogoutBtn";

function Sidebar({ toggleSidebar, isSidebarOpen }) {
  const { currUser } = useMyContext();

  return (
    <div
      className={`fixed top-0 h-screen left-0 right-0 bg-white z-50 flex flex-col text-xl md:hidden ${
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

      {/* BUTTONS CONTAINER (admin buttons)  */}
      {currUser && (
        <div className="text-center md:hidden pb-5">
          <DashboardBtn />
          <LogoutBtn />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
