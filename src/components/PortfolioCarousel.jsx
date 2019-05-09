import React, { Component } from "react";

import PortfolioItem from "./PortfolioItem";

import { sitesData } from "./sitesData.js";

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
    if (this.state.currentSite < 5) {
      this.setState({ currentSite: this.state.currentSite + 1 });
    } else {
      this.setState({ currentSite: 0 });
    }
  };

  render() {
    return (
      <React.Fragment>
        <section id="section--portfolio" className="portfolio-carousel">
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
            name={sitesData[this.state.currentSite].name}
            src={sitesData[this.state.currentSite].src}
            description={sitesData[this.state.currentSite].description}
            link={sitesData[this.state.currentSite].link}
            github={sitesData[this.state.currentSite].github}
            spec={sitesData[this.state.currentSite].spec}
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
        </section>
      </React.Fragment>
    );
  }
}

export default Portfolio;
