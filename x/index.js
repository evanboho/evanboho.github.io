var tag = document.createElement('script');
var interval;

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: $(window).innerHeight(),
    width: $(window).innerWidth(),
    videoId: 'OcI6FIpd0CA',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
}

function onPlayerStateChange(event) {
  if (!interval) {
    interval = setInterval(stopVideoAfter(38), 1000);
  }
}

function stopVideoAfter(timeInSeconds) {
  return function() {
    if (player.getCurrentTime() >= timeInSeconds) {
      clearInterval(interval);
      player.destroy();
      window.location = "/x/goat.html";
    }
  }
}
