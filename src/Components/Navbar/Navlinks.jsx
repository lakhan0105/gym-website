import React from "react";

const navLinks = [
  { linkName: "stories", link: "#stories" },
  { linkName: "programs", link: "#programs" },
  { linkName: "plans", link: "#plans" },
  { linkName: "location", link: "#location" },
];

function Navlinks({ extraClass, toggleSidebar }) {
  return (
    <ul className={`flex gap-8 capitalize ${extraClass}`}>
      {navLinks.map((item) => {
        const { linkName, link } = item;
        return (
          <li onClick={toggleSidebar} key={linkName}>
            <a href={link} className="text-xl ">
              {linkName}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Navlinks;
