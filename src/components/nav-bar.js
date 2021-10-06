import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="nav-bar-wrapper">
        <div className="nav-bar">
          <NavLink
            className="nav-bar--link"
            activeClassName="nav-bar--link-selected"
            exact
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="nav-bar--link"
            activeClassName="nav-bar--link-selected"
            to="/projects"
          >
            Projects
          </NavLink>

          <NavLink
            className="nav-bar--link"
            activeClassName="nav-bar--link-selected"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default NavBar;
