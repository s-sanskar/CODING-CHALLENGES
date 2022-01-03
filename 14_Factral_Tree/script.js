var angle = 0;

var slider = 0;
var lbSlider = 0;
var rBSlider = 0;

var branchWidth = 20;
var leftBranch = 0;
var rightBranch = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  slider = createSlider(0, 3600, 1);
  slider.position(10, height-25);

  lbSlider = createSlider(0.1, 0.8, 0.67, 0.01);
  lbSlider.position(10, height-50);

  rBSlider =  createSlider(0.1, 0.8, 0.67, 0.01);
  rBSlider.position(10, height-75);
}

function draw() {
  background(51);
  angle = slider.value();
  leftBranch = lbSlider.value()
  rightBranch = rBSlider.value()
  noStroke();
  fill(255);
//   text('angle', slider.x * 2 + slider.width, height - 15);
//   text('Left Branch', lbSlider.x * 2 + lbSlider.width, height - 40);
//   text('Right Branch', rBSlider.x * 2 + rBSlider.width, height - 75);


  stroke(255);
  translate(width/2, height - 15);
  branch(200, branchWidth);
}

function branch(len, bw) {
  strokeWeight(bw);
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    strokeWeight(bw);
    branch(len * rightBranch, bw * 0.67);
    pop();
    push();
    strokeWeight(bw);
    rotate(-angle);
    branch(len * leftBranch, bw * 0.67);
    pop();
  }
}
