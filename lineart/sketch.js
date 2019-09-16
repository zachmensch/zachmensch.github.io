// Line Art Demo
// Zach Mesnch
// September 9th, 2019
//

let fr = 120;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(fr);

  
}

function draw() {
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}
