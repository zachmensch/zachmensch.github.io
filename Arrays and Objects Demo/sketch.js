// stuff
// zach
// 2019


let shapes = []; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for (let i = 0; i < shapes.length; i++) {
    fill(shapes[i].color);
    ellipse(shapes[i].x, shapes[i].y, shapes[i].radius*2, shapes[i].radius*2);
  }

}

function mousePressed() {
  let someShape = {
    x: mouseX,
    y: mouseY,
    radius: random(10, 50),
    color: color(random(255), random(255), random(255), random(255), random(255))
  };

  shapes.push(someShape);

  
}