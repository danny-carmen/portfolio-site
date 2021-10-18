import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerIcon from "./hamburger-icon";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const handleHamburgerClick = () => {
    console.log("Clicked the thing!");
    if (navBarOpen) {
      setNavBarOpen(false);
    } else {
      setNavBarOpen(true);
    }
  };

  return (
    <div className="nav-bar-wrapper">
      <HamburgerIcon
        handleHamburgerClick={() => {
          handleHamburgerClick();
        }}
        navBarOpen={navBarOpen}
      />
      <div className={navBarOpen ? "nav-bar" : "nav-bar nav-bar--closed"}>
        <NavLink
          className="nav-bar--link"
          activeClassName="nav-bar--link-selected"
          exact
          to="/"
          onClick={() => setNavBarOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          className="nav-bar--link"
          activeClassName="nav-bar--link-selected"
          to="/projects"
          onClick={() => setNavBarOpen(false)}
        >
          Projects
        </NavLink>
        <NavLink
          className="nav-bar--link"
          activeClassName="nav-bar--link-selected"
          to="/blog"
          onClick={() => setNavBarOpen(false)}
        >
          Blog
        </NavLink>
        <NavLink
          className="nav-bar--link"
          activeClassName="nav-bar--link-selected"
          to="/contact"
          onClick={() => setNavBarOpen(false)}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
