import React from "react";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <section id="portfolio--title">
        <nav id="portfolio--nav">sign up</nav>
        <h2>exploit maintainable mindshare</h2>
        <h1>Meet Humblebrag</h1>
        <button>see portfolio</button>
        <button>change theme</button>
      </section>
      <section id="portfolio--about-us">
        <div className="portfolio--about-us">
          <img
            src="../../img/portfolio/iconfinder_m-54_4230510.png"
            alt="lightbulb"
          />
          <img
            src="../../img/portfolio/iconfinder_m-04_4230561.png"
            alt="plant growing from a palm"
          />
          <img
            src="../../img/portfolio/iconfinder_m-45_4230517.png"
            alt="rocket"
          />
        </div>
      </section>
      <section id="portfolio--find-your-way">
        <h3>Find your way</h3>
        <p>Professionally enhance your e-cloud based business</p>
        <hr />
        <img
          src="../../img/portfolio/andre-benz-243078-unsplash.jpg"
          alt="man at the top of an escalator"
        />
      </section>
      <footer>
        <div>
          Icons made by{" "}
          <a href="https://www.freepik.com/" title="MD BADSHA MEAH">
            MD BADSHA MEAH
          </a>
          from{" "}
          <a
            href="https://www.iconfinder.com/visuallanguage"
            title="Visuallanguage"
          >
            https://www.iconfinder.com/visuallanguage
          </a>
          is licensed by{" "}
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
