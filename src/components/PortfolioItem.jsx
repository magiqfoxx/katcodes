import React from "react";

const PortfolioItem = props => {
  return (
    <div className="portfolio-item">
      <figure>
        <img
          onClick={() => window.open(`${props.link}`, "_blank")}
          src={props.src}
          alt={props.name}
        />
      </figure>

      <figcaption>
        {props.description}
        <div className="portfolio-item__after--links">
          <img
            onClick={() => window.open(`${props.github}`, "_blank")}
            src="../img/github.svg"
            alt="github"
          />
          <button onClick={() => window.open(`${props.link}`, "_blank")}>
            Live
          </button>
        </div>
      </figcaption>
      <div className="portfolio-item__after">
        <h3>{props.name}</h3>
        <hr />
        <p>{props.spec}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
