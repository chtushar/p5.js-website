/* @name Herencia
 * @description Una clase puede ser definida usando otra clase como base.
 * En la terminología de la programación orientada a objetos, una clase
 * puede heredar campos y métodos de otra. Un objeto que hereda
 * de otro se llama subclase, y el objeto del que hereda se
 * llama superclase. Una subclase extiende la superclase.
 */
let spots, arm;

function setup() {
  createCanvas(640, 360);
  arm = new SpinArm(width/2, height/2, 0.01);
  spots = new SpinSpots(width/2, height/2, -0.02, 90.0);
}

function draw() {
  background(204);
  arm.update();
  arm.display();
  spots.update();
  spots.display();
}

class SpinArm {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.speed = s;
    this.angle = 0.0;
  }

  update() {
    this.angle += this.speed;
  }

  display() {
    strokeWeight(1);
    stroke(0);
    push();
    translate(this.x, this.y);
    this.angle += this.speed;
    rotate(this.angle);
    line(0, 0, 165, 0);
    pop();
  }
}

class SpinSpots {
  constructor(x, y, s, d) {
    this.x = x;
    this.y = y;
    this.speed = s;
    this.dim = d;
    this.angle = 0.0;
  }

  update() {
    this.angle += this.speed;
  }

  display() {
    noStroke();
    push();
    translate(this.x, this.y);
    this.angle += this.speed;
    rotate(this.angle);
    ellipse(-this.dim/2, 0, this.dim, this.dim);
    ellipse(this.dim/2, 0, this.dim, this.dim);
    pop();
  }
}
