import React from 'react';

const Technologies = () => {
    return ( <section className="moon section--portfolio" id="section--portfolio">
        <div className="portfolio-things">
          <h2>Things I like</h2>
          <div className="portfolio-things--items">
            <img src="../img/tech/react.png" alt="react" />
            <img src="../img/tech/redux.png" alt="tedux" />
            <img src="../img/tech/sass.png" alt="sass" />
            <img src="../img/tech/git.png" alt="git" />
          </div>
        </div>
        <div className="portfolio-things">
          <h2>Things I want to work with</h2>
          <div className="portfolio-things--items">
            <img src="../img/tech/nodejs.png" alt="nodejs" />
            <img src="../img/tech/mongo.png" alt="mongodb" />
            <img src="../img/tech/python.png" alt="python" />
            <img src="../img/tech/django.png" alt="django" />
          </div>
        </div>
      </section> );
}
 
export default Technologies;