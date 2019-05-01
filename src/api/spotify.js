const KEY =
  "BQCMHAmBRexLViYZjD6nvEtetf4Z-f_RxiW2v1H3Dy3amUx4N-OtpvsaZhg3oJs8u5DIrlDvFzvRZpVAt38znyJTeP98YtS4zHx5tLZ5JqBmFV6cW6d-AA4B_0fx6YL6EJukPmV9sfN4agncMqNTpJlZYuovKhmVdM1xuj0";

window.onSpotifyWebPlaybackSDKReady = () => {
  const token = KEY;
  const player = new Spotify.Player({
    name: "Web Playback SDK Quick Start Player",
    getOAuthToken: cb => {
      cb(token);
    }
  });
  // Error handling
  player.addListener("initialization_error", ({ message }) => {
    console.error(message);
  });
  player.addListener("authentication_error", ({ message }) => {
    console.error(message);
  });
  player.addListener("account_error", ({ message }) => {
    console.error(message);
  });
  player.addListener("playback_error", ({ message }) => {
    console.error(message);
  });

  // Playback status updates
  player.addListener("player_state_changed", state => {
    console.log(state);
  });

  // Ready
  player.addListener("ready", ({ device_id }) => {
    console.log("Ready with Device ID", device_id);
  });

  // Not Ready
  player.addListener("not_ready", ({ device_id }) => {
    console.log("Device ID has gone offline", device_id);
  });

  // Connect to the player!
  player.connect();
};
