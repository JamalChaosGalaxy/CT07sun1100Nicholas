let fruitGroup;
let fruitTypes = [];
let dojoBG;
let fruitHalves;
let score = 0;
let MissedFruits = 0;
let gameState = 'start';
let sliceSound;
let backgroundTrack;

function preload(){
    dojoBG = loadImage('assets/dojobackground.png');
    let peach = {
        whole: loadImage('assets/peachwhole.png'),
        half1: loadImage('assets/peachhalf.png')
    };
    let watermelon = {
        whole: loadImage('assets/watermelonwhole.png'),
        half1: loadImage('assets/watermelonhalf.png')
    }; 
    //store each fruit object into fruit Types array[]
    fruitTypes = [peach, watermelon];
    sliceSound = loadSound("assets/fruit-ninja-combo.mp3");
    backgroundTrack = loadImage("assets/fruit-ninja-bgtrack.mp3");

   
}

function setup(){
    new Canvas(800, 600);
    // set gravity to 10;
    world.gravity.y = 10;

    fruitGroup = new Group();
    fruitHalves = new Group();
    
    // fruittype = [];
}

function draw(){
    clear();
    image(dojoBG, 0, 0, width, height);

    if((kb.presses(' ')||mouse.presses()) && (gameState === 'start')){
        gameState = 'play';
        score = 0;
        fruitGroup.removeAll();
        fruitHalves.removeAll();
    }

    if(gameState === 'start'){
        fill(0, 100);
        rect(0, 0, width, height);
        fill(225);
        textAlign(CENTER, CENTER);
        textSize(48);
        text("Fruit Ninja", width/2, height/2);
        textSize(24);
        text("Press SPACE or Click to Start", width/2, height/2+30);
        return;
    }
    if (frameCount % 60 === 0){// % refers to the remainder so if framecount divided by 120, if the remainder is 0, theb I will call spawnfruit function
        spawnFruit();
    }
    // handles my slicicng effect
    if(mouse.pressing()){
        trail = new Sprite(mouse.x, mouse.y, 10);
        trail.collider = 'none';
        trail.color = "PINK";
        trail.life = 10;
        sliceFruit();
    }
    //trying to access the items in the group
    for(fruits of fruitGroup){
        if(fruits.y > height + 50){
            fruits.remove();
            MissedFruits +=1;
            
        }
        if(MissedFruits ==3){
            noLoop();
        }
    }

    stroke(158, 69, 69);
    fill(255);
    textSize(24);
    textAlign(LEFT, TOP);
    text ("Score: " + score, 10, 10);
    text ("Missed Fruits: " + MissedFruits, 200, 10);
    if(!backgroundTrack.isPlaying()){
        backgroundTrack.loop();
    }

}

function sliceFruit(){
    for(let fruit of fruitGroup){
        if(fruit.sliced){
            continue;
        }
    

        let d = dist(mouse.x, mouse.y, fruit.x, fruit.y);

        if(d < (fruit.d/2) + 5){
            fruit.sliced = true;
            const fx = fruit.x;
            const fy = fruit.y;
            fruit.remove();
            sliceSound.play();
            splitFruit(fx, fy, fruit.type);
            score +=1;
            break;
        }
    }
}

function spawnFruit(){
    // fruitTypes = [peach, watermelon];
    // let peach = {
    //     whole:loadImage('assets/peachwhole.png')
    // };
    //tell the program to randomly pick one fruit object
    let fruitData = random(fruitTypes);
    let randomX = random(300, 500);
    // create a fruit and stroing it in the group
    let fruit = new fruitGroup.Sprite(randomX, height+ 20, 40);
    //basically loading the image adnt eh image is sored in the array and the key to the image values
    //is whole hence its fruitData.whole (arrayname.whichkey)
    fruit.image = fruitData.whole;
    //telling the program that it is going to be a random fruit form the array
    fruit.type = fruitData;
    //setting the game physics the numbers can play around
    fruit.vel.y = random(-10, - 14);
    fruit.vel.x = random(-2, 2);
    fruit.friction = 0;
}

function splitFruit(x, y, fruitData){
    // left half 
    let left = new fruitHalves.Sprite(x-10, y, 40, 40);
    left.img = fruitData.half1;
    left.vel.x = -3;
    left.vel.y = random(-15, -2);
    left.rotationSpeed = -5;
    left.life = 30;



    // right half
    let right = new fruitHalves.Sprite(x+10, y, 40, 40);
    right.img = fruitData.half1;
    right.vel.x = -3;
    right.vel.y = random(-5, -2);;
    right.rotationSpeed = 5;
    right.life = 30;

}