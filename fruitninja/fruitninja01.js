let dojoBG;

function preload(){
    dojoBG = preload("assets/dojobackground.png");
}

function setup(){
    new Canvas(800, 600)
}

function draw(){
    image(dojoBG, 800, 600,innerWidth, height);
}