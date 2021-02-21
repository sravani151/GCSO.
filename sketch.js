var car, wall; 
var speed;
var weight;
var deformation;

function setup() {

  createCanvas(1600,400);

  speed = random(50,110);
  weight= random(400, 1500);

  deformation = (0.5 * weight * speed * speed) / 22500;

  car = createSprite(100, 200, 30, 30);
  car.velocityX = speed;

  wall = createSprite(1400, 200, 50, height/2);

}

function draw() {

  background("0");  
  drawSprites();

  if(wall.x - car.x <= car.width / 2 + wall.width / 2 && car.x - wall.x <= wall.width / 2 + car.width / 2 && deformation > 180){
    car.velocityX = 0;
    car.shapeColor = color(255,0,0);
  }
  else if(wall.x - car.x <= car.width / 2 + wall.width / 2 && car.x - wall.x <= wall.width / 2 + car.width / 2 && deformation <= 180
  && deformation >= 100){
    car.velocityX = 0;
    car.shapeColor =color(255,255,0);
  }
  else if(wall.x - car.x <= car.width / 2 + wall.width / 2 && car.x - wall.x <= wall.width / 2 + car.width / 2 && deformation < 180
    && deformation < 100){
    car.velocityX = 0;
    car.shapeColor =color(0,128,0);
  }
}