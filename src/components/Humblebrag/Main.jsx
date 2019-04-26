import React from "react";

const Humblebrag = () => {
  return (
    <div id="humblebrag">
      <nav id="humblebrag--nav">sign now</nav>
      <section id="humblebrag--title">
        <h2>exploit maintainable mindshare</h2>
        <h1>Meet Humblebrag</h1>
        <div className="humblebrag--title--buttons">
          <button className="humblebrag--button button__primary">
            see portfolio
          </button>
          <button className="humblebrag--button button__secondary">
            learn more
          </button>
        </div>
      </section>
      <section id="humblebrag--slates">
        <h3>We know something about success</h3>
        <div className="slates--wrapper">
          <div className="humblebrag--slate">
            <img
              className="slate--img"
              src="../../img/humblebrag/iconfinder_m-54_4230510.png"
              alt="lightbulb"
            />
            <h4 className="slate--title">Great ideas</h4>
            <p className="slate--text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>
            <button className="button__primary humblebrag--button slate--button">
              Learn more
            </button>
          </div>
          <div className="humblebrag--slate">
            <img
              className="slate--img"
              src="../../img/humblebrag/iconfinder_m-54_4230510.png"
              alt="lightbulb"
            />
            <h4 className="slate--title">Security</h4>
            <p className="slate--text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>
            <button className="button__primary humblebrag--button slate--button">
              Learn more
            </button>
          </div>
          <div className="humblebrag--slate">
            <img
              className="slate--img"
              src="../../img/humblebrag/iconfinder_m-54_4230510.png"
              alt="lightbulb"
            />
            <h4 className="slate--title">Speed</h4>
            <p className="slate--text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>
            <button className="button__primary humblebrag--button slate--button">
              Learn more
            </button>
          </div>
        </div>
      </section>
      <section id="humblebrag--break">
        <div className="break--quote">
          <h4 className="break--quote--h4">
            If you can dream it, we can MAKE it
          </h4>
          <p className="break--quote--p">
            We have abundant experience delivering products that surpass our
            clients expectations. We have been called geniuses, innovators and
            overall decent guys. But don’t let us tell you what to think. Read
            to find out how our past work speaks for itself
          </p>
        </div>
      </section>
      <section id="humblebrag--team">
        <h3>The Team</h3>
        <div className="team--wrapper">
          <div className="team--slate ">
            <img
              className="team--slate--img"
              src="../../img/humblebrag/karina-vorozheeva-666313-unsplash.jpg"
              alt="cat"
            />
            <span className="team--slate--name">Kat</span>
            <p className="team--slate--text">
              CEO, years of experience building relations with clients and
              offering the highest level of customer service
            </p>
          </div>
          <div className="team--slate team--slate__main">
            <img
              className="team--slate--img"
              src="../../img/humblebrag/kristopher-roller-150754-unsplash.jpg"
              alt="woman"
            />
            <span className="team--slate--name ">Kat</span>
            <p className="team--slate--text">
              CEO, years of experience building relations with clients and
              offering the highest level of customer service
            </p>
          </div>
          <div className="team--slate">
            <img
              className="team--slate--img"
              src="../../img/humblebrag/anastasia-dulgier-524806-unsplash.jpg"
              alt="plush bear"
            />
            <span className="team--slate--name">Kat</span>
            <p className="team--slate--text">
              CEO, years of experience building relations with clients and
              offering the highest level of customer service
            </p>
          </div>
        </div>
        <button className="humblebrag--button team--button">Learn more</button>
      </section>
      <section id="humblebrag--testimonials">
        <img src="" alt="man on top of the escalator" />
        <div className="testimonials--right">
          <h3>With humblebrag, you will find your way</h3>
          <div className="testimonials--box">
            <div className="testimonials--box--person">
              <img src="" alt="woman" />
              <span>Maria</span>
            </div>
            <div className="testimonials--box--person">
              <img src="" alt="woman" />
              <span>Jane</span>
            </div>
            <div className="testimonials--box--person">
              <img src="" alt="man" />
              <span>Jose</span>
            </div>
            <div className="testimonials--box--quote">
              „Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.”
            </div>
          </div>
        </div>
      </section>
      <section id="humblebrag--form">
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="button" />
        </form>
      </section>
      <footer id="humblebrag--footer" />
    </div>
  );
};

export default Humblebrag;
