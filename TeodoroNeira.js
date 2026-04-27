function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {

    // Vermelho
    fill(255, 0, 0); 
    noStroke();
    rect(98, 0, 302, 290);

    // Azul
    fill(0, 0, 255);
    noStroke();
    rect(0, 300, 86, 100);

    // Amarelo
    fill(255, 255, 0);
    noStroke();
    rect(368, 357, 32, 43);

    // Linha horizontal 1
    fill(0);
    noStroke();
    rect(0, 288, 400, 12);

    // Linha horizontal 2
    fill(0);
    noStroke();
    rect(0, 118, 86, 25);

    // Linha vertical 1
    fill(0);
    noStroke();
    rect(86, 0, 12, 400);

    // Linha vertical 2
    fill(0);
    noStroke();
    rect(353, 300, 15, 100);

    // Linha vertical 3
    fill(0);
    noStroke();
    rect(354, 340, 46, 19);
}