import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { DashboardBtn, LogoutBtn, Navlinks, Sociallinks } from "../index";

import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useMyContext } from "../Context/ContextProvider";

function Navbar({ toggleSidebar }) {
  const [scrollDownColor, setScrollDownColor] = useState(null);
  const { currUser } = useMyContext();

  useEffect(() => {
    return document.addEventListener("scroll", () => {
      console.log("cleanup is running");
      if (window.scrollY > 100) {
        setScrollDownColor("black");
      } else {
        setScrollDownColor("transparent");
      }
    });
  }, []);

  return (
    <div
      className={`w-full fixed top-0 text-white text-xl z-50 h-[60px] px-3 flex items-center justify-between bg-${scrollDownColor}`}
    >
      <Logo />
      <Navlinks extraClass={"hidden md:block md:flex translate-x-[20%]"} />

      {/* hamburger */}
      <button
        className="absolute md:hidden text-2xl right-1"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      <div className="flex items-center gap-5">
        {/* login link (show oly if user is not loggedin) */}
        {!currUser && (
          <NavLink
            to={"/login"}
            className={
              "bg-orange-800 rounded text-base px-2 py-0.5 mr-5 md:mr-0"
            }
          >
            admin login
          </NavLink>
        )}

        {/* BUTTONS CONTAINER (admin buttons)  */}
        {currUser && (
          <div className="hidden md:flex">
            <DashboardBtn />
            <LogoutBtn />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
