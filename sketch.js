const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var platform1,platform2,platform3
var box1,box2, box3, box4, box5, box6
var hex,chain


function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    
    
  


    platform1 = new Ground(600, 400, 300, 20)
    box1= new Box(600, 500, 20, 20);
    box2= new Box(610, 500, 70, 70);
    box3= new Box(590, 460, 70, 70);
    box4= new Box(620, 530, 70, 70);
    box5= new Box(580, 565, 70, 70);
    box6= new Box(630, 600, 70, 70);
    box7= new Box(570, 600, 70, 70);

    hex = new Hexagon(200,300,100,100)
    chain = new SlingShot(hex.body, {x:200, y:50})

    

   
}

function draw(){
    background(250, 0, 255);
    Engine.update(engine);
  
    mouseDragged();
    mouseReleased();
    

platform1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();

hex.display();
chain.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(hex.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
    chain.fly();
}
