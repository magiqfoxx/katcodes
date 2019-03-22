import React from "react";

const PortfolioItem = props => {
  return (
    <div className="portfolio-item">
      <figure>
        <img src={props.src} alt={props.name} />
      </figure>
      <figcaption>{props.name}</figcaption>
      <hr />
      <p>
        HTML, CSS only
        <br />
        Advertising a dog-walking service
      </p>
    </div>
  );
};

export default PortfolioItem;
