// First Project
// Zach Mesnch
// September 11th, 2019
//

let screen;

function setup() {
  createCanvas(windowWidth, windowHeight);
    background(255,255,102);
    mainMenu();
    // fill(0,150,255);
    // rect(650, 345, 300, 100);
    // rect(650, 475, 300, 100);
    // fill(0,0,0)
    // textAlign(CENTER);
    // textSize(20);
    // text("Options", 800, 530);
    // text("Start", 800, 400);
    // textSize(100);
    // text("Tower Defense Game", 800, 100);
    // screen = "titlescreen";
}

function draw() {

console.log(mouseX, mouseY);
}

function mainMenu() {
  fill(0,150,255);
  rect(650, 345, 300, 100);
  rect(650, 475, 300, 100);
  fill(0,0,0)
  textAlign(CENTER);
  textSize(20);
  text("Options", 800, 530);
  text("Start", 800, 400);
  textSize(100);
  text("Tower Defense Game", 800, 100);
}

function clickButton() {
  if (mouseClicked) {
    if (screen = "titlescreen") {
      if (mouseX > 650 && mouseX < 950 && mouseY > 345 && mouseY < 440) {
        return true;
      }


    } 
  }
}
