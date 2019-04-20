import React, { useState } from "react";
import { timeout } from "q";
import { setTimeout } from "timers";

const SketchProjects = () => {
  const projects = ["avclub", "citybreak", "doggopedia", "games", "walk"];
  const [project, changeProject] = useState(3);

  const handleChangeProject = proj => {
    if (proj === "previous") {
      return;
    } else if (proj === "next") {
      document
        .getElementById("sketch--current-project")
        .classList.add("disappear");
      setTimeout(() => {
        Array.from(
          document.getElementsByClassName("sketch--previous-projects")
        ).forEach(el => el.classList.add("appear"));
      }, 1000);
      setTimeout(() => {
        document
          .getElementById("sketch--current-project")
          .classList.remove("disappear");
        Array.from(
          document.getElementsByClassName("sketch--previous-projects")
        ).forEach(el => el.classList.remove("appear"));
      }, 2000);
      return;
    }
  };
  const renderPrevProjects = () => {
    const projNow = projects.slice(0, project);
    return projNow.map(proj => {
      return (
        <div
          className="sketch--previous-projects"
          id={`previous-project-${projects.indexOf(proj)}`}
          key={proj}
        />
      );
    });
  };
  return (
    <main id="sketch--main--projects">
      <div id="sketch--projects-blueprint">
        <div id="sketch--current-project" />
        {renderPrevProjects()}
      </div>
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
    </main>
  );
};

export default SketchProjects;
