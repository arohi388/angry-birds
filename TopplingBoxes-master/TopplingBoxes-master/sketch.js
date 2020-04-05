const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,380,50,50);
    box2 = new Box(500,380,50,50);
    ground = new Ground(500,height,1000,20)
    Pig1  = new Pig(450,380)
    Log1 = new Log(450,360,180,PI/2)
    Log2 = new Log(450,330,180,PI/2)
    box3 = new Box(400,340,50,50)
    box4 = new Box(500,340,50,50)
    Pig2 = new Pig(450,340)
    box5 = new Box(450,300,50,50)
    log3= new Log(420,300,100,PI/7)
    log4 =new Log(480,300,100,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    Pig1.display();
    Log1.display();
    box3.display();
    box4.display();
    box5.display();
    Log2.display();
    Pig2.display();
    log3.display();
    log4.display();
    
}