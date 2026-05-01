function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {

  retangulos(98, 0, 302, 290, color(255, 0, 0));      // Vermelho
  retangulos(0, 300, 86, 100, color(0, 0, 255));      // Azul
  retangulos(368, 357, 32, 43, color(255, 255, 0));   // Amarelo

  retangulos(0, 288, 400, 12, color(0));         // Linha horizontal 1
  retangulos(0, 118, 86,  25, color(0));          // Linha horizontal 2
  retangulos(86, 0, 12, 400, color(0));          // Linha vertical 1
  retangulos(353, 300, 15, 100, color(0));       // Linha vertical 2
  retangulos(354, 340, 46, 19, color(0));        // Linha vertical 3
}

function retangulos(x, y, w, h, c) {
  if (mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h) {
    fill(255 - (red(c) + 100), 255 - (green(c) + 100), 255 - (blue(c) + 100));
  } else {
    fill(c);
  }
  noStroke();
  rect(x, y, w, h);
}