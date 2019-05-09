let video;
let player;

video = new Promise((resolve, reject) => {
  // 2. This code loads the IFrame Player API code asynchronously.
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  window.onYouTubeIframeAPIReady = () => resolve(window.YT);
});
video.then(YT => {
  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "MHTVt6gXT7I",
    events: {
      onReady: onPlayerReady
    }
  });
});

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  //disabled autostart
  //event.target.playVideo();
}

export function playVideo() {
  if (player) {
    player.playVideo();
  }
}
export function pauseVideo() {
  if (player) {
    player.pauseVideo();
  }
}
export function stopVideo() {
  if (player) {
    player.stopVideo();
  }
}

/*
<iframe
          className="moon music-player--video"
          width="280"
          height="160"
          src="https://www.youtube.com/embed/MHTVt6gXT7I"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        */
