var goatFadeIn = 6000;
var continueFadeIn = 10000;

$(function() {
  var $goatImgCont = $('#step-1');

  var winHeight = window.innerHeight;
  var winWidth = window.innerWidth;

  $goatImgCont.width(winWidth);
  $goatImgCont.height(winHeight);

  var $goatImgCont = $goatImgCont.hide().fadeIn(goatFadeIn, function() {
    $goatImgCont.fadeOut();
    showMessage();
  });
});

function showMessage() {
  var $msg = $('#step-2');

  $msg.fadeIn(2000, function() {
    setTimeout(function() {
      $('#continue').show().click(function(e) {
        $(this).hide();
        e.preventDefault();
        $msg.fadeOut(showSpotify);
      });
    }, continueFadeIn);
  });
}

function showSpotify() {
  var $spot = $('#step-3');

  $spot.fadeIn();
}
