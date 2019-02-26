import React, { Component } from "react";

class MusicPlayer extends Component {
  state = {};

  onHover = () => {
    console.log("this");
    this.src = "../img/music-player/play-h.png";
  };
  render() {
    return (
      <div className="moon music-player">
        <img
          src={require("../img/music-player/play.png")}
          alt="play"
          onMouseOver={this.onHover}
          onClick={this.onHover}
        />
        <img src={require("../img/music-player/pause.png")} alt="pause" />
        <img src={require("../img/music-player/stop.png")} alt="stop" />
      </div>
    );
  }
}

export default MusicPlayer;
