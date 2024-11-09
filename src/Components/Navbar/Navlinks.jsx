import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const navLinks = [
  { linkName: "stories", link: "#stories" },
  { linkName: "programs", link: "#programs" },
  { linkName: "plans", link: "#plans" },
  { linkName: "location", link: "#location" },
];

function Navlinks({ extraClass, toggleSidebar }) {
  const [showNavLinks, setShowNavLinks] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // check the path of the page, if it is other than "/" then setShowLinks(false)
    if (location.pathname !== "/") {
      setShowNavLinks(false);
    }
  }, [location]);

  // if the showNavLink is true, oly then show the navlinks
  if (showNavLinks) {
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
}

export default Navlinks;
