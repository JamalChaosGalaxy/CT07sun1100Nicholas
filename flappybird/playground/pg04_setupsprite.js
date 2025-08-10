let bird, floor;
let bg, base, flappyMidImg;
function preload(){
    bg = loadImage('assets/background-day.png');
    base = loadImage('assets/base.png');
    flappyMidImg = loadImage('assets/yellowbird-midflap.png');
}
function setup(){
    new Canvas(400, 600);

    bird = new Sprite();
    bird.x = width/2;
    bird.y = 200;
    bird.width = 30;
    bird.height = 30;
    bird.img = flappyMidImg;

    bird.collider = "dynamic";
    bird.mass = 2;
    bird.drag = 0.02;
    bird.bounciness = 0.5;
    world.gravity.y = 10;

    floor = new Sprite();
    
}

function draw(){
    image(bg, 0, 0, width, height);
}