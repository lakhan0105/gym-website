import React from "react";
import { NavLink } from "react-router-dom";

function DashboardBtn() {
  return (
    <button className="mr-5 text-base text-white px-3 py-0.5 rounded bg-[#2A2A2A] shadow">
      <NavLink to={"/dashboard"}>Dashboard</NavLink>
    </button>
  );
}

export default DashboardBtn;
