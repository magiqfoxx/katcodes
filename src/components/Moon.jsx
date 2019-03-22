import React from "react";

import MusicPlayer from "./MusicPlayer";
import Navigation from "./Navigation";
import ThemeNav from "./ThemeNav";
import PortfolioItem from "./PortfolioItem";
//mousememoires for the other theme

//add svgs for logos where possible. esp codepen
//add zoom out animation for portfolioitem img
const Moon = props => {
  function handleThemeChange(newTheme) {
    props.handleThemeChange(newTheme);
  }
  return (
    <React.Fragment>
      <section className="moon section--main" id="section--main">
        <MusicPlayer />
        <Navigation />
        <ThemeNav changeTheme={handleThemeChange} />
        <h1 className="moon">Katcodes</h1>
        <figcaption />
      </section>
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
        <PortfolioItem name="The Walk" src="../img/html/walk3.png" />
        <PortfolioItem name="The Cat Conundrum" src="../img/html/avclub.png" />
        <PortfolioItem name="Games" src="../img/html/games.png" />
      </section>
      <section className="moon section--portfolio" id="section--portfolio">
        <PortfolioItem name="Doggopedia" src="../img/html/doggopedia.png" />
        <PortfolioItem name="City Break" src="../img/html/citybreak.png" />
        <div className="portfolio-things">
          <h2>Things I like</h2>
          <div className="portfolio-things--items">
            <img src="../img/tech/react.png" />
            <img src="../img/tech/redux.png" />
            <img src="../img/tech/sass.png" />
            <img src="../img/tech/git.png" />
          </div>
        </div>
        <div className="portfolio-things">
          <h2>Things I want to learn</h2>
          <div className="portfolio-things--items">
            <img src="../img/tech/nodejs.png" />
            <img src="../img/tech/mongo.png" />
            <img src="../img/tech/python.png" />
            <img src="../img/tech/django.png" />
          </div>
        </div>
      </section>
      <section className="moon section--contact" id="section--contact">
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
    </React.Fragment>
  );
};

export default Moon;
