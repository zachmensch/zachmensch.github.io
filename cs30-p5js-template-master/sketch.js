// stuff
// zach
// 2019

let hat;

let scalar = 1;

function preload() {
  hat = loadImage("assets/hat.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  //noCursor();

  if (keyIsPressed) {
    if (keyCode === UP_ARROW) {
      scalar *= 1.02
    }
    else if (keyCode === DOWN_ARROW) {
      scalar /= 1.02   
    }

  }
  image(hat, mouseX, mouseY, hat.width * scalar, hat.height * scalar);
  imageMode(CENTER);
}

