let fruitGroup;
let fruitTypes = [];
let dojoBG;

function preload(){

    let peach = {
        whole:loadImage('assets/peachwhole.png')
    };
    let watermelon = {
        whole:('assets/watermelonwhole/png')
    }; 
    fruitTypes = [peach, watermelon];
    dojoBG = loadImage('assets/dojobackground.png');
}

function setup(){
    new Canvas(800, 600);
    // set gravity to 10;
    world.gravity.y = 10;

    fruitGroup = new Group();
    
    fruittype = [];
}

function draw(){
    clear();
    image(dojoBG, 0, 0, width, height);
}

function spawnFruit(){
    //tell the program to randomly pick one fruit object
    let fruitData = random(fruitTypes);
    let randomX = random(300, 500);
    let fruit = new fruitGroup.Sprite(randomX, height+ 20, 40);
    fruit.image = fruitData.whole;
    fruit.type = fruitData;
    fruit.vel.y = random(-10, - 14);
    fruit.vel.x = 
    fruit.friction = 0;
}