import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { LogoutBtn, Navlinks, Sociallinks } from "../index";

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
      <Navlinks extraClass={"hidden md:block md:flex"} />

      {/* hamburger */}
      <button className="md:hidden text-2xl" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <div className="flex items-center gap-5">
        <Sociallinks extraClass={"hidden md:block md:flex"} />

        {/* login link (show oly if user is not loggedin) */}
        {!currUser && (
          <NavLink
            to={"/login"}
            className={"bg-orange-800 rounded text-base px-2 py-0.5"}
          >
            admin login
          </NavLink>
        )}
        <LogoutBtn />
      </div>
    </div>
  );
}

export default Navbar;
