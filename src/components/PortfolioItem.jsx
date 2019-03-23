import React from "react";

const PortfolioItem = props => {
  return (
    <div className="portfolio-item">
      <figure>
        <img src={props.src} alt={props.name} />
      </figure>

      <figcaption>{props.description}</figcaption>
      <div className="portfolio-item__after">
        <h3>{props.name}</h3>
        <hr />
        <p>{props.spec}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
