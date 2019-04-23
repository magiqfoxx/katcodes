import React, { useState } from "react";

const SketchProjects = () => {
  const projects = ["avclub", "citybreak", "doggopedia", "games", "walk"];
  const [project, changeProject] = useState(0);

  const handleChangeProject = proj => {
    if (proj === "next" && project < 4) {
      document
        .getElementById("sketch--next-project")
        .classList.add("next-appear");
      setTimeout(() => {
        document
          .getElementById("sketch--current-project")
          .classList.add("next-disappear");
        Array.from(
          document.getElementsByClassName("sketch--previous-projects")
        ).forEach(el => el.classList.add("next-disappear"));
      }, 1000);
      setTimeout(() => {
        document
          .getElementById("sketch--next-project")
          .classList.remove("next-appear");
        document
          .getElementById("sketch--current-project")
          .classList.remove("next-disappear");
        Array.from(
          document.getElementsByClassName("sketch--previous-projects")
        ).forEach(el => el.classList.remove("next-disappear"));
        changeProject(project + 1);
      }, 2000);
      return;
    } else if (proj === "previous" && project > 0) {
      document
        .getElementById("sketch--current-project")
        .classList.add("previous-disappear");
      setTimeout(() => {
        Array.from(
          document.getElementsByClassName("sketch--previous-projects")
        ).forEach(el => el.classList.add("previous-appear"));
      }, 1000);
      setTimeout(() => {
        document
          .getElementById("sketch--current-project")
          .classList.remove("previous-disappear");
        Array.from(
          document.getElementsByClassName("sketch--previous-projects")
        ).forEach(el => el.classList.remove("previous-appear"));
        changeProject(project - 1);
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
        <div id="sketch--next-project" />
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
