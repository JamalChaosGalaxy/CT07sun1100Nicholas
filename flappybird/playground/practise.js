//create two main functions
let square, circle;
let pipe;
let dynamic_circle;
let mouse_sprite;
function setup(){
    new Canvas(800, 400);

    square = new Sprite(800, 400);
    square.width = 30;
    square.height = 30;

    circle = new Sprite(100, 350, 50);

    pipe = new Group()

}

function draw(){
    if(mouse.presses('left')){
        dynamic_circle = new Sprite()
        dynamic_circle.collider = 'dynamic';
        dynamic_circle.bounciness = 10;
    }
    mouse_sprite = new Sprite();
    mouse_sprite.x = mouse.x;
    mouse_sprite.y = mouse.y;
    mouse_sprite.width = 50;
    mouse_sprite.height = 50;

    while(i < 5){

    }

    for(let j = 0; j < 10; J++){

    }
}
//set up canvas (800, 400)

//declare a var square and create a square sprite
//x = midpoint of canvas y midpoint of canvas

//declare a var circle and create a circle sprite
//x = 100, y= 350, D of your chooisng

//declare a var pipe and create a new group

//left click create a dynamic circle, add om bounciness

//while loop syntax and for loop syntax

//create a sprite at mouse position

//declare