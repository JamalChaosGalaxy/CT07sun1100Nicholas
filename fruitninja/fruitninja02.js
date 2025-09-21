let dojoBG;

function preload(){
    dojoBG = loadImage('assets/dojobackground.png');
}

function setup(){
    new Canvas(800, 600);
    // set gravity to 10;
    world.gravity.y = 10;

    fruitGroup = new Group();
    
    
}

function draw(){
    clear();
    image(dojoBG, 0, 0, width, height);
}