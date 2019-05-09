import React from "react";

const Navigation = () => {
  return (
    <React.Fragment>
      <div className="moon navigation">
        <ul>
          <li>
            <a href="#section--portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#section--tech">About me</a>
          </li>

          <li>
            <a href="mailto:kat@katcodes.com">Contact</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
