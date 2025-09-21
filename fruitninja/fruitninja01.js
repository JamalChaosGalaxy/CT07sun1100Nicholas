let dojoBG;

function preload(){
    dojoBG = loadimage('assets/dojobackground.png');
}

function setup(){
    new Canvas(800, 600);
}

function draw(){
    image(dojoBG, 0, 0, width, height);
}