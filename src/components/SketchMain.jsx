import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SketchProjects from "./SketchProjects";

const SketchMain = () => {
  return (
    <React.Fragment>
      <section id="section--main__sketch">
        <div id="sketch--background">
          <img src="../img/sketch/doodle.png" alt="" />
        </div>

        <div id="sketch--main">
          <div id="sketch--main--motto">
            <h2>Let's have coffee</h2>
            <img
              src="../img/sketch/hot-tea-cup-hand-drawn-outline.png"
              alt=""
            />
          </div>
          <SketchProjects />
        </div>
      </section>
    </React.Fragment>
  );
};

export default SketchMain;
