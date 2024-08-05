import React from "react";

const navLinks = [
  { linkName: "home", link: "#" },
  { linkName: "services", link: "#services" },
  { linkName: "reviews", link: "#reviews" },
  { linkName: "contact us", link: "#contactus" },
];

function Navlinks({ extraClass }) {
  return (
    <ul className={`flex gap-5 capitalize ${extraClass}`}>
      {navLinks.map((item) => {
        const { linkName, link } = item;
        return (
          <li>
            <a href={link}>{linkName}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Navlinks;
