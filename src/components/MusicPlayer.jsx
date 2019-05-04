import React, { Component } from "react";

import { playVideo } from "../api/youtube";
import { pauseVideo } from "../api/youtube";
import { stopVideo } from "../api/youtube";

class MusicPlayer extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="moon video">
          <div id="player" />
        </div>
        <div className="moon music-player">
          <div
            className="music-player--button music-player--button__play"
            onClick={playVideo}
          >
            <svg viewBox="55 130 100 100" xmlns="http://www.w3.org/2000/svg">
              <g className="layer">
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
          <div
            className="music-player--button music-player--button__pause"
            onClick={pauseVideo}
          >
            <svg viewBox="135 130 100 100" xmlns="http://www.w3.org/2000/svg">
              <g className="layer">
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
          <div
            className="music-player--button music-player--button__stop"
            onClick={stopVideo}
          >
            <svg viewBox="220 130 100 100" xmlns="http://www.w3.org/2000/svg">
              <g className="layer">
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
        </div>
      </React.Fragment>
    );
  }
}

export default MusicPlayer;
