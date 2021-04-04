const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var ground1, ground2, ground3;

var box1, box2, box3, box4, box5;
var box6, box7, box8;
var box9;  

var box10, box11, box12; 
var box13;

var box14, box15, box16;
var box17; 

var polygon, polygonImg, polygon2;
var slingshot;

function preload(){
   bg = loadImage("bg.jpg")
   polygonImg = loadImage("polygon.png")
}

function setup() {
  createCanvas(1300,650);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(900,300,300,10)
  ground2 = new Ground(500,500,200,10)
  ground3 = new Ground(1000,600,200,10)
 
  box1 = new Box(900,170,40,30)
  box2 = new Box(940,170,40,30)
  box3 = new Box(860,170,40,30)
  box4 = new Box(820,170,40,30)
  box5 = new Box(980,170,40,30)

  box6 = new Box(860,130,40,30)
  box7 = new Box(900,130,40,30)
  box8 = new Box(940,130,40,30)

  box9 = new Box(900,90,40,30)

  box10 = new Box(500,400,40,30)
  box11 = new Box(460,400,40,30)
  box12 = new Box(540,400,40,30)

  box13 = new Box(500,340,40,30)

  box14 = new Box(1000,500,40,30)
  box15 = new Box(960,500,40,30)
  box16 = new Box(1040,500,40,30)

  box17 = new Box(1000,460,40,30)

  polygon = new Box(100,100,40,40)

  slingShot = new SlingShot(this.polygon, {x:100, y:200})

}

function draw() {

  background(bg);  
  Engine.update(engine);
  rectMode(CENTER); 

  ground1.display()
  ground2.display()
  ground3.display()
  
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()

  box6.display()
  box7.display()
  box8.display()

  box9.display()

  box10.display()
  box11.display()
  box12.display()

  box13.display()

  box14.display()
  box15.display()
  box16.display()

  box17.display()
  polygon.display()

  //drawSprites()
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}