import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const socialLinks = [
  { icon: <FaWhatsapp />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <MdMailOutline />, link: "#" },
];

function Sociallinks({ extraClass, toggleSidebar }) {
  return (
    <ul className={`flex gap-5 ${extraClass}`}>
      {socialLinks.map((item) => {
        const { icon, link } = item;
        return (
          <li onClick={toggleSidebar}>
            <a href={link}>{icon}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Sociallinks;
