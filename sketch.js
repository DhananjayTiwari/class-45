var bg,bgImg;
var player;
var shooterImg; 
var shooter_shooting;


function preload(){
  bgImg = loadImage("assets/bg.jpeg");
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");


}

function setup(){
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(windowWidth/2-20,windowHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale = 1.1;

}

function draw(){
  background(0);
  drawSprites();

}
