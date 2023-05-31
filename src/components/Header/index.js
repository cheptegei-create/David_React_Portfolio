import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from '../components/Nav';

function Head() {
<header className="flex-row px-1">
      <h1>
        <Link to="/">
        <FontAwesomeIcon icon="fa-solid fa-bug-slash" />
          Cheptegei David
        </Link>
      </h1>

      <nav>{Nav()}</nav>
    </header>

}

export default Head;