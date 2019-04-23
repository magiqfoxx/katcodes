import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const SketchNav = () => {
  return (
    <nav id="sketch--nav">
      <ul>
        <li>
          <Link to="/sketch/">
            <img
              src="/img/sketch/portfolio-sketched-outline.png"
              alt="Portfolio"
              title="Portfolio"
            />
          </Link>
        </li>
        <li>
          <Link to="/sketch/about/">
            <img
              src="/img/sketch/file-sketch-with-text-lines.png"
              alt="About"
              title="About"
            />
          </Link>
        </li>
        <li>
          <img
            src="/img/sketch/email-new-envelope-closed-back-hand-drawn-outline.png"
            alt="Email"
          />
        </li>
        <li>
          <img
            src="/img/sketch/configuration-gear-sketch.png"
            alt="Change theme"
          />
        </li>
      </ul>
    </nav>
  );
};

export default SketchNav;
