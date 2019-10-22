// Arrays and Objects Demo

let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = shapes.length - 1; i > 0; i--) {

    if (shapes[i].y - shapes[i].radius > height) {
      shapes.splice(i, 1)
    }
    else {
      shapes[i].y += shapes[i].dy;

      noStroke();
      fill(shapes[i].color);
      ellipse(shapes[i].x, shapes[i].y, shapes[i].radius*2, shapes[i].radius*2);
    }
  }
}

function mousePressed() {
  let someShape = {
    x: mouseX,
    y: mouseY,
    radius: random(10, 50),
    color: color(random(255), random(255), random(255), random(255)),
    dy: random(1, 20)
  };

  shapes.push(someShape);
}