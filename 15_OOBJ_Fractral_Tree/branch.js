function Branch(start, end) {
  this.start = start;
  this.end = end;
  this.finished = false;

  this.test = () => {
    this.end.y += random(-1, 1);
    this.start.y += random(-1, 1);
  };

  this.show = () => {
    stroke(225);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  };

  this.branchA = () => {
    var dir = p5.Vector.sub(this.end, this.start);
    dir.rotate(PI / 4);
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end, dir);
    var right = new Branch(this.end, newEnd);
    return right;
  };

  this.branchB = () => {
    var dir = p5.Vector.sub(this.end, this.start);
    dir.rotate(-PI / 4);
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end, dir);
    var left = new Branch(this.end, newEnd);
    return left;
  };
}
