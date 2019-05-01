import React, { Component } from "react";

import PortfolioItem from "./PortfolioItem";
import Technologies from "./Technologies";

class Portfolio extends Component {
    state = { currentSite: 0 };

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
    }
  ];

  render() {
    return (
      <React.Fragment>
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
      <Technologies />
    </React.Fragment>
    );
  }
}

export default Portfolio;
