import React from "react";

import Navlinks from "./Navlinks";
import Sociallinks from "./Sociallinks";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="section-center fixed top-0 text-white text-xl z-10 h-[60px] px-3 flex items-center justify-between bg-black">
      <Logo />
      <Navlinks extraClass={"hidden md:block md:flex"} />
      <Sociallinks extraClass={"hidden md:block md:flex"} />
      
      <button className="md:hidden">button</button>
    </div>
  );
}

export default Navbar;
