import React from "react";

const Technologies = () => {
  function showTech(tech) {}
  return (
    <section className="moon section--tech" id="section--tech">
      <div className="tech">
        <h2>What I've worked with</h2>
        <div className="tech--items">
          <img
            onClick={() => showTech("react")}
            src="../img/tech/react.png"
            alt="react"
          />
          <img src="../img/tech/redux.png" alt="tedux" />
          <img src="../img/tech/sass.png" alt="sass" />
          <img src="../img/tech/python.png" alt="git" />
        </div>
      </div>
      <div className="tech">
        <h2>What I want to learn</h2>
        <div className="tech--items">
          <img src="../img/tech/nodejs.png" alt="nodejs" />
          <img src="../img/tech/mongo.png" alt="mongodb" />
          <img src="../img/tech/pandas.png" alt="python" />
          <img src="../img/tech/django.png" alt="django" />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
