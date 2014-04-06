(function() {

  // document.addEventListener('mousedown', getPosition, false);

  // function getPosition(e) {
  //   console.log(e.x, e.y);
  // }

  document.getElementsByClass = function(match, selector) {
    var elems = document.getElementsByTagName(selector || '*'), elem, toReturn = [];
    for (i in elems) {
      if ((' ' + elems[i].className + ' ').indexOf(' ' + match + ' ') > -1){
        toReturn.push(elems[i]);
      }
    }
    return toReturn;
  }

  document.addEventListener('click', clickHandler);

  function fadeIn(el) {
    var siblings = document.getElementsByClass('tab'), i;
    for (i in siblings) {
      siblings[i].style.display = 'none';
      siblings[i].className = siblings[i].className.replace('active', '').replace(' ', '')
    }
    el.style.opacity = 0;
    el.style.display = 'block';
    el.className += ' active';
    console.log(el.className);
    var opacity = 0.1;
    var int = setInterval(
      function() {
        el.style.opacity = opacity;
        opacity = opacity + 0.1;
        if (opacity >= 1.1) {
          clearInterval(int)
        }
      }
    , 40)
  }

  function clickHandler(e) {
    if (e.target.getAttribute('href')){
      var el = document.getElementById(e.target.getAttribute('href').replace('#', ''));
      fadeIn(el);
      e.preventDefault();
    }
  }

  var watchForTab = setInterval(
    function() {
      var el;
      if (el = document.getElementById('about')) {
        fadeIn(el);
        clearInterval(watchForTab);
      }
    }
  , 1)

})();
