var canvas = document.getElementById("canvas1");
var context = canvas.getContext("2d");

var maxiterations = 15;

var pixel = context.getImageData(0, 0, canvas.width, canvas.height);

for (var y = 0; y < canvas.height; y++) {
  for (var x = 0; x < canvas.width; x++) {

  }
}


function map(value, a, b, c, d) {
    value = (value - a) / (b - a);
    return c + value * (d - c);
  }
  