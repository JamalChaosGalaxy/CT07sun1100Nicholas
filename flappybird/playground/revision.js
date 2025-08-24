//create the two required must have functions
let ball;//declare var ball
let floor;
function setup(){
    //create canvas 800 x 800

    new Canvas(800, 800);

    world.gravity.y = 10;//set gravity (10)
    // create floor sprite 
    floor = new Sprite(0, 800, 600, 30);

}

function draw(){
    if(mouse.presses()){
        //create ball sprite x = 10, y = 10, diameter = 20
        ball = new Sprite(10,10,20)
    }
}