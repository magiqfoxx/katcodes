import React, { Component } from "react";

import MusicPlayer from "./MusicPlayer";
import Navigation from "./Navigation";
import NavUp from "./NavUp";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

//mousememoires for the other theme

//add svgs for logos where possible. esp codepen
//add zoom out animation for portfolioitem img
//things i like: on hover show a list? of apps with it
class Moon extends Component {
  state = { currentSite: 0 };
  handleThemeChange = newTheme => {
    this.props.handleThemeChange(newTheme);
  };

  render() {
    return (
      <div id="moon">
        <section className="moon section--main" id="section--main">
          <MusicPlayer />
          <Navigation />
          <NavUp />
          <h1 className="moon">Katcodes</h1>
          <figcaption />
        </section>
        <AboutMe />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default Moon;
