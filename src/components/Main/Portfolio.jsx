import React from "react";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <nav id="nav">sign up</nav>
      <section id="title">
        <h2>exploit maintainable mindshare</h2>
        <h1>Meet Humblebrag</h1>
        <div className="title--buttons">
          <button className="title--button title--button__primary">
            see portfolio
          </button>
          <button className="title--button title--button__secondary">
            change theme
          </button>
        </div>
      </section>
      <section id="about-us">
        <div className="about-us--slate">
          <img
            className="about-us--img"
            src="../../img/portfolio/iconfinder_m-54_4230510.png"
            alt="lightbulb"
          />
          <p>Idea</p>
        </div>
        <div className="about-us--slate">
          <img
            className="about-us--img"
            src="../../img/portfolio/iconfinder_m-04_4230561.png"
            alt="plant growing from a palm"
          />
          <p>Growth</p>
        </div>
        <div className="about-us--slate">
          <img
            className="about-us--img"
            src="../../img/portfolio/iconfinder_m-45_4230517.png"
            alt="rocket"
          />
          <p>Success</p>
        </div>
      </section>
      <section id="find-your-way">
        <div className="find-your-way--left">
          <h3>Find your way</h3>
          <p>Professionally enhance your e-cloud based business</p>
          <hr />
        </div>

        <img
          className="find-your-way--img"
          src="../../img/portfolio/andre-benz-243078-unsplash.jpg"
          alt="man at the top of an escalator"
        />
      </section>
      <section id="quote">
        <div className="quote--text">
          <p>
            "Success isn’t always about greatness. It’s about consistency.
            Consistent hard work leads to success. Greatness will come."{" "}
          </p>
          <span>Dwayne „The Rock” Johnson</span>
        </div>
        <img
          src="../../img/portfolio/iconfinder_m-21_4230540.png"
          alt="graph showing an increase"
        />
      </section>
      <section id="break" />
      <section id="our-team">
        <div className="our-team--left">
          <h3>Our team</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </p>
        </div>
        <img
          className="our-team--img"
          src="../../img/portfolio/lucas-marconnet-740838-unsplash.jpg"
          alt="Woman hiding behind a sunflower"
        />
        <span className="our-team--arrow">&#8702;</span>
      </section>
      <footer>
        <div>
          Icons made by{" "}
          <a
            href="https://www.iconfinder.com/visuallanguage"
            title="MD BADSHA MEAH"
          >
            MD BADSHA MEAH
          </a>{" "}
          licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC 3.0 BY
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
