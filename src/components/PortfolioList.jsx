import React from "react";

import PortfolioItem from "./PortfolioItem";

import { sitesData } from "./sitesData.js";

const PortfolioList = () => {
  return (
    <section id="section--portfolio">
      <h2>My projects</h2>
      <div className="portfolio-list">
        {sitesData.map(site => {
          return (
            <PortfolioItem
              name={site.name}
              src={site.src}
              description={site.description}
              spec={site.spec}
              link={site.link}
              key={site.name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioList;
