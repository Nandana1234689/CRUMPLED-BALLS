
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Render = Matter.Render;
var dustbinObj,groundObject,paper
var world;

function setup() {
	createCanvas(1340, 700);
	rectMode(CENTER);


	 engine = Engine.create();
	 world = engine.world;
	
	 groundObject=new ground(670,670,width,20);
	 dustbinObj=new dustbin(1200,650);
   paper= new Paper()
	

  
}

function draw() {
background(230);
Engine.update(engine);
 rectMode(CENTER);

  paper.display()
  groundObject.display();
  dustbinObj.display();

}

function keyPressed(){
  if(keyCode === 38){
   
  Matter.Body.applyForce(paper.body,paper.body.position,{x:180,y:-195})
}
}




