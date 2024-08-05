import React from "react";
import logo from "../assets/ms-fitness-logo.jpg";

function Logo() {
  return (
    <a href="#" className="inline-block w-[50px] rounded-[50%] overflow-hidden">
      <img src={logo} className="w-full h-full" alt="not found" />
    </a>
  );
}

export default Logo;
