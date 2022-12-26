function setup() {
  var customCanvas = createCanvas(200, 300);
  customCanvas.parent("custom-canvas")
  // background(255, 255, 255);
}

function draw() {
  
  // fill("red")
  // noStroke()
  noFill()
  stroke("white")
  strokeWeight(1.5)

  beginShape();
  vertex(10, 0);
  vertex(45, 0);
  vertex(55, 10);

  vertex(145, 10);
  vertex(155, 0);
  vertex(190, 0);
  vertex(200, 10);
  vertex(200, 40);
  vertex(190, 50);

  vertex(190, 250);
  vertex(200, 260);
  vertex(200, 290);
  vertex(190, 300);
  vertex(160, 300);
  vertex(150, 290);

  vertex(50, 290);
  vertex(40, 300);
  vertex(10, 300);
  vertex(0, 290);
  vertex(0, 260);
  vertex(10, 250);

  vertex(10, 50);
  vertex(0, 40);
  vertex(0, 10);

  // vertex(0, 300);
  endShape(CLOSE);
}
