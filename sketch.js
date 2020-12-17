
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(700, 680, 1400, 20)

	paper = new Paper(100, 100, 30)

	bottom = new Dustbin(1000, 650, 200, 20)
	right = new Dustbin(1100,600,20, 100)
	left = new Dustbin(900, 600, 20, 100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ground.display();
	paper.display();
	bottom.display();
	left.display();
	right.display();

  drawSprites();
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100})
	}	
}


