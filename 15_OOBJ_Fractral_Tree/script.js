var tree = [];
var leaves = [];
var count = 0;

function setup() {
  createCanvas(400, 500);

  var a = createVector(width / 2, height - 100);
  var b = createVector(width / 2, height - 200);
  var root = new Branch(a, b);
  tree[0] = root;
}

function mousePressed() {
  for (var i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished = true;
  }
  count++;
  if (count >= 100) {
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
}

function draw() {
  background(51);
  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
    //tree[i].test()
  }

  for (var i = 0; i < leaves.length; i++) {
    fill(255, 0, 100, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 20, 20);
    // leaves[i].y += random(0, 2);
  }
}
