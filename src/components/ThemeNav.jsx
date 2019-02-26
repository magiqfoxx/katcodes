import React from "react";

const ThemeNav = props => {
  function changeTheme(newTheme) {
    props.changeTheme(newTheme);
  }
  return (
    <div className="moon theme-nav">
      <ul>
        <li onClick={() => changeTheme("moon")}>Moon</li>
        <li onClick={() => changeTheme("oldschool")}>OldSchool</li>
        <li onClick={() => changeTheme("?")}>?</li>
      </ul>
    </div>
  );
};

export default ThemeNav;
