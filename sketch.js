
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=new Boy(100, 400, 150, 250)
	ground=new Ground(300, 480, 1000, 20)
	tree= new Tree(400, 300, 400, 360)
	stone= new Stone(80, 480, 45, 45)
	launcher= new Launcher(stone.body, {x:50, y:350})
	mango1 = new Mango(430, 230, 50, 50)
	mango2 = new Mango(300, 220, 50, 50)
	mango3 = new Mango(500, 200, 50, 50)
	mango4 = new Mango(550, 300, 50, 50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  boy.display();
  ground.display();
  tree.display();
  stone.display();
  launcher.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}
