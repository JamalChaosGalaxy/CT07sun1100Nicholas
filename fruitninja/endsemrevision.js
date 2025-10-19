function preload(){
    background = loadImage("assets/background-day.png");
    
}

function setup(){
    new Canvas(500, 700);
    square = new Sprite()
    square.x = 50;
    square.y = 50;
    square.height = 10;
    square.width = 10;
}

function draw(){
    Image(background, 0, 0, width, height);
}