import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NamePage from "./NamePage";
import Sketch from "./Sketch";

import Moon from "./Moon";
import OldSchool from "./OldSchool";

class App extends Component {
  state = { theme: null };

  handleClick = () => {
    this.setState({ theme: "moon" });
  };
  changeTheme = newTheme => {
    console.log(newTheme);
    this.setState({ theme: newTheme });
  };

  renderContent = () => {
    switch (this.state.theme) {
      case "moon":
        return <Moon handleThemeChange={this.changeTheme} />;
      case "oldschool":
        return <OldSchool handleThemeChange={this.changeTheme} />;
      case "?":
        return "?";
      default:
        return <Sketch />; //<NamePage onClick={this.handleClick} />;
    }
  };

  render() {
    return this.renderContent();
  }
}

export default App;
