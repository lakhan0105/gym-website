import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const socialLinks = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/msfitnessbengaluru?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  // { icon: <MdMailOutline />, link: "#" },
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
