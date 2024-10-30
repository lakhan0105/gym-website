import React from "react";
import { FaInstagram } from "react-icons/fa6";

const socialLinks = [
  {
    id: 1,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/msfitnessbengaluru?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
];

function Sociallinks({ extraClass, toggleSidebar }) {
  return (
    <ul className={`flex gap-5 ${extraClass}`}>
      {socialLinks.map((item) => {
        const { id, icon, link } = item;
        return (
          <li onClick={toggleSidebar} key={id}>
            <a href={link}>{icon}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Sociallinks;
