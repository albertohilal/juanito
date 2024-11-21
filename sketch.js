let rightArm;
let leftArm;
let body;
let rightRotationPointX = 240; // Coordenada X del punto de rotación del brazo derecho
let rightRotationPointY = 197; // Coordenada Y del punto de rotación del brazo derecho
let leftRotationPointX = 340; // Coordenada X del punto de rotación del brazo izquierdo
let leftRotationPointY = 197; // Coordenada Y del punto de rotación del brazo izquierdo

function preload() {
  rightArm = loadImage("images/right-arm.png"); // Carga la imagen del brazo derecho
  leftArm = loadImage("images/left-arm.png"); // Carga la imagen del brazo izquierdo
  body = loadImage("images/body.png"); // Carga la imagen del cuerpo
}

function setup() {
  createCanvas(596, 842); // Tamaño del canvas para ajustarse a la imagen de fondo
}

function draw() {
  background(220);

  // Dibuja los puntos de rotación como referencia
  fill(255, 0, 0);
  noStroke();
  ellipse(rightRotationPointX, rightRotationPointY, 10, 10); // Dibuja el punto de rotación del brazo derecho
  ellipse(leftRotationPointX, leftRotationPointY, 10, 10); // Dibuja el punto de rotación del brazo izquierdo

  // Calcula el ángulo entre el punto de rotación del brazo derecho y el mouse
  let rightAngle = atan2(
    mouseY - rightRotationPointY,
    mouseX - rightRotationPointX
  );

  // Calcula el ángulo entre el punto de rotación del brazo izquierdo y el mouse (inverso)
  let leftAngle = -atan2(
    mouseY - leftRotationPointY,
    mouseX - leftRotationPointX
  );

  // Dibuja el brazo derecho rotado alrededor de su punto de rotación
  push();
  translate(rightRotationPointX, rightRotationPointY); // Mueve el punto de origen al punto de rotación
  rotate(rightAngle); // Rota el brazo hacia el mouse
  image(rightArm, -240, -197); // Desplaza la imagen para que rote correctamente
  pop();

  // Dibuja el brazo izquierdo rotado alrededor de su punto de rotación
  push();
  translate(leftRotationPointX, leftRotationPointY); // Mueve el punto de origen al punto de rotación
  rotate(leftAngle); // Rota el brazo en sentido inverso al mouse
  image(leftArm, -340, -197); // Desplaza la imagen para que rote correctamente
  pop();
  // Dibuja el cuerpo
  image(body, 0, 0);
}
