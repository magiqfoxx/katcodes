import React from "react";

const NamePage = props => {
  function handleClick() {
    props.onClick();
  }
  return (
    <div id="name-page" onClick={handleClick}>
      <h1> Kat codes!</h1>
    </div>
  );
};

export default NamePage;
