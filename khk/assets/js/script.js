'use strict';

(function() {

  document.showRandomImg = function() {
    var leftTab = document.getElementsByClass('left-tab-space')[0];
    var imgs = [];

    for (var i in leftTab.childNodes) {
      var el = leftTab.childNodes[i];
      if (el.tagName === 'IMG') {
        imgs.push(el);
      }
    }
    var chosen = Math.floor((Math.random() * imgs.length));
    for (var i in imgs) {
      if (i == chosen) {
        // imgs[i].style.display = 'block';
      } else {
        imgs[i].style.display = '';
      }
    }


  }

  window.onload = function() {
    document.showRandomImg();
  }

  // document.addEventListener('mousedown', getPosition, false);

  // function getPosition(e) {
  //   console.log(e.x, e.y);
  // }

  document.getElementsByClass = function(match, selector) {
    var i;
    var elems = document.getElementsByTagName(selector || '*'), elem, toReturn = [];
    for (i in elems) {
      if ((' ' + elems[i].className + ' ').indexOf(' ' + match + ' ') > -1){
        toReturn.push(elems[i]);
      }
    }
    return toReturn;
  }

  document.addEventListener('click', clickHandler);

  function fadeIn(el, fn) {
    var siblings = document.getElementsByClass('tab'), i;
    for (i in siblings) {
      siblings[i].style.display = 'none';
      siblings[i].className = siblings[i].className.replace('active', '').replace(' ', '')
    }
    el.style.opacity = 0;
    el.style.display = 'block';
    var opacity = 0.1;
    var int = setInterval(
      function() {
        el.style.opacity = opacity;
        opacity = opacity + 0.1;
        if (opacity >= 1.1) {
          clearInterval(int);
        }
      }
    , 40);
    if (fn) fn.call();
  }

  function clickHandler(e) {
    var href;
    if (href = e.target.getAttribute('href')) {
      var el = document.getElementById(href.replace('#', ''));
      fadeIn(el, function() {
        var siblings = document.getElementsByClass('active', 'a');
        var i;
        for (i in siblings) {
          var subStr = siblings[i].className.match(/ /) ? ' active' : 'active';
          siblings[i].className = siblings[i].className.replace(subStr, '');
        }
        e.target.className = [e.target.className, 'active'].join(' ');
        try {
          document.showRandomImg();
        } catch(e) {
          console.log(e);
        }
      });
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
