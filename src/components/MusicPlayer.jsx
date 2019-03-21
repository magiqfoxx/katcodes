import React, { Component } from "react";

import play from "../img/music-player/play.png";
import playH from "../img/music-player/play-h.png";
import pause from "../img/music-player/pause.png";
import pauseH from "../img/music-player/pause-h.png";
import stop from "../img/music-player/stop.png";
import stopH from "../img/music-player/stop-h.png";

class MusicPlayer extends Component {
  state = {};

  render() {
    return (
      <div className="moon music-player">
        <div className="music-player--button music-player--button__play">
          <svg viewBox="55 130 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="layer">
              <title>Layer 1</title>
              <path
                d="m85.5,148.5l-0.5,70.5l50,-36l-49.5,-34.5z"
                id="svg_2"
                fill="rgba(23, 30, 46, 0.4)"
                stroke="#FFFFFF"
              />
            </g>
          </svg>
        </div>
        <div className="music-player--button music-player--button__pause">
          <svg viewBox="135 130 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="layer">
              <title>Layer 1</title>
              <path
                d="m158.5,140.5l0.5,81.5l17,0l0,-83l-17.5,1.5z"
                id="svg_4"
                fill="rgba(23, 30, 46, 0.4)"
                stroke="#FFFFFF"
              />
              <path
                d="m193.25,140l0.5,81.5l17,0l0,-83l-17.5,1.5z"
                id="svg_5"
                fill="rgba(23, 30, 46, 0.4)"
                stroke="#FFFFFF"
              />
            </g>
          </svg>
        </div>
        <div className="music-player--button music-player--button__stop">
          <svg viewBox="220 130 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="layer">
              <title>Layer 1</title>
              <path
                d="m239.5,139.5l-0.5,80.5l65,-1l-1,-80l-63.5,0.5z"
                id="svg_6"
                fill="rgba(23, 30, 46, 0.4)"
                stroke="#FFFFFF"
              />
            </g>
          </svg>
        </div>
        <iframe
          className="moon music-player--video"
          width="280"
          height="160"
          src="https://www.youtube.com/embed/MHTVt6gXT7I"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    );
  }
}

export default MusicPlayer;
