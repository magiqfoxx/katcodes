import React from "react";

const NamePage = () => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  let style;
  //background-clip doesn't work on safari
  if (isSafari) {
    console.log("safari");
    style = {
      color: "#c18284"
    };
  }
  return (
    <div
      id="name-page"
      style={style}
      onClick={() => (window.location.href = "#section--main")}
    >
      <h1 className="title"> Kat codes!</h1>
      <button className="arrow">&#8595;</button>
    </div>
  );
};

export default NamePage;
