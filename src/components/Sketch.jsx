import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SketchNav from "./SketchNav";
import SketchMain from "./SketchMain";
import SketchAbout from "./SketchAbout";

const Sketch = () => {
  return (
    <React.Fragment>
      <SketchNav />
      <Router>
        <Route exact path="/sketch/" component={SketchMain} />
        <Route path="/sketch/about" component={SketchAbout} />
      </Router>
    </React.Fragment>
  );
};

export default Sketch;