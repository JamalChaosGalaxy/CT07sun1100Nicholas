let bird, floor ,roof;// declare objects variable
let bg, base, flapMidImg;// declar the images variables;
let flagUpImg, flapDownImg;
let pipeGroup; // declare var for grp;
let pipe;
let topPipe, bottomPipe;
let gameoverImg, gameoverLabel;
let startScreenLabel;
let startScreenImg;
let startGame = false;
function preload(){
 //load the base the bg and the fpappy bird   
 bg = loadImage('assets/background-day.png');
 base = loadImage('assets/base.png');
 flapMidImg = loadImage('assets/yellowbird-midflap.png');
 flapDownImg = loadImage('assets/yellowbird-upflap.png');
 flagUpImg = loadImage('assets/yellowbird-downflap.png');
 pipe = loadImage('assets/pipe-green.png'); // preloads the image for pipe
 gameoverImg = loadImage('assets/gameover.png');
 startScreenImg = loadImage('assets/message.png');
}

function setup(){
    new Canvas(400, 600);

    bird = new Sprite();
    bird.x = width/2;
    bird.y = 200;
    bird.width = 30;
    bird.height =30;
    bird.img = flapMidImg; 
    bird.visible = false;

    bird.collider = "static";
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
    
    roof = new Sprite(0,-0.5,30,30,'static'); // to prevent the bird from flying over 
    pipeGroup = new Group();

    startScreenLabel = new Sprite(width/2,height/2,50,50,'none');
    startScreenLabel.img=startScreenImg;
}

function draw(){
    //draw the bg
    image(bg,0,0, width, height); 
      if(kb.presses('space') || mouse){
        startGame =true;
        startScreenLabel.visible = false;
        bird.visible = true;
    }
    if(startGame){
        bird.collider = 'dynamic';
        bird.x += 3; // shift bird by 3 pixel
    camera.x = bird.x; //lock the camera position to the bird.x position
    floor.x = camera.x;// lock the floor position to the bird.x position

  

    //next code if startgame flag is true then run all the other code
    
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
        spawnPipePair();// calling the function spawnpipe pair which we crete be;ow
    }

    if(frameCount % 90 === 0){ //trying to spawn the pipes every 1.5seconds
        spawnPipePair();
    }

    for(let pipe of pipeGroup){
        if(pipe.x <-50){ //trying to remove the off screen pipes (pipes that has pass remove it)
            pipe.remove();
        }
    }
    
    if(bird.collides(pipeGroup) || bird.collides(floor) || bird.collides(roof)){ //if my bird sprite hits the pipes or touches the floor loops is paused
        gameoverLabel = new Sprite(width/2,height/2, 192,42); //create new sprite to show the game over label
        gameoverLabel.img = gameoverImg; // call game over image
        gameoverLabel.layer = 100;
        gameoverLabel.x = camera.x;
        noLoop();
    }

    //debuggin info
    fill("blue");
    textSize(14);
    text("Vel.y" + bird.vel.y.toFixed(2), 10,20);
    text("is Moving: " + bird.isMoving, 10,40);
    text("Sleeping: " + bird.Sleeping, 10,60);
    }
    

}

function spawnPipePair(){

    //control the gap and height of the top and bottom pipe
    let gap = 50;
    let midY = random(250, height-250);
    //create top pipe sprite
    topPipe = new Sprite(bird.x+400,midY-gap /2 -200,52,320,'static');//prev x coordinate for pipe is at fixed 400 to make it 
    topPipe.img = pipe;                                               //appear infront of bird we do bird.x +400

    //create bottom pipe sprite
    bottomPipe = new Sprite(bird.x+400,midY+gap /2 +200,52,320,'static');
    bottomPipe.img = pipe;

    pipeGroup.add(bottomPipe);
    pipeGroup.add(topPipe);
    pipeGroup.layer = 0;
}
