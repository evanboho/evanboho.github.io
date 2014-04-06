(function() {

  // document.addEventListener('mousedown', getPosition, false);

  // function getPosition(e) {
  //   console.log(e.x, e.y);
  // }

  document.getElementsByClass = function(match) {
    var elems = document.getElementsByTagName('*'), elem, toReturn = [];
    for (i in elems) {
      if ((' ' + elems[i].className + ' ').indexOf(' ' + match + ' ') > -1){
        toReturn.push(elems[i]);
      }
    }
    return toReturn;
  }

  document.addEventListener('click', clickHandler);

  function clickHandler(e) {
    if (e.target.getAttribute('href')){
      var el = document.getElementById(e.target.getAttribute('href').replace('#', ''));
      var siblings = document.getElementsByClass('tab'), i;
      for (i in siblings) {
        siblings[i].style.display = 'none';
      }
      el.style.opacity = 0;
      el.style.display = 'block';
      var opacity = 0.1;
      var int = setInterval(
        function() {
          el.style.opacity = opacity;
          opacity = opacity + 0.1;
          if (opacity >= 1.1) {
            clearInterval(int)
          }
        }
      , 30)
      e.preventDefault();
    }
  }

})();
