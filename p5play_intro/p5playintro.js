let ball;
let box;
function setup() {
  // Set up the canvas
  new Canvas(800, 400);
  background(250); //background color
  // ball = new Sprite();
  // Basic shape testing
  fill('skyblue');//fill the color
  stroke('pink');// create the border color
  strokeWeight(10);// border thickness
  // write your codes here
  circle(30, 30, 50);// circle (x, y, diameter)
  rect(50, 50, 100, 200);// rectangle (x, y, width, height)
  //circle(760, 30, 50);
  //circle(760, 370, 50);
  // End Basic shape testing

   // Create a bouncing ball sprite
   ball = new sprite();
   ball.x = 400;
   ball.y = 200;
   ball.diameter = 40;
   // write your codes here

}

function draw() {
  // write your codes here
}