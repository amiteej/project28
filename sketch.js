
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stone1, groundObj, sling;
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

  stone1 = new stone(200, 340, 30);
  sling1 = new slingShot(stone1.body, { x: 230, y: 390 });

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
  stone1.display();
  sling1.display();

  function mouseDragged() {
    Matter.Body.setPosition(stone1.body, { x: mouseX, y: mouseY });
  }
  
  function mouseReleased() {
    sling1.fly();
  }
  
  function detectCollision(locStone, locMango) {
    stonePos = locStone.body.position;
    mangoPos = locMango.body.position;
  
    var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
  
    if (distance <= locMango.r + locStone.r) {
      Matter.Body.setStatic(locMango.body, false);
    }
  }
  
  function keyPressed() {
    if (keyCode === 32) {
      Matter.Body.setPosition(stone1.body, { x: 230, y: 390 });
      sling.attach(stone1.body);
    }
  }
  

  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
  detectCollision(stone1, mango6);
  detectCollision(stone1, mango7);
  detectCollision(stone1, mango8);

}


