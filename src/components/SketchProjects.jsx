import React, { useState } from "react";

const SketchProjects = () => {
  const [project, changeProject] = useState(0);

  const handleChangeProject = proj => {
    if (proj === "previous") {
      return;
    } else if (proj === "next") {
      return;
    }
  };
  const renderPrevProjects = () => {
    return <div className="sketch--projects" id="previous-project-1" />;
  };
  return (
    <div id="sketch--projects">
      <div id="sketch--current-project">{renderPrevProjects()}</div>
      <div id="sketch--projects--nav">
        <img
          id="arrow-back"
          className="sketch--arrow"
          src="../img/sketch/right-arrow-sketch.png"
          alt="arrow-back"
          onClick={() => handleChangeProject("previous")}
        />
        <img
          id="arrow-forward"
          className="sketch--arrow"
          src="../img/sketch/left-arrow-sketch.png"
          alt="arrow-forward"
          onClick={() => handleChangeProject("next")}
        />
      </div>
    </div>
  );
};

export default SketchProjects;
