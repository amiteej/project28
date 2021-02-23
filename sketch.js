
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stoneObj, groundObj, sling;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var world, boy;

function preload() {
  boy = loadImage("images/boy.png");
}

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;

  mango1 = new mango(1100, 100, 30);
  mango2 = new mango(1150, 100, 30);
  mango3 = new mango(1250, 130, 30);
  mango4 = new mango(1120, 130, 30);
  mango5 = new mango(1000, 150, 30);
  mango6 = new mango(1210, 130, 30);
  mango7 = new mango(1100, 190, 30);
  mango8 = new mango(1100, 180, 30);

  treeObj = new tree(1050, 580);
  groundObj = new ground(width / 2, 600, width, 20);

  stone = new Stone(200, 340, 30);
  sling = new Slingshot(stone.body, { x: 230, y: 390 });

  Engine.run(engine);
}

function draw() {
  background(230);
  //Add code for displaying text here!
  image(boy, 200, 340, 200, 300);


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  groundObj.display();
  stone.display();
  sling.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function detectCollision(locStone, locMango) {
  stonePos = locStone.body.position;
  mangoPos = locMango.body.position;

  var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);

  if (distance <= locMango.r + locStone.r) {
    Matter.Body.setStatic(locMango.body, false);
  }
}