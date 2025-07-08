let saturns = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noStroke();

  for (let i = 0; i < 12; i++) {
    saturns.push(new SaturnPlanet());
  }
}

function draw() {
  background(18, 18, 18, 60); // soft trail effect

  for (let s of saturns) {
    s.update();
    s.display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class SaturnPlanet {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(width);
    this.y = random(height);
    this.radius = random(20, 40);
    this.ringSize = this.radius * random(1.5, 2.2);
    this.ringAngle = random(360);
    this.speedX = random(-0.1, 0.1);
    this.speedY = random(-0.1, 0.1);
    this.spin = random(-0.2, 0.2);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.ringAngle += this.spin;

    // wrap around screen
    if (this.x < -50 || this.x > width + 50 || this.y < -50 || this.y > height + 50) {
      this.reset();
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.ringAngle);

    // Ring
    stroke(255, 80);
    noFill();
    strokeWeight(2);
    ellipse(0, 0, this.ringSize * 2, this.ringSize * 0.6);

    // Planet
    noStroke();
    fill(255);
    ellipse(0, 0, this.radius * 2);

    pop();
  }
}
