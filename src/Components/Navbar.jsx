import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

function Navbar() {
  return (
    <div className="fixed top-0 bg- text-white text-xl z-10 w-full h-[60px] px-10 flex items-center justify-between bg-black">
      <h2>logo</h2>

      {/* nav links */}
      <ul className="flex gap-5">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>

      {/* social links */}
      <ul className="flex gap-5">
        <li>
          <a href="#">
            <FaWhatsapp />
          </a>
        </li>

        <li>
          <a href="#">
            <FaInstagram />
          </a>
        </li>

        <li>
          <a href="#">
            <MdMailOutline />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
