/**
 * @typedef {import("./p5/types").Graphics} Graphics
 *
 * @typedef {Object} Cubo
 * @property {number} x
 * @property {number} y
 * @property {number} z
 * @property {number} size
 * @property {string} color
 * @property {function} rotationFunction
 */

//

/** @type {Cubo[]} */
let cubi = [];

let copie = 50;

/** @type {Graphics} */
let g;

//
let font;
function preload() {
  font = loadFont("./CASTELAR.ttf");
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  g = createGraphics(200, 200);

  let distanza = 600;

  for (let i = 0; i < copie; i++) {
    let cubo = {
      x: random(-distanza, distanza),
      y: random(-distanza, distanza),
      z: random(-distanza, distanza),
      size: 100,
      color: random(["pink", "yellow", "blue"]),
      rotationFunction: random([rotateX, rotateY]),
    };
    cubi.push(cubo);
  }
}

function draw() {
  background("MediumPurple");
  orbitControl();
  rotateY(frameCount * 0.01);
  noStroke();

  g.background("Yellow");
  g.textFont(font);
  g.text("cumer", 0, g.height);
  g.textSize(g.width);
  g.fill("white");

  texture(g);

  for (let cubo of cubi) {
    push();
    translate(cubo.x, cubo.y, cubo.z);

    let velocita = frameCount * 0.05;
    cubo.rotationFunction(velocita);
    rotateZ(velocita);

    cone(cubo.size);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  save("gjh.png");
}
