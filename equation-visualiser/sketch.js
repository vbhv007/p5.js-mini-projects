function setup() {
  createCanvas(1000, 500);
}



function draw() {
  background(0);
  for(var i = 0; i < 500; i++){
    noStroke();
    fill(255);
    rect(i, (mouseY*i + mouseX), 10, 10);
  }
}
