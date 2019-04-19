import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SketchMain from "./SketchMain";
import SketchAbout from "./SketchAbout";

const SketchNav = () => {
  return (
    <Router>
      <nav id="nav__sketch">
        <ul>
          <li>
            <Link to="/sketch/">
              <img
                src="../img/sketch/portfolio-sketched-outline.png"
                alt="Portfolio"
                title="Portfolio"
              />
            </Link>
          </li>
          <li>
            <Link to="/sketch/about/">
              <img
                src="../img/sketch/file-sketch-with-text-lines.png"
                alt="About"
                title="About"
              />
            </Link>
          </li>
          <li>
            <img
              src="../img/sketch/email-new-envelope-closed-back-hand-drawn-outline.png"
              alt="Email"
            />
          </li>
          <li>
            <img
              src="../img/sketch/configuration-gear-sketch.png"
              alt="Change theme"
            />
          </li>
        </ul>
      </nav>
      <Route exact path="/sketch/" component={SketchMain} />
      <Route path="/sketch/about" component={SketchAbout} />
    </Router>
  );
};

export default SketchNav;
