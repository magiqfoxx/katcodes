import React from "react";

import NamePage from "./NamePage";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const A11y = () => {
  return (
    <div id="a11y">
      <NamePage />
      <section className="section--main" id="section--main">
        <Navigation />
        <h1 className="moon">Katcodes</h1>
        <figcaption />
      </section>
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default A11y;
