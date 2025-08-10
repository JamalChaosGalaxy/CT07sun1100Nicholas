let bird, floor;
let bg, base, flappyMidImg;
let flapupImg, flapdownImg;
let pipeGroup;
function preload(){
    bg = loadImage('assets/background-day.png');
    base = loadImage('assets/base.png');
    flappyMidImg = loadImage('assets/yellowbird-midflap.png');
    flappyupImg = loadImage('assets/yellowbird-upflap.png');
    flappydownImg = loadImage('assets/yellowbird-downflap.png');
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
    floor.x = 200;
    floor.y = height - 20;
    floor.width = 400;
    floor.height = 125;
    floor.collider = "static";
    floor.img = base;

    pipeGroup = new Sprite();
}

function draw(){
    image(bg, 0, 0, width, height);
    if(kb.presses('space')){
        bird.vel.y = -5;
        bird.sleeping = false;
    }

    if(bird.vel.y < -1){
        bird.img = flapupImg;
        bird.rotation = -30;
    }else if(bird.vel.y > 1){
        bird.img = flapdownImg;
        bird.rotation = 30;
    }else{
        bird.img = flappyMidImg;
        bird.rotation = 0;
    }

    if(framecount === 1){
        spamPipePair()// calling the function spampipe pair which we create below
    }
    //debugging  info
    fill("blue");
    textSize(14);
    text("Vel.y" + bird.vel.y.toFixed(2), 10,20);
    text("is Moving" + bird.isMoving, 10,40)
    text("Sleeping" + bird.sleeping, 10,60)
}

function spamPipePair(){
    let gap = 50;
    let mid
}