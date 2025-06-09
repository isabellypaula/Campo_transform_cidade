let transition = 0;
let transitioning = false;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(lerpColor(color('#87ceeb'), color('#a9a9a9'), transition)); // Céu azul → cinza

  drawGround();
  drawSunToMoon();
  drawTreesToBuildings();

  if (transitioning && transition < 1) {
    transition += 0.007;
  }
}

function mousePressed() {
  transitioning = true;
}

function drawGround() {
  let green = lerpColor(color('#228B22'), color('#2f4f4f'), transition);
  fill(green);
  noStroke();
  rect(0, height * 0.75, width, height * 0.25); // chão
}

function drawSunToMoon() {
  let sunX = lerp(width * 0.2, width * 0.8, transition);
  let sunColor = lerpColor(color('#FFD700'), color('#D3D3D3'), transition);
  fill(sunColor);
  noStroke();
  ellipse(sunX, height * 0.25, 60, 60);
}

function drawTreesToBuildings() {
  for (let i = 0; i < width; i += 100) {
    let inter = map(i, 0, width, 0, 1);
    let t = lerp(1, 0, transition); // mais árvore no início

    if (random() < t) {
      drawTree(i + 50, height * 0.75);
    } else {
      drawBuilding(i + 10, height * 0.75);
    }
  }
}

function drawTree(x, groundY) {
  fill('#8B4513'); // tronco
  rect(x - 5, groundY - 40, 10, 40);
  fill('#006400'); // copa
  ellipse(x, groundY - 50, 40, 40);
}

function drawBuilding(x, groundY) {
  fill('#555');
  let h = random(60, 120);
  rect(x, groundY - h, 40, h);
}
