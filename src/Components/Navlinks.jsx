import React from "react";

const navLinks = [
  { linkName: "home", link: "#" },
  { linkName: "services", link: "#services" },
  { linkName: "reviews", link: "#reviews" },
  { linkName: "contact us", link: "#contactus" },
];

function Navlinks({ extraClass, toggleSidebar }) {
  return (
    <ul className={`flex gap-8 capitalize ${extraClass}`}>
      {navLinks.map((item) => {
        const { linkName, link } = item;
        return (
          <li onClick={toggleSidebar}>
            <a href={link} className="text-xl ">{linkName}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Navlinks;
