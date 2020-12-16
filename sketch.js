var ball
var ground
var shapetomakebox1,shapetomakebox3
var iamtrash1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}
function setup() {
	createCanvas(600,350);

	engine = Engine.create();
	world = engine.world;

ball=createSprite(100,10,35,35)
ball.velocityX=25
ball.velocityY=15
ball.shapeColor='white'
ground =createSprite(400,350,40000,50)
ground.shapeColor='cyan'
shapetomakebox1=createSprite(430,318,80,15)
shapetomakebox1.shapeColor='white'
shapetomakebox3=createSprite(494,275,15,100)
shapetomakebox3.shapeColor='white'
iamtrash1=createSprite(400,250,25,150)
iamtrash1=createSprite(447.5,250,25,150)
iamtrash1=createSprite(495,250,25,150)
iamtrash1=createSprite(446,160,150,25)
iamtrash1=createSprite(446,140,50,25)
iamtrash1=createSprite(447,317.5,120,15)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.collide(ground)
  ball.collide(shapetomakebox3)
  ball.collide(shapetomakebox1)
  text("The Trash Can of the future!(SEE THROUGH)",330,100)
  text("|",446,110)
  text("V",443.5,115)
  drawSprites();
 
}

