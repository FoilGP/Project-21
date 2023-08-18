const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball, ball_options;
var up_button, right_button;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  wall = new Ground(260, 320, 20, 120);
  up_button = createImg("up.png")
  up_button.position (154, 169)
  up_button.size(30, 30)
  up_button.mouseClicked (applyupforce)

  ball_options = {restitution: -10};

  ball = Bodies.circle(20, 120, 10, ball_options);
  World.add(world, ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function applyupforce() {Matter.Body.applyForce (ball, {x:0, y:0}, {x:0.0045, y:-0.019},)}


function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  wall.show();

  ellipse(ball.position.x, ball.position.y, 20, 20, ball_options);

  Engine.update(engine);
}

