import React, { useEffect, useState } from "react";

// import Navlinks from "./Navlinks";
// import Sociallinks from "./Sociallinks";
import Logo from "./Logo";

import { Navlinks, Sociallinks } from "../index";

import { FaBars } from "react-icons/fa6";

function Navbar({ toggleSidebar }) {
  const [scrollDownColor, setScrollDownColor] = useState(null);

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
      <Sociallinks extraClass={"hidden md:block md:flex"} />

      {/* hamburger */}
      <button className="md:hidden text-2xl" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* admin login btn */}
    </div>
  );
}

export default Navbar;
