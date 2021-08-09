const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4, box5, box6, box7, box8, box9, box10,
box11,box12,box13,box14,box15,box16,box17,box18, box19, box20, box21, box22, box23, box24;
var ball, rope;


function setup(){
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,360,50,50);
    box2 = new Box(900,360,50,50);
    box6 = new Box(900,360,50,50);
    box7 = new Box(900,360,50,50);
    box8 = new Box(900,360,50,50);
    box9 = new Box(900,360,50,50);
    box10 = new Box(900,360,50,50);
    box11 = new Box(900,360,50,50);
    box3= new Box(700, 240, 50,50);
    box12= new Box(700, 240, 50,50);
    box13= new Box(700, 240, 50,50);
    box14= new Box(700, 240, 50,50);
    box15= new Box(700, 240, 50,50);
    box16= new Box(700, 240, 50,50);
    box17= new Box(700, 240, 50,50);
    box4= new Box(900, 240, 50,50);
    box5= new Box(800, 120, 50,50);
    box18= new Box(800, 120, 50,50);
    box19= new Box(800, 120, 50,50);
    box20= new Box(800, 120, 50,50);
    box21= new Box(800, 120, 50,50);
    box22= new Box(800, 120, 50,50);
    box23= new Box(800, 120, 50,50);
    box24= new Box(800, 120, 50,50);

    ground = new Ground(600,height,1200,20)

    ball = new Ball(400, 250, 50);

    rope = new Rope(ball.body, {x:400, y:10}) 





    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    ball.display();
    rope.display();

}

function mouseDragged()
{
    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})
}