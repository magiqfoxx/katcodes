import React from "react";

import NamePage from "./NamePage";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import PortfolioList from "./PortfolioList";
import Contact from "./Contact";
import CurrentlyWorkingOn from "./CurrentlyWorkingOn";
import Technologies from "./Technologies";
import Footer from "../Footer";

const A11y = props => {
  function changeTheme() {
    props.themeChange("moon");
  }
  return (
    <div id="a11y">
      <button onClick={() => changeTheme()} className="change-theme">
        Moon
      </button>
      <Contact />
      <NamePage />
      <section className="section--main" id="section--main">
        <Navigation />
        <main>
          <img
            src="../img/a11y/marissa-rodriguez-539695-unsplash.jpg"
            alt="fairy lights with blobs of light, green and white mixing in the background"
          />
          <AboutMe />
        </main>
      </section>
      <PortfolioList />
      <CurrentlyWorkingOn />
      <Technologies />
      <Footer />
    </div>
  );
};

export default A11y;
