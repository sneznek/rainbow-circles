function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);
  strokeWeight(1);
  stroke(0);
  
  var x=0;
  while (x<= width) {
    fill(255,55,50)
    ellipse (x, 200, 40, 40);
    fill(66, 245, 96)
    ellipse (x, 200, 30, 30);
    fill(49, 235, 235)
    ellipse(x,200,20,20);
    fill(193, 36, 201)
    ellipse(x,200,10,10) 
    x = x+100;
  }
}