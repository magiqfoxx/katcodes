import React from "react";

import MusicPlayer from "./MusicPlayer";
import Navigation from "./Navigation";
import ThemeNav from "./ThemeNav";
import PortfolioItem from "./PortfolioItem";
//mousememoires for the other theme
const Moon = props => {
  function handleThemeChange(newTheme) {
    props.handleThemeChange(newTheme);
  }
  return (
    <React.Fragment>
      <a name="section--main">
        <section className="moon section--main">
          <MusicPlayer />
          <Navigation />
          <ThemeNav changeTheme={handleThemeChange} />
          <h1 className="moon">Katcodes</h1>
          <figcaption />
        </section>
      </a>
      <a name="section--about-me">
        <section className="moon section--about-me">
          <div className="about-me--text">
            <h2>Hi, I'm Kat</h2>
            <p>
              I've been interested in web development since elementary school.
              Luckily for me, my website from back then is no longer available
              online. <br />
              But these ones are
            </p>
          </div>
          <PortfolioItem name="The Walk" src="../img/html/walkhtml.jpg" />
          <PortfolioItem
            name="The Cat Conundrum"
            src="../img/html/lilyhtml.jpg"
          />
          <PortfolioItem name="Games" src="../img/html/gameshtml.png" />
        </section>
      </a>
      <a name="section--portfolio">
        <section className="moon section--portfolio">
          <PortfolioItem
            name="Doggopedia"
            src="../img/html/doggopediahtml.png"
          />
          <PortfolioItem
            name="City Break"
            src="../img/html/city-breakhtml.png"
          />
          <h2>Things I'm exicited about</h2>
        </section>
      </a>
      <a name="section--contact">
        <section className="moon section--contact">
          <h2>See more</h2>
          <div className="contact--links">
            <a href="https://github.com/magiqfoxx">
              <img src="../img/github.png" alt="github" />
            </a>
            <a href="https://codepen.io/magiqfoxx/">
              <img src="../img/codepen.png" alt="codepen" />
            </a>
          </div>
        </section>
      </a>
    </React.Fragment>
  );
};

export default Moon;
