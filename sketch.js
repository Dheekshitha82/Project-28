
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
const ElasticConstraint=Matter.ElasticConstraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var  mango1, mango2, mango3, mango4, mango5

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	mango1=new mango(1100,100,30);
	mango2=new mango(1000,150,30);
	mango3=new mango(860,230,30);
	mango4=new mango(1175,200,30);
	mango5=new mango(1235,280,30);

  stone1 = new stone(235, 410, 30);
  launch = new Launch(stone1.body, {x:235, y:410})


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();
  launch.display();
  groundObject.display();
  detectCollision(stone1, mango1)
  detectCollision(stone1, mango2)
  detectCollision(stone1, mango3)
  detectCollision(stone1, mango4)
  detectCollision(stone1, mango5)

}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
    launch.fly()
}
function detectCollision(a,b){
a1 = a.body.position
b1 = b.body.position
var distance = dist(b1.x, b1.y, a1.x, a1.y)
if(distance<=b.r+a.r){
  Matter.Body.setStatic(b.body, false)
}
}