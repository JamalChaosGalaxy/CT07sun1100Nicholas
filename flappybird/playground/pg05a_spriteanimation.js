let bird, floor;// declare objects variable
let bg, base, flapMidImg;// declar the images variables;
let flagUpImg, flapDownImg;
function preload(){
 //load the base the bg and the fpappy bird   
 bg = loadImage('assets/background-day.png');
 base = loadImage('assets/base.png');
 flapMidImg = loadImage('assets/yellowbird-midflap.png');
 flapDownImg = loadImage('assets/yellowbird-upflap.png');
 flagUpImg = loadImage('assets/yellowbird-downflap.png');
}

function setup(){
    new Canvas(400, 600);

    bird = new Sprite();
    bird.x = width/2;
    bird.y = 200;
    bird.width = 30;
    bird.height =30;
    bird.img = flapMidImg; 

    bird.collider = "dynamic";
    bird.mass = 2;
    bird.drag = 0.02;
    bird.bounciness = 0.5;
    world.gravity.y = 10;

    floor = new Sprite();
    floor.x = 200;
    floor.y = height - 20;
    floor.width = 400;
    floor.height =125;
    floor.collider = "static";
    floor.img = base; 
}

function draw(){
    //draw the bg
    image(bg,0,0, width, height); 
    
    if(kb.presses('space')){
        bird.vel.y = -5;
        bird.sleeping = false;
    }
    
    if(bird.vel.y < -1){
        bird.img = flagUpImg;
        bird.rotation = -30;
    }
    else if(bird.vel.y > 1){
        bird.img = flapDownImg;
        bird.rotation = 30;
    }
    else{
        bird.img = flapMidImg;
        bird.rotation =0;
    }

    //debuggin info
    fill("blue");
    textSize(14);
    text("Vel.y" + bird.vel.y.toFixed(2), 10,20);
    text("is Moving: " + bird.isMoving, 10,40);
    text("Sleeping: " + bird.Sleeping, 10,60);

}