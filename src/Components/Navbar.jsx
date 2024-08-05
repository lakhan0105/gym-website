import React from "react";

import Navlinks from "./Navlinks";
import Sociallinks from "./Sociallinks";
import Logo from "./Logo";

import { FaBars } from "react-icons/fa6";

function Navbar({ toggleSidebar }) {
  return (
    <div className="w-full fixed top-0 text-white text-xl z-10 h-[60px] px-3 flex items-center justify-between bg-black">
      <Logo />
      <Navlinks extraClass={"hidden md:block md:flex"} />
      <Sociallinks extraClass={"hidden md:block md:flex"} />

      {/* hamburger */}
      <button className="md:hidden text-2xl" onClick={toggleSidebar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;
