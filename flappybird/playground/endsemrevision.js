let square;
let background;
let squar1;
function preload(){
    background = loadImage('assets/background-day.png');
    square1 = loadImage('assets/redbird-midflap.png');
}

function setup(){

    new Canvas(500, 700);
    world.gravity.y = 10;
    square = new Sprite(width/2, height/2, 20, 20);
    square.img = square1;
 

    // world.gravity.y = 10;
    // new Canvas(500, 700);
    // square = new Sprite()
    // square.x = 50;
    // square.y = 50;
    // square.height = 10;
    // square.width = 10;
    // square.img = squareImg;
    // square.collider = "static";

    // squarethatcanfly = new Sprite()
    // squarethatcanfly.x = 150;
    // squarethatcanfly.y = 150;
    // squarethatcanfly.height = 10;
    // squarethatcanfly.width = 10;
    // squarethatcanfly.collider = "dynamic";
    // squarethatcanfly.bounciness = 10;
}

function draw(){
    image(background, 0, 0, width, height);

     
    if(mouse.presses('') || kb.presses('space')){
        square.vel.y = -5;
    }

}

// things to review
// array
// let xxx = [item1, item2];

//when o gove you a code you must need to know the expected output
// etc given an array and i run a for loop, u need to tell me whats the output and what will be drawn on the canvas

// canvas coordinates (500, 700)
// top left(0,0)
//top right (500, 0)

//what does preload actually do 
//how to add a new item into an array

// array push
// setup {console.log("hi")}
// draw {console.log("bye")}

// lets say this runs for 5 frames what is printed

//hi will always be printed first and once only

//he bye bye bye bye bye

// how to access array value