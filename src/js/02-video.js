import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iFrameEl = document.querySelector('#vimeo-player');
const videoPlayer = new Player(iFrameEl);

videoPlayer.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

const videoSavedTime = localStorage.getItem('videoplayer-current-time');
if (videoSavedTime !== null) {
videoPlayer.setCurrentTime(videoSavedTime);
}
