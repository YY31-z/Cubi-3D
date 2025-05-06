let copie = 50;
let cubi = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  for (let i = 0; i < copie; i++) {
    let cubo = {
      x: random(-2000, 2000),
      y: random(-1000, 1000),
      z: random(-1000, 1000),
      size: 100,
      colore: random(["pink", "yellow", "green"]),
      rotationFunction: random([rotateX, rotateY, rotateZ]),
    };
    cubi.push(cubo);
  }
}

function draw() {
  background("black");
  orbitControl();
  for (let cubo of cubi) {
    push();
    translate(cubo.x, cubo.y, cubo.z);
    cubo.rotationFunction(frameCount / 10);
    fill(cubo.colore);
    box(cubo.size);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
