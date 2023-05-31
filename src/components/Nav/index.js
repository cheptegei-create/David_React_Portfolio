import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
      <ul className="flex-row">
        <li className="mx-1">
          <Link to="/aboutMe">About Me</Link>
        </li>
        <li className="mx-1">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="mx-1">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="mx-1">
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    );
}

export default Nav;
