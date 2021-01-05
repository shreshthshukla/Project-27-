
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1;
var roof;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	ball1 = new Bob(600,450);
	ball2 = new Bob(650,450);
	ball3 = new Bob(700,450);
	ball4 = new Bob(500,450);
	ball5 = new Bob(550,450);
	roof = new Roof();
	rope1 = new Rope(ball1.body,roof.body);
	rope2 = new Rope(ball2.body,roof.body);
	rope3 = new Rope(ball3.body,roof.body);
	rope4 = new Rope(ball4.body,roof.body);
	rope5 = new Rope(ball5.body,roof.body);
}


function draw() {
//   rectMode(CENTER);
  background("white");
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



