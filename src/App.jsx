import React, { Component } from "react";

import Moon from "./components/Moon";
import A11y from "./components/A11y";

class App extends Component {
  state = { theme: "moon" };

  themeChange(theme) {
    this.setState({ theme });
  }
  renderContent = () => {
    switch (this.state.theme) {
      case "moon":
        return <Moon themeChange={() => this.themeChange("a11y")} />;
      default:
        return <A11y themeChange={() => this.themeChange("moon")} />; //<NamePage onClick={this.handleClick} />;
    }
  };

  render() {
    return this.renderContent();
  }
}

export default App;

/*
            playVideo={playVideo}
            pauseVideo={pauseVideo}
            stopVideo={stopVideo}
            */
