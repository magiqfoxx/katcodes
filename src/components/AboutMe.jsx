import React, { Component } from "react";

import Portfolio from "./Portfolio";

class AboutMe extends Component {

  render() {
    return (
      <section className="moon section--about-me" id="section--about-me">
        <div className="about-me--text">
          <h2>Hi, I'm Kat</h2>
          <p>
            I've been interested in web development since elementary school.
            Luckily for me, my website from back then is no longer available
            online. <br />
            But these ones are
          </p>
        </div>
        <Portfolio />
      </section>
    );
  }
}

export default AboutMe;
