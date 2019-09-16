// Bouncing Ball Demo
// Zach
// September 16th

let x;
let y;
let dy;
let dx;
let radius = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  frameRate(100);
}

function draw() {
background(255);
dx = random(-100, 100);
dy = random(-100, 100);

x += dx;
if (x > width - radius/2 || x < 0 + radius/2) {
  dx *= -1;
}

y += dy;
if (y > height - radius/2 || y < 0 + radius/2) {
  dy *= -1;
}

fill(0);
circle(x, y, radius);
}

function windowResized() {
  setup();
}