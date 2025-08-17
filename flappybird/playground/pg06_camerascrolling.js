let bird, floor;// declare objects variable
let bg, base, flapMidImg;// declar the images variables;
let flagUpImg, flapDownImg;
let pipeGroup; // declare var for grp;
let pipe;
let topPipe, bottomPipe;
function preload(){
 //load the base the bg and the fpappy bird   
 bg = loadImage('assets/background-day.png');
 base = loadImage('assets/base.png');
 flapMidImg = loadImage('assets/yellowbird-midflap.png');
 flapDownImg = loadImage('assets/yellowbird-upflap.png');
 flagUpImg = loadImage('assets/yellowbird-downflap.png');
 pipe = loadImage('assets/pipe-green.png'); // preloads the image for pipe
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

    pipeGroup = new Group();
}

function draw(){
    //draw the bg
    image(bg,0,0, width, height); 

    bird.x += 3; // shifts bird by 3 pixels
    camera.x = bird.x; // lock the camera pos to teh bird.x pos
    floor.x = camera.x; // lock the floor pos to the bird.x position
    
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
    
    if(frameCount === 1){
        spawnPipePair()// calling the function spawnpipe pair which we crete be;ow
    }

    if(frameCount % 90 === 0){//Spawns pipe every 1.5 seconds
        spawnPipePair()
    }

    for(let pipe of pipeGroup){
        if(pipe.x <- 50){
            pipe.remove();
        }
    }
    //debuggin info
    fill("blue");
    textSize(14);
    text("Vel.y" + bird.vel.y.toFixed(2), 10,20);
    text("is Moving: " + bird.isMoving, 10,40);
    text("Sleeping: " + bird.Sleeping, 10,60);

}

function spawnPipePair(){

    //control the gap and height of the top and bottom pipe
    let gap = 50;
    let midY = height /2;
    //create top pipe sprite
    topPipe = new Sprite(bird.x+400,midY-gap /2 -200,52,320,'static');//prev x cooridnates for pipe is at a fixed 400 to make it 
    topPipe.img = pipe;                                             

    //create bottom pipe sprite
    bottomPipe = new Sprite(400,midY+gap /2 +200,52,320,'static');
    bottomPipe.img = pipe;

    pipeGroup.add(bottomPipe);
    pipeGroup.add(topPipe);
    pipeGroup.layer = 0;
}
