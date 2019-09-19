// First Project
// Zach Mesnch
// September 11th, 2019
//
let characterX;
let characterY;
let screen;
let soundOnColour = "green";
let soundOffColour = "red";
let soundOnOff = "on";
let controlsWASDColour = "green";
let controlsARROWSColour = "red";
let controls = "WASD"; 

function setup() {
  characterX = 800;
  characterY = 400;
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
    titleDisplay();
  }
  if (screen === "gameScreen") {
    //background(255,255,102);
  }
  if (screen === "optionScreen"){
    optionsDisplay();
  }
}

function mousePressed() {
  if (mouseIsPressed) {
    // Title Screen Buttons
    if (screen === "titleScreen") {
      titleButtons();
    }
    // Options Screen Buttons
    if (screen == "optionScreen") {
      optionsButtons();
    }
  }
}

function characterControl() {
  if (screen === "gameScreen") {
    fill(0);
    ellipse(characterX, characterY, 100);
  }
}
function keyIsDown(UP_ARROW) {
  characterY -= 5
}

function titleDisplay() {
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

function optionsDisplay() {
  // Display for Options Screen
  background(255,255,102);
  fill(0,150,255);
  rect(650, 605, 300, 100); 
  fill(soundOnColour);
  rect(845, 235, 50, 30);
  fill(soundOffColour);
  rect(905, 235, 50, 30);
  fill(controlsWASDColour);
  rect(845, 285, 50, 30);
  fill(controlsARROWSColour);
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

function titleButtons() {
  if (mouseX > 650 && mouseX < 950 && mouseY > 345 && mouseY < 440) {
    screen = "gameScreen";
    clear();
  }
  if (mouseX > 650 && mouseX < 950 && mouseY > 475 && mouseY < 575) {
    screen = "optionScreen";
    clear();
  }
}

function optionsButtons() {
  if (mouseX > 650 && mouseX < 950 && mouseY > 605 && mouseY < 705) {
    screen = "titleScreen";
  }
  if (mouseX > 845 && mouseX < 895 && mouseY > 235 && mouseY < 265) {
    soundOnOff = "On";
    soundOnColour = "green";
    soundOffColour = "red";
  }
  if (mouseX > 905 && mouseX < 955 && mouseY > 235 && mouseY < 265) {
    soundOnOff = "Off";
    soundOnColour = "red";
    soundOffColour = "green";
  }
  if (mouseX > 845 && mouseX < 895 && mouseY > 285 && mouseY < 315) {
    controls = "WASD";
    controlsWASDColour = "green";
    controlsARROWSColour = "red";
  }
  if (mouseX > 905 && mouseX < 955 && mouseY > 285 && mouseY < 315) {
    controls = "ARROWS";
    controlsWASDColour = "red";
    controlsARROWSColour = "green";
  }
}

