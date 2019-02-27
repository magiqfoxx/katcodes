import React, { Component } from "react";

import play from "../img/music-player/play.png";
import playH from "../img/music-player/play-h.png";
import pause from "../img/music-player/pause.png";
import pauseH from "../img/music-player/pause-h.png";
import stop from "../img/music-player/stop.png";
import stopH from "../img/music-player/stop-h.png";

class MusicPlayer extends Component {
  state = {};

  onHover = event => {
    console.log(event.target);
    //`../img/music-player/${src}.png`;
  };
  onHoverEnd = (event, src) => {
    event.target.src = src;
  };
  render() {
    return (
      <div className="moon music-player">
        <img src={play} alt="play" onMouseOver={this.onHover} />
        <img src={pause} alt="pause" onMouseOver={this.onHover} />
        <img src={stop} alt="stop" onMouseOver={this.onHover} />
      </div>
    );
  }
}

export default MusicPlayer;
