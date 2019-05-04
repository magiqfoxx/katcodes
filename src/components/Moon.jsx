import React, { Component } from "react";

import MusicPlayer from "./MusicPlayer";
import Navigation from "./Navigation";
import NavUp from "./NavUp";
import AboutMe from "./AboutMe";
import Portfolio from "./PortfolioCarousel";
import Technologies from "./Technologies";
import Contact from "./Contact";

//mousememoires for the other theme

//add svgs for logos where possible. esp codepen
//add zoom out animation for portfolioitem img
//on hover show a list of apps
class Moon extends Component {
  changeTheme() {
    this.props.themeChange("a11y");
  }
  render() {
    return (
      <div id="moon">
        <section className="moon section--main" id="section--main">
          <button onClick={() => this.changeTheme()} className="change-theme">
            A11y
          </button>
          <MusicPlayer />
          <Navigation />
          <NavUp />
          <h1 className="moon">Katcodes</h1>
          <figcaption />
        </section>
        <section id="section--about-me">
          <AboutMe />
          <Portfolio />
        </section>
        <Technologies />
        <section className="moon section--contact" id="section--contact">
          <h2>See more</h2>
          <Contact />
        </section>
      </div>
    );
  }
}

export default Moon;
