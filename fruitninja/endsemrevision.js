let square;
let background;
let squarethatcanfly;
function preload(){
    background = loadImage('assets/background-day.png');
    squareImg = loadImage('assets/redbird-midflap.png');
}

function setup(){

    new Canvas(500, 700);
    world.gravity.y = 10;
    square = new Sprite(width/2, height/2, width, height);
    square.x = 50;
    square.y = 50;
    square.height = 10;
    square.width = 10;
    square.img = squareImg;
    square.collider = "static";

    squarethatcanfly = new Sprite()
    squarethatcanfly.x = 150;
    squarethatcanfly.y = 150;
    squarethatcanfly.height = 10;
    squarethatcanfly.width = 10;
    squarethatcanfly.collider = "dynamic";
    squarethatcanfly.bounciness = 10;
}

function draw(){
    image(background, 0, 0, width, height);

     
    if(mouse.presses('') || kb.presses('')){
        squarethatcanfly.vel.y = -5;
        squarethatcanfly.sleeping = false;
    }

}