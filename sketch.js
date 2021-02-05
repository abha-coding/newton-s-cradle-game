
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//roof = new Roof(400,200,400,40);

	//bob1 = new Bob(260,600);
	bob2 = new Bob(300,600);
	bob3 = new Bob(400,600);
	//bob4 = new Bob(480,600);
	//bob5 = new Bob(540,600);

	rope1 = new Rope(bob3.body,{x:420,y:200},0);
	//rope2 = new Rope(bob4.body,{x:400,y:200},70);
	//rope3 = new Rope(bob5.body,{x:400,y:200},140);
	rope4 = new Rope(bob2.body,{x:400,y:200},-60);
	//rope5 = new Rope(bob1.body,{x:400,y:200},-140);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //roof.display();

  rope1.display();
  //rope2.display();
  //rope3.display();
  rope4.display();
  //rope5.display();

  //bob1.display();
  bob2.display();
  bob3.display();
  //bob4.display();
  //bob5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===32){
		//Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-300});
	}
}