"use strict";

import React from "react";

const Navbar = (props) => (
  <nav className="navbar navbar-light bg-info">
    <span className="navbar-brand h1">Clicky Game</span>
    <span className="text-center h3">{props.message}</span>
    <span className="navbar-text">
      Your Current Score: <span>{props.correct}</span>&nbsp;
      Your Best Score: <span>{props.topscore}</span>
    </span>
  </nav>
)
export default Navbar;