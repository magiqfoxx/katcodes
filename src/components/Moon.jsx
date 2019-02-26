import React from "react";

import MusicPlayer from "./MusicPlayer";
import Navigation from "./Navigation";
import ThemeNav from "./ThemeNav";
import PortfolioItem from "./PortfolioItem";

const Moon = props => {
  function handleThemeChange(newTheme) {
    props.handleThemeChange(newTheme);
  }
  return (
    <React.Fragment>
      <section className="moon section--main">
        <MusicPlayer />
        <Navigation />
        <ThemeNav changeTheme={handleThemeChange} />
        <h1 className="moon">Katcodes</h1>
      </section>
      <section className="moon section--about-me">
        <h2>Hi, I'm Kat</h2>
        <p>
          I've been interested in web development since elementary school.
          Luckily for me, my website from back then is no longer available
          online. <br />
          But these ones are
        </p>
        <PortfolioItem name="The Walk" src="../img/thewalkhtml.jpg" />
        <PortfolioItem name="The Cat Conundrum" src="../img/findlilyhtml.jpg" />
        <PortfolioItem name="Games" src="../img/gameshtml.jpg" />
      </section>
      <section className="moon section--portfolio">
        <PortfolioItem name="Doggopedia" src="../img/doggopediahtml.jpg" />
        <PortfolioItem name="City Break" src="../img/citybreakhtml.jpg" />
        <h2>Things I'm exicited about</h2>
        <p />
      </section>
      <section className="moon section--contact">
        <h2>See more</h2>
        <a href="https://github.com/magiqfoxx">
          <img src="../img/reddit.png" alt="reddit" />
        </a>
      </section>
    </React.Fragment>
  );
};

export default Moon;
