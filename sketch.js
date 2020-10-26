
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground;																									
var dustbin1, dustbin2, dustbin3;
var paper;

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	 var options = 
	 {
		 restitution : 0.8
	 }	
  	var groundOptions = 
  	{
	  	isStatic : true
	  }
	  
  ground = Bodies.rectangle(400, 665, 200, 10, groundOptions);
  World.add(world,ground);

	paper = new Paper (200,450,70);
	dustbin1 = new Dustbin (950,650,200,20);
	dustbin2 = new Dustbin (1050,610,20,100);
	dustbin3 = new Dustbin (850,610,20,100);
}

function draw() {
	Engine.update(engine);  	
	  background("black");	  
	 fill ("brown");
	 rectMode(CENTER);
	 rect(ground.position.x, ground.position.y, 1600, 10);

	 paper.display();
	 dustbin1.display();
	 dustbin2.display();
	 dustbin3.display();

  drawSprites();
}

function keyPressed()
{	 
	if (keyCode === UP_ARROW) 
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y :-90});
	}
}