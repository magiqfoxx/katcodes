import React from "react";

const CurrentlyWorkingOn = () => {
  return (
    <section className="a11y working-on" id="section--working-on">
      <h2>What I'm working on</h2>
      <p>
        A Simple React Native App that will allow setting up plant watering
        schedule.
      </p>
      <div className="description">
        <h4>MVP:</h4>
        <ul>
          <li>Add plants</li>
          <li>Add weekly watering and fertilising schedule</li>
        </ul>
        <h4>Possible features:</h4>
        <ul>
          <li>Simple account in firebase</li>
          <li>Push notifications</li>
          <li>Weather report*</li>
          <li>Search*</li>
        </ul>
        *If I can get an API to work with firebase
      </div>

      <h4>Concept images</h4>
      <div className="concept-images">
        <img
          className="concept-images--img"
          src="../img/currentlyWorking/landing.png"
          alt="landing"
        />
        <img
          className="concept-images--img"
          src="../img/currentlyWorking/dashboard.png"
          alt="dashboard"
        />

        <img
          className="concept-images--img"
          src="../img/currentlyWorking/guides.png"
          alt="guides"
        />
        <img
          className="concept-images--img"
          src="../img/currentlyWorking/search.png"
          alt="search"
        />
      </div>
    </section>
  );
};

export default CurrentlyWorkingOn;
