import React, { Component } from "react";

import Navigation from "./Navigation";
import NavUp from "./NavUp";
import AboutMe from "./AboutMe";
import Portfolio from "./PortfolioCarousel";
import Technologies from "./Technologies";
import Contact from "./Contact";
import Footer from "../Footer";

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
        <Footer />
      </div>
    );
  }
}

export default Moon;
