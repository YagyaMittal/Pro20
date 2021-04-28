var car, wall;
var speed, weight;
var d;
var c;
function setup() {
  createCanvas(1600,400);
  speed = random(44, 90);
  weight = random(400, 1500);
  car = createSprite(50, 200 ,50, 50); 
  wall = createSprite(1500, 200, 60, height/2);
}

function draw() {
  background(255,255,255); 
 
  car.velocityX = speed;

  if(wall.x - car.x < (car.width + wall.width)/2) {
    
    car.velocityX = 0;

    d = (0.5*weight*speed*speed)/22500;

  }
  if(d < 100){
    car.shapeColor = color(0, 255, 0);
  }
  if(d > 100 && d < 180){
    car.shapeColor = color(130, 130, 0);
  }
  if(d > 180){
    car.shapeColor = color(255, 0, 0);
  } 

  drawSprites();
}