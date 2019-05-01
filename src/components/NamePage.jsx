import React from "react";

const NamePage = props => {
  function handleClick() {
    props.onClick();
  }
  return (
    <div id="name-page" onClick="window.location.href = '#section--main'">
      <h1 className="title"> Kat codes!</h1>
      <button
        className="title--button"
        onClick="window.location.href = '#section--main'"
      >
        {" "}
        >{" "}
      </button>
    </div>
  );
};

export default NamePage;
