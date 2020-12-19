const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var gameEngine,gameWorld;
var ball;
var ground;

function setup() {
  createCanvas(800,400);
 


  gameEngine=Engine.create();
  gameWorld=gameEngine.world;

  var option={
    restitution:1
  }

  ball=Bodies.circle(200,200,25,option);
  World.add(gameWorld,ball);
  console.log(ball);

  ground=Bodies.rectangle(width/2,380,width,20,{isStatic:true});
  World.add(gameWorld,ground);
}

function draw() {
  background(0); 
  Engine.update(gameEngine); 
  ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,25,25);

 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,width,20);
}