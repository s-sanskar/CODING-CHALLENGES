var canvas = document.getElementById("canvas1");
var context = canvas.getContext("2d");

var particleNumber = 100;
let particleArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Rain {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = 0;
    this.size = 2;
  }

  draw() {
    context.beginPath();
    context.fillStyle = `rgb(175,195,204, 1)`;
    context.moveTo(this.x - 2, this.y);
    context.lineTo(this.x, this.y - 20);
    context.lineTo(this.x + 2, this.y);
    context.arc(this.x, this.y, this.size, 0, Math.PI);
    context.closePath();
    context.fill();
  }
  update() {
    this.y += (Math.random() * 100 + 5) + Math.random() * 10;
    if (this.y > canvas.height) {
      this.y = Math.random();
   }
  }
}

function init() {
  for (let i = 0; i < particleNumber; i++) {
    particleArray.push(new Rain());
  }
}

function animate() {
  //ctx.globalAlpha = 0.05;
  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
    particleArray[i].draw();
  }
  requestAnimationFrame(animate);
}
init();
animate();
