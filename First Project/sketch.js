// First Project
// Zach Mesnch
// September 11th, 2019
//
let characterX;
let characterY;
let screen;

function setup() {
  createCanvas(windowWidth, windowHeight);
  screen = "titleScreen";
}

function draw() {
  screenDisplay();
  mousePressed();
  characterControl();
  console.log(mouseX, mouseY);
  console.log(screen)
}

function screenDisplay() {
  if (screen === "titleScreen"){
    // Display for Title Screen
    background(255,255,102);
    fill(0,150,255);
    rect(650, 345, 300, 100);
    rect(650, 475, 300, 100);
    fill(0,0,0)
    textAlign(CENTER, TOP);
    textSize(20);
    text("Options", 800, 520);
    text("Start", 800, 390);
    textSize(100);
    text("Tower Defense Game", 800, 100);
    textSize(15);
    text("Made by Zach Mensch & Matthew Resendes", 800, 750);
  }
  if (screen === "gamesScreen") {
    background(255,255,102);
  }
  if (screen === "optionScreen"){
    // Display for Options Screen
    background(255,255,102);
    fill(0,150,255);
    rect(650, 605, 300, 100); 
    rect(845, 235, 50, 30);
    rect(905, 235, 50, 30);
    rect(845, 285, 50, 30);
    rect(905, 285, 50, 30);
    fill(0,0,0);
    textAlign(CENTER);
    textSize(100);
    text("Options", 800, 100);
    textSize(20);
    text("Back", 800, 650);
    textSize(40);
    textAlign(LEFT, TOP);
    text("Sound", 660, 232.5);
    text("Controls", 660, 282.5);
  }
}

function mousePressed() {
  if (mouseIsPressed) {
    // Title Screen Buttons
    if (screen === "titleScreen") {
      if (mouseX > 650 && mouseX < 950 && mouseY > 345 && mouseY < 440) {
        screen = "gamesScreen";
        clear();
      }
      if (mouseX > 650 && mouseX < 950 && mouseY > 475 && mouseY < 575) {
        screen = "optionScreen";
        clear();
      }
    }
    // Options Screen Buttons
    if (screen == "optionScreen") {
      if (mouseX > 650 && mouseX < 950 && mouseY > 605 && mouseY < 705) {
        screen = "titleScreen";
      }
    }
  }
}

function characterControl() {
  characterX = mouseX;
  characterY = mouseY;
  if (screen === "gameScreen") {
    fill(0);
    ellipse(100, 100, 100);
  }
}


