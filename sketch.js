const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine;
var world;
var caixa, solo;
var parado, mexendo;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    caixa = new Caixa(200, 200, 80, 80);
    solo = new Solo(200, 390, 400, 20);

    rectMode(CENTER);
    ellipseMode(RADIUS);
}


function draw() {
    background(51);
    Engine.update(engine);

    solo.show();
    caixa.show();


}