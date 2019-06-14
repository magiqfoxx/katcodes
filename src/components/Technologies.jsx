import React from "react";

const Technologies = () => {
  function showTech(tech) {}
  return (
    <section className="moon section--tech" id="section--tech">
      <div className="tech">
        <h2>What I like working with</h2>
        <div className="tech--items">
          <button
            className="button"
            onClick={() =>
              window.open(`http://katcodes.com/city-break`, "_blank")
            }
          >
            <img
              onClick={() => showTech("react")}
              src="../img/tech/react.svg"
              alt="react"
            />
          </button>
          <button
            className="button"
            onClick={() => window.open(`http://katcodes.com/games`, "_blank")}
          >
            <img src="../img/tech/redux.svg" alt="tedux" />
          </button>
          <button
            className="button"
            onClick={() =>
              window.open(`https://petshare-308d3.firebaseapp.com/`, "_blank")
            }
          >
            <img src="../img/tech/sass.svg" alt="sass" />
          </button>
          <button
            className="button"
            onClick={() =>
              window.open(`https://petshare-308d3.firebaseapp.com/`, "_blank")
            }
          >
            <img src="../img/tech/firebase.svg" alt="firebase" />
          </button>
          <button
            className="button"
            onClick={() => window.open(`http://68.183.213.253`, "_blank")}
          >
            <img src="../img/tech/python.svg" alt="python" />
          </button>
        </div>
      </div>

      <div className="tech">
        <h2>What I want to learn</h2>
        <div className="tech--items">
          <img className="toLearn" src="../img/tech/node.svg" alt="nodejs" />
          <img
            className="toLearn"
            src="../img/tech/mongodb.svg"
            alt="mongodb"
          />
          <img className="toLearn" src="../img/tech/django.svg" alt="django" />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
