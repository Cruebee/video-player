// first up is to get all the DOM elements we'll need
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Functions
// Play & pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Update progress & timestamp
function updateProgress() {
  return true;
}

// Set video time to progress
function setVideoProgress() {
  return true;
}

// Stop video and reset to beginning
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Event Listeners
// Plays video if stopped, pauses if playing
video.addEventListener('click', toggleVideoStatus);
// For play/pause each will run a function that changes the icon
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
// As video plays continually calls timeupdate function called update progress
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

// When slider is changed it will call this
progress.addEventListener('change', setVideoProgress);
