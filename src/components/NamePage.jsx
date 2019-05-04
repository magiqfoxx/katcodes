import React from "react";

const NamePage = () => {
  return (
    <div
      id="name-page"
      onClick={() => (window.location.href = "#section--main")}
    >
      <h1 className="title"> Kat codes!</h1>
      <button className="arrow">&#8595;</button>
    </div>
  );
};

export default NamePage;
