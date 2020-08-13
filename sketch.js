
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ldust, rdust, bdust;
var ground;
var paper;
var img,img1;

function preload()
{
	img1 = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic : true
	}

	//Create the Bodies Here.
	ldust = new Trash(500,630,10,100,options);
	rdust = new Trash(700,630,10,100,options);
	World.add(world, rdust);

	ground = Bodies.rectangle( 400,690,800,20,options);
	World.add(world, ground);

	paper = new Paper(20,400,20);

	img = createSprite(600,600,10,10);
	img.addImage(img1);

	Engine.run(engine);
  
}


function draw() {
  background(225);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,800,20);

  ldust.visible = false;
  ldust.visible = false;
  img.scale = 0.5;
  paper.scale = 1;
  
 paper.display();
 drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){ 
	Matter.Body.applyForce(paper.body,paper.body.position,{x:250,y:-250});
}
}