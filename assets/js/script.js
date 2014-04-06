(function() {

  document.addEventListener('mousedown', getPosition, false);

  function getPosition(e) {
    console.log(e.x, e.y);
  }


})();
