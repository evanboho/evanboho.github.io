(function() {
  var draw = SVG('curves');
  var points;

  var pathString = function(color) {
    hash = points[color]
    return 'M' + hash.leftTop + hash.topCurve + hash.rightTop + 'L' + hash.rightBottom + hash.bottomCurve + hash.leftBottom;
  }

  var getPoints = function(width) {
    if (!width) width = window.innerWidth;
    // width = 1680 - ((1680 - width) / 4)
    var height = window.innerHeight;
    points = {
      teal: {
        leftTop: '0 ' + width/9 + ' ',
        rightTop: width + ' ' +  width/6 + ' ',
        rightBottom: width + ' '+  width/3.8 + ' ',
        leftBottom: '0 ' + width/4.11 + ' ',
        topCurve: 'C' + width/3.36 + ' ' + width/4.89 + ', ' + width/1.34 + ' '+ width/5.09 + ' ',
        bottomCurve: 'C' + width/1.68 + ' ' + width/5.09 + ' ' + width/3.7 + ' ' + width/6.22 + ' '
      },
      blue: {
        leftTop: '0 ' + width/5.2 + ' ',
        rightTop: width + ' ' +  width/4.3 + ' ',
        rightBottom: width + ' '+  width/4.1 + ' ',
        leftBottom: '0 ' + width/4.8 + ' ',
        topCurve: 'C' + width/3.33 + ' ' + width/5.9 + ', ' + 2*width/3.33 + ' '+ width/6.5 + ' ',
        bottomCurve: 'C' + width/1.4 + ' ' + width/6.15 + ' ' + width/3.7 + ' ' + width/6 + ' '
      },
      gray: {
        leftTop: '0 ' + width/4.95 + ' ',
        rightTop: width + ' ' +  width/10.3 + ' ',
        rightBottom: width + ' '+  width/6.15 + ' ',
        leftBottom: '0 ' + width/4.75 + ' ',
        topCurve: 'C' + width/3.33 + ' ' + width/5 + ', ' + width/1.5 + ' '+ width/4.85 + ' ',
        bottomCurve: 'C' + width/1.68 + ' ' + width/4.3 + ' ' + width/3.7 + ' ' + width/4.4 + ' '
      }
    }
  }

  adjustTop = function() {
    var width = window.innerWidth;
    var offset = -199 + 200*1680/width
    var curves = document.getElementById('curves').style.top =  offset + 'px'
  }

  adjustTop();

  getPoints();

  var teal = draw.path(pathString('teal')).fill('#6dd1dd').attr({'fill-opacity': 0.8});
  var gray = draw.path(pathString('gray')).fill('#728c83').attr({'fill-opacity': 0.8});
  var blue = draw.path(pathString('blue')).fill('#226177').attr({'fill-opacity': 1});

  window.onresize = function(e) {
    adjustTop();
    getPoints();
    teal.plot(pathString('teal'));
    gray.plot(pathString('gray'));
    blue.plot(pathString('blue'));
  }

  window.onmousemove = function(e) {
    var mod = Math.sin(e.pageY * Math.pow(e.pageX,0.95) /100000) * 25 + 25;
    getPoints(window.innerWidth + mod);
    teal.plot(pathString('teal'));
    mod = Math.sin(e.pageY * Math.pow(e.pageX,1) /100000) * 25 + 25;
    getPoints(window.innerWidth + mod);
    gray.plot(pathString('gray'));
    mod = Math.cos(e.pageY * Math.pow(e.pageX,1.03) /100000) * 25 + 25;
    getPoints(window.innerWidth + mod);
    blue.plot(pathString('blue'));
  }
})();
