// Tower Defense Project
// Zach Mesnch
// September 2019
//

// State variable for what screen the game is in
let screen;

// Variables for the buttons in the Options screen
let soundOnColour = "green";
let soundOffColour = "red";
let soundOnOff = "on";
let controls = "WASD"; 
let controlsWASDColour = "green";
let controlsARROWSColour = "red";

// Variables for character control
let characterX;
let characterY;
let moveNorth;
let moveSouth;
let moveWest;
let moveEast;
let characterFat;
let characterMovespeed;
let bullets = [];
let gunAngle;

// Variables for enemies

let enemies = []
let spawnpointX;
let spawnpointY; 

function setup() {
  characterX = 700;
  characterY = 400;
  createCanvas(windowWidth, windowHeight);
  screen = "titleScreen";
  characterFat = 30;
  characterMovespeed = 5;
}

function draw() {
  screenDisplay();
  mousePressed();
  characterControl(); 
  console.log(mouseX, mouseY);
  //console.log(screen)
  updateBullets();
}

function screenDisplay() {
  // Displays graphics depending on state of the "screen" variable
  if (screen === "titleScreen"){
    background(255,255,102)
    titleDisplay();
  }
  if (screen === "gameScreen") {
    background(255);
    gameDisplay()
  }
  if (screen === "optionScreen"){
    background(255,255,102);
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
  // Displays the Character and allowes movement controls
  if (screen === "gameScreen") {
    fill(0);
    stroke(0)
    ellipse(characterX, characterY, characterFat);
  }
  // Sets keycodes for WASD controls
  if (controls === "WASD"){
    moveNorth = 87;
    moveSouth = 83;
    moveWest = 65;
    moveEast = 68;
  }
  // Sets keycodes for Arrow Keys controls
  if (controls === "ARROWS") {
    moveNorth = UP_ARROW;
    moveSouth = DOWN_ARROW;
    moveWest = LEFT_ARROW;
    moveEast = RIGHT_ARROW;
  }
  if (keyIsDown(moveNorth)) {
    if (characterY > 0 + 40 + characterMovespeed + characterFat/2) {
      characterY -= characterMovespeed;
    }
  }
  if (keyIsDown(moveSouth)) {
    if (characterY < 789 - 40 - characterFat/2 - characterMovespeed) {
      characterY += characterMovespeed;
    }
  }
  if (keyIsDown(moveWest)) {
    if (characterX > 0 + 40 + characterFat/2) {
      characterX -= characterMovespeed;
    }
  }
  if (keyIsDown(moveEast)) {
    if (characterX < width - characterMovespeed - 300 - characterFat/2) {
    characterX += characterMovespeed;
    }
  }
  displayGun();
}

function gameDisplay() {
  // Display for Game Screen
  background(34,139,34);
  fill(30,144,255);
  stroke(30,144,255);
  rect(0,0,width,40);
  rect(0,0,40,height);
  rect(0,height - 40,width,40);
  rect(width - 300, 0, 300, height);

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
  // Buttons for title screen
  if (mouseX > 650 && mouseX < 950 && mouseY > 345 && mouseY < 445) {
    screen = "gameScreen";
    clear();
  }
  if (mouseX > 650 && mouseX < 950 && mouseY > 475 && mouseY < 575) {
    screen = "optionScreen";
    clear();
  }
}

function optionsButtons() {
  // Buttons for options screen
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

function spawnEnemies(){
  if (enemies < enemiesInWave){
    ellipse(spawnpointX, spawnpointY, enemyWidth)
  }
}

function fire() {
  let thisBullet = {
    x: characterX,
    y: characterY,
    radius: characterFat,
    angle: cannonAngle,
    speed: 15
  };
  bullets.push(thisBullet);
}

function updateBullets() {
  for (let thisBullet of bullets) {
    thisBullet.x += thisBullet.speed * cos(thisBullet.angle);
    thisBullet.y += thisBullet.speed * sin(thisBullet.angle);
    circle(thisBullet.x, thisBullet.y, thisBullet.radius);
  }
}

function mouseClicked() {
  if (screen === "gameScreen") {
    fire();
  }
}

function displayGun() {
  push();
  translate(characterX, characterY);
  gunAngle = atan2(mouseY - characterY, mouseX - characterX);
  rotate(gunAngle);
  rect(characterX, characterY, 30, 10);
  circle(characterX, characterY, characterFat);
  pop();
}
