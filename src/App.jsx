import React, { Component } from "react";

import Moon from "./components/Moon";
import A11y from "./components/A11y";

import MusicPlayer from "./components/MusicPlayer";

class App extends Component {
  state = { theme: "a11y" };

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
    return (
      <React.Fragment>
        {/*has to be mounted at the top to work */}
        <MusicPlayer />
        {this.renderContent()}
      </React.Fragment>
    );
  }
}

export default App;

/*
            playVideo={playVideo}
            pauseVideo={pauseVideo}
            stopVideo={stopVideo}
            */
