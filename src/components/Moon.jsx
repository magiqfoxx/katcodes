import React, { Component } from "react";

import MusicPlayer from "./MusicPlayer";
import Navigation from "./Navigation";
import ThemeNav from "./ThemeNav";
import PortfolioItem from "./PortfolioItem";
//mousememoires for the other theme

//add svgs for logos where possible. esp codepen
//add zoom out animation for portfolioitem img
//things i like: on hover show a list? of apps with it
class Moon extends Component {
  state = { currentSite: 0 };
  handleThemeChange = newTheme => {
    this.props.handleThemeChange(newTheme);
  };
  previousSite = () => {
    if (this.state.currentSite > 0) {
      this.setState({ currentSite: this.state.currentSite - 1 });
    } else {
      this.setState({ currentSite: 4 });
    }
  };
  nextSite = () => {
    if (this.state.currentSite < 4) {
      this.setState({ currentSite: this.state.currentSite + 1 });
    } else {
      this.setState({ currentSite: 0 });
    }
  };
  portfolioSites = [
    {
      name: "The Walk",
      src: "../img/html/walk.png",
      description: "Dog-walking service",
      spec: "CSS only"
    },
    {
      name: "AV Club",
      src: "../img/html/avclub.png",
      description: "Do you like movies?",
      spec: "react with firebase"
    },
    {
      name: "Games",
      src: "../img/html/games.png",
      description: "Play one of classic games",
      spec: "react with redux"
    },
    {
      name: "Doggopedia",
      src: "../img/html/doggopedia.png",
      description: "Learn more about dog breeds",
      spec: "react with wikipedia api"
    },
    {
      name: "City Break",
      src: "../img/html/citybreak.png",
      description: "Get some info about the place you wnat to go to",
      spec: "react with different apis"
    } //hydroponics with gatsby?
  ];
  render() {
    return (
      <React.Fragment>
        <section className="moon section--main" id="section--main">
          <MusicPlayer />
          <Navigation />
          <ThemeNav changeTheme={this.handleThemeChange} />
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
          <div className="portfolio-carousel">
            <div
              className="portfolio-carousel--arrow__back"
              onClick={this.previousSite}
            >
              <svg viewBox="160 130 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className="layer">
                  <title>Layer 1</title>
                  <path
                    d="m169.5,214.5c0,0 35,-80 34.5,-80.5c-0.5,-0.5 42.5,76.5 42,76c-0.5,-0.5 -21.5,0.5 -22,0c-0.5,-0.5 1.5,18.5 1,18c-0.5,-0.5 -38.5,-0.5 -39,-1c-0.5,-0.5 -1.5,-14.5 -2,-15c-0.5,-0.5 -14.5,2.5 -14.5,2.5z"
                    fill="rgba(23, 30, 46, 0.4)"
                    id="svg_1"
                    stroke="#734949"
                    strokeWidth="5"
                  />
                </g>
              </svg>
            </div>
            <PortfolioItem
              name={this.portfolioSites[this.state.currentSite].name}
              src={this.portfolioSites[this.state.currentSite].src}
              description={
                this.portfolioSites[this.state.currentSite].description
              }
              spec={this.portfolioSites[this.state.currentSite].spec}
            />
            <div
              className="portfolio-carousel--arrow__forward"
              onClick={this.nextSite}
            >
              <svg viewBox="160 130 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className="layer">
                  <title>Layer 1</title>
                  <path
                    d="m169.5,214.5c0,0 35,-80 34.5,-80.5c-0.5,-0.5 42.5,76.5 42,76c-0.5,-0.5 -21.5,0.5 -22,0c-0.5,-0.5 1.5,18.5 1,18c-0.5,-0.5 -38.5,-0.5 -39,-1c-0.5,-0.5 -1.5,-14.5 -2,-15c-0.5,-0.5 -14.5,2.5 -14.5,2.5z"
                    fill="rgba(23, 30, 46, 0.4)"
                    id="svg_1"
                    stroke="#734949"
                    strokeWidth="5"
                  />
                </g>
              </svg>
            </div>
          </div>
        </section>
        <section className="moon section--portfolio" id="section--portfolio">
          <div className="portfolio-things">
            <h2>Things I like</h2>
            <div className="portfolio-things--items">
              <img src="../img/tech/react.png" alt="react" />
              <img src="../img/tech/redux.png" alt="tedux" />
              <img src="../img/tech/sass.png" alt="sass" />
              <img src="../img/tech/git.png" alt="git" />
            </div>
          </div>
          <div className="portfolio-things">
            <h2>Things I want to work with</h2>
            <div className="portfolio-things--items">
              <img src="../img/tech/nodejs.png" alt="nodejs" />
              <img src="../img/tech/mongo.png" alt="mongodb" />
              <img src="../img/tech/python.png" alt="python" />
              <img src="../img/tech/django.png" alt="django" />
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
  }
}

export default Moon;
