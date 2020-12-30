const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	BGimage=loadImage("BG.PNG");
  }

function setup() {
    createCanvas(1000, 400);
	engine = Engine.create();
    world = engine.world;

 ground = new Ground(500,399,1000,20)
base = new Ground(510,350,220,5)
base2 = new Ground(775,200,160,5)

           // base
// level first
box1 = new Box(420,327);
box2 = new Box(450,327);
box3 = new Box(480,327);
box4 = new Box(510,327);
box5 = new Box(540,327);
box6 = new Box(570,327);
box7 = new Box(600,327);

// level two
box8 = new Box(450,286);
box9 = new Box(480,286);
box10 = new Box(510,286);
box11 = new Box(540,286);
box12 = new Box(570,286);

// level third
box13 = new Box(480,245);
box14 = new Box(510,245);
box15 = new Box(540,245);

// top level
box16 = new Box(510,204)

        // base2

  // level third
  box17 = new Box(715,177);
  box18 = new Box(745,177);
  box19 = new Box(775,177);
  box20 = new Box(805,177);
  box21 = new Box(835,177);

  // level second
box22 = new Box(745,136);
box23 = new Box(775,136);
box24 = new Box(805,136);

  // top level
  box25 = new Box(775,96)

  polygon1 = new Polygon(110, 100, 50, 50);

slingShot = new Slingshot(polygon1.body,{x:100,y:200});

}

function draw(){
    background(BGimage);

    Engine.update(engine);

    ground.display();
    base.display();
    base2.display();

     // base
    fill("pink");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    fill("cyan");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
   
    fill("red");
    box13.display();
    box14.display();
    box15.display();

    fill("blue");
    box16.display();

     //base2

     fill("green");
     box17.display();
     box18.display();
     box19.display();
     box20.display();
     box21.display();

     fill("white");
     box22.display();
     box23.display();
     box24.display();

     fill("orange");
     box25.display();

     polygon1.display();
     slingShot.display();

 text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY)
}

function mouseDragged() {
    Matter.Body.setPosition(polygon1.body, { x: mouseX, y: mouseY })
  }
  
  function mouseReleased() {
    slingShot.fly();
  }
  
  function keyPressed() {

    if (keyCode === 32) {
    slingShot.attach(polygon1.body);
    }

  }