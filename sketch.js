const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(200,300,30,30);
    box2 = new Box(210,100,30,30);
    ground1 = new Ground(200,375,400,5);
}

function draw(){
    background(51,255,255);
    Engine.update(engine);
     box1.display();
     box2.display();
     ground1.display();  
}