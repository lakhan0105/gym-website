import React from "react";
import logo from "../../assets/ms-fitness-logo.jpg";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink
      to={"/"}
      className="inline-block w-[50px] rounded-[50%] overflow-hidden"
    >
      <img src={logo} className="w-full h-full" alt="not found" />
    </NavLink>
  );
}

export default Logo;
