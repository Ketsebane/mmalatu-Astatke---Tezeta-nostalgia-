var audio = document.getElementById("audio-player");

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function displayContent(contentPath) {
    var displayedContent = document.getElementById('displayed-content');
    // Use AJAX or other methods to load content dynamically
    // For simplicity, using innerHTML here
    displayedContent.innerHTML = '<iframe src="' + contentPath + '" width="100%" height="400px"></iframe>';
  }