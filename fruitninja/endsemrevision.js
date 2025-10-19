let square;
let background;
let squarethatcanfly;
function preload(){
    background = loadImage('assets/background-day.png');
    squareImg = loadImage('assets/redbird-midflap.png');
}

function setup(){
    new Canvas(500, 700);
    square = new Sprite()
    square.x = 50;
    square.y = 50;
    square.height = 10;
    square.width = 10;
    square.img = squareImg;
    floor.collider = "static";

    squarethatcanfly = new Sprite()
    squarethatcanfly.x = 50;
    squarethatcanfly.y = 50;
    squarethatcanfly.height = 10;
    squarethatcanfly.width = 10;
    square.img = squareImg;
    floor.collider = "static";
}

function draw(){
    image(background, 0, 0, width, height);
}