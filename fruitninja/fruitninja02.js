let fruitGroup;
let fruitTypes = [];
let dojoBG;

function preload(){

    let peach = {
        whole:loadImage('assets/peachwhole.png')
    };
    let watermelon = {
        
    }; 

    watermelon = loadImage('assets/watermelonwhole/png');
    peach = loadImage('assets/peachwhole.png');
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