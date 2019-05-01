import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NamePage from "./components/NamePage";
import Moon from "./components/Moon";
import A11y from "./components/A11y";

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
      case "a11y":
        return <A11y handleThemeChange={this.changeTheme} />;
      case "?":
        return "?";
      default:
        return <Moon />; //<NamePage onClick={this.handleClick} />;
    }
  };

  render() {
    return this.renderContent();
  }
}

export default App;
