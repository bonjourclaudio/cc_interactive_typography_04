let font;

let tilesX = 50;
let tilesY = 50;

let xoff = 0;
let oscillator = 0;

let pg;

function preload() {
  font = loadFont("/assets/Maax Mono - Bold Italic-205TF.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  pg = createGraphics(width, height);
  pg.textFont(font);
  pg.textAlign(CENTER, CENTER);
  pg.textSize(width);
  pg.fill(255);
  pg.text('↖', pg.width / 2, pg.height / 2);
}

function draw() {
  background(0);


  let tileW = floor(width / tilesX);
  let tileH = floor(height / tilesY);

  oscillator = floor(sin(frameCount * 0.05) * 100);


  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {


      let nX = noise(xoff + x * 0.1) * oscillator;
      let nY = noise(xoff + y * 0.1) * oscillator;


      let posX = x * tileW + nX;
      let posY = y * tileH + nY;

      copy(pg, 0, 0, pg.width, pg.height, posX, posY, tileW, tileH);

      fill("white")
      stroke(0);
      strokeWeight(3);
      textSize(64)

      text("↗", posX - dist(posX, posY, mouseX, mouseY), posY + dist(posX, posY, mouseX, mouseY))
    }
  }


  xoff += 0.0002;
}
