let grid;
// Define Map Size
let rows = 30;
let cols = 30;
// Define Units
let blueUnit1, blueUnit2, blueUnit3, redUnit1, redUnit2, redUnit3 = {};
let unitList = [blueUnit1, blueUnit2, blueUnit3, redUnit1, redUnit2, redUnit3];

let mode;

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
  if (mode === "play"){
    if (xCoord === blueUnit1.x && yCoord === blueUnit1.y) {
      blueUnit1.selected = true;
      mode = "MoveUnit";
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
    for (let units = 0; units <= unitList; units++) {
      if (unitList[i].selected === true) { 
      }
    }     
      //display where selected unit can move
        //check if clicked in that area or outside
          //react accordingly (move the unit or exit move unit mode)
            //set mode back to play
  }
}
