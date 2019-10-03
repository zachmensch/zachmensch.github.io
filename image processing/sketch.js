// stuff
// zach
// 2019

let sixx;

function preload() {
  sixx = loadImage("assets/sixx.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight)

}

function draw() {
  background(255);
  
  image(sixx, mouseX, mouseY, 300, 500)

  greyScale(sixx)

}

function greyScale(sourceImage) {
  let img = createImage(sourceImage.width, sourceImage.height);

  img.loadPixels();
  sourceImage.loadPixels();

  for (let x = 0; x < sourceImage.width; x++) {
    for (let y = 0; y = sourceImage.height; y++){
      let p = sourceImage.get(x, y);
      img.set(x, y, color(255,0,0));
    }
  }
  
  img.updatePixels()
  return img;

}
