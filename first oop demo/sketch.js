
let george;
let jenna;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  george = new Walker(width/3 + width/3, height/2);
  jenna = new Walker(width/3, height/2);
}

function draw() {
  george.move();
  george.display();
  jenna.move();
  jenna.display();

}

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.fillColor = color(random(255), random(255), random(255));
    this.stepSize = 10;
    this.radius = 3;
  }

  display() {
   fill(this.fillColor);
   noStroke();
   circle(this.x, this.y, this.radius * 2);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      this.y -= this.stepSize;
    }
    else if (choice < 50) {
      this.y += this.stepSize;
    }
    else if (choice < 75) {
      this.x -= this.stepSize;
    }
    else if (choice <= 100) {
      this.x += this.stepSize;
    }
  }

}

