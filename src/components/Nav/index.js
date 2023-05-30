import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
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

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
        <FontAwesomeIcon icon="fa-solid fa-bug-slash" />
          Cheptegei David
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
