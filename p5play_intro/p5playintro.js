let ball;
let box;
let x;

function setup() {
  // Set up the canvas
  new Canvas(800, 400);
  background(250); //background color
  world.gravity.y=10;

  let floor = new Sprite(400, 390, 800, 20, 'static');
  // ball = new Sprite();
  // Basic shape testing
  // fill('skyblue');//fill the color
  // stroke('pink');// create the border color
  // strokeWeight(10);// border thickness
  // write your codes here
  circle(30, 30, 50);// circle (x, y, diameter)
  rect(50, 50, 100, 200);// rectangle (x, y, width, height)
  //circle(760, 30, 50);
  //circle(760, 370, 50);
  // End Basic shape testing

   // Create a bouncing ball sprite
   ball = new Sprite();
   ball.x = 400;
   ball.y = 200;
   ball.diameter = 40;
   ball.color = 'red';
   ball.vel.x = 3;// velocity x axis
   ball.vel.y = 3;// velocity y axis
   ball.bounciness = 1;
   ball.collider = 'dynamic';// makes the ball move and not staitonary
  

   // write your codes here
   box = new Sprite();
   box.w = 30;
   box.h = 30;
   box.x = 30;
   box.y = 300;
   box.color = 'green';
  //  ball.collider = 'static';
   box = new Sprite();
   box.w = 30;
   box.h = 30;
   box.x = 30;
   box.y = 300;
   box.color = 'green';
   
   ball = new Sprite();
   ball.x = 400;
   ball.y = 200;
   ball.diameter = 40;
   ball.color = 'red';
}

function draw() {
  // write your codes here
  background(240);

  //show coordinates for the sprites
  fill(0);
  textSize(10);
  text("Ball: ("+ int(ball.x)+","+ int(ball.y)+")", 10,20); 
  text("Mouse: ("+mouseX + "," +mouseY + ")", 10,40 ); 

  if (ball.x < 0 + ball.diameter / 2 || ball.x > width - ball.diameter / 2){
    ball.vel.x *= -1; // change =x to -x or vice versa
  }

  if (ball.y < 0 + ball.diameter / 2 || ball.y > width - ball.diameter / 2){
    ball.vel.y *= -1; // change =y to -y or vice versa
  }

  if (mouse.presses('left')){
    xo = new Sprite(mouse.x, mouse.y, 30);
    xo.collider = 'dynamic';
    xo.bounciness = 10.0; 
  }
  if(mouse.presses('right')){
    xo = new Sprite();
    xo.collider = 'dynamic';

  box.x = mouseX;
  box.y = mouseY;
  }
}