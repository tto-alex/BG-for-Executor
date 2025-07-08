function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(15); // slows down redraw for subtle effect
}

function draw(){
  background(20, 20, 20, 200); // very dark gray with some alpha for slight blending

  fill(50, 50, 50, 40); // dark gray squares with low opacity
  for(let i = 0; i < 5000; i++){ // reduce number of squares for subtlety
    rect(random(width), random(height), 2, 2);
  }
}
