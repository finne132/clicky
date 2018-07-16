"use strict";

import React from "react";

// basic object to render everything inside of
// Center all content with bootstrap
const Main = (props) =>
      <div className="container text-center">
        {props.children}
      </div>

export default Main;