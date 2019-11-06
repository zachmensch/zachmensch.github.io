let grid;
// Define Map Size
let rows = 30;
let cols = 30;
// Define Units
let blueUnit1, blueUnit2, blueUnit3, redUnit1, redUnit2, redUnit3 = {};
let unitList = [blueUnit1, blueUnit2, blueUnit3, redUnit1, redUnit2, redUnit3];

let mode;
let selectedUnit = "none";

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createEmptyGrid();
  spawnUnits();
  mode = "play";
}

function draw() {
  background(220);
  displayGrid(grid, rows, cols);
  moveUnit();
}

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}

function keyTyped() {
  if (key === "c") {
    grid = createEmptyGrid();
  }
}

function mousePressed() {
  let cellSize = width/cols;

  let xCoord = floor(mouseX / cellSize);
  let yCoord = floor(mouseY / cellSize);
  if (mode === "play" && selectedUnit === "none"){
    if (xCoord === blueUnit1.x && yCoord === blueUnit1.y) {
      blueUnit1.selected = true;
      mode = "MoveUnit";
      selectedUnit = blueUnit1;
    }
    if (xCoord === blueUnit2.x && yCoord === blueUnit2.y) {
      blueUnit2.selected = true;
      mode = "MoveUnit";
      selectedUnit = blueUnit2;
    }
    if (xCoord === blueUnit3.x && yCoord === blueUnit3.y) {
      blueUnit3.selected = true;
      mode = "MoveUnit";
      selectedUnit = blueUnit3;
    }
    if (xCoord === redUnit1.x && yCoord === redUnit1.y) {
      redUnit1.selected = true;
      mode = "MoveUnit";
      selectedUnit = redUnit1;
    }
    if (xCoord === redUnit2.x && yCoord === redUnit2.y) {
      redUnit2.selected = true;
      mode = "MoveUnit";
      selectedUnit = redUnit2;
    }
    if (xCoord === redUnit3.x && yCoord === redUnit3.y) {
      redUnit3.selected = true;
      mode = "MoveUnit";
      selectedUnit = redUnit3;
    }
  }
}

function createEmptyGrid() {
  let emptyGrid = [];
  for (let x = 0; x < cols; x++) {
    emptyGrid.push([]);
    for (let y = 0; y < rows; y++) {
      emptyGrid[x].push(0);
    }
  }
  return emptyGrid;
}

function displayGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      }
      else if (grid[y][x] === 2) {
        fill("blue");
      }
      else if (grid[y][x] === 3) {
        fill("red")
      }
      else if (grid[y][x] === 4) {
        fill("green")
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function spawnUnits(){
  // Spawn Blue Units
  blueUnit1 = {
    x: 10,
    y: 25,
    selected: false,
  };
  grid[25][10] = 2;

  blueUnit2 = {
    x: 15,
    y: 25,
    selected: false,
  };
  grid[25][15] = 2;

  blueUnit3 = {
    x: 20,
    y: 25,
    selected: false,
  };
  grid[25][20] = 2;

  // Spawn Red Units

  redUnit1 = {
    x: 10,
    y: 5,
    selected: false 
  };
  grid[5][10] = 3;

  redUnit2 = {
    x: 15,
    y: 5,
    selected: false 
  };
  grid[5][15] = 3;

  redUnit3 = {
    x: 20,
    y: 5,
    selected: false 
  };
  grid[5][20] = 3;

}

function moveUnit(){
  if (mode === "MoveUnit") { 
    displayMoveArea();
  }
}

function displayMoveArea(){
  let incrementY = -1;
  for (let i = 0; i < 4; i++) {
  grid[selectedUnit.y + incrementY][selectedUnit.x] = 4
  incrementY += incrementY;
  } 
}
