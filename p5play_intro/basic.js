function setup() {
  // create a new canvas
  new Canvas(800, 600);
  background(250);
  textSize(25);
  fill(0);
  // write your codes here
  // let a = 5;
  // let b = 10;

  // let sum = a + b;
  // let product = a * b;

  // console.log("Sum of a and b is:", sum);
  // console.log("Product of a and b is:", product);
  // // This lien of code is to display text on the canvas("value",x,y)
  // text("Sum of a and b is:"+sum,20,30);
  // text("Product of a and b is:"+product,30,50);
  // --- Exercise: Area of Triangle ---
  // write your codes here

  // --- Exercise: Sum of first 10 even numbers ---
  // write your codes here
  let base = 10;
  let height = 5;
  let area = 0.5 * base * height;

  console.log("The area of the triangle is:", area);
  text("The area of the triangle is: "+area,20,30);
  // --- Exercise: Age category classification ---
  // write your codes here
  let square_width = 10;
  let square_length = 10;
  let square_area = square_length * square_length;

  text("The area of the square is: " + square_area, 20,70);
  console.log("The area of the square is:", square_area)
  // --- Exercise: Display odd numbers backward using while loop ---
  // write your codes here
  let pi = 3.14;
  let radius = 9;
  let circle_area = pi * (radius * radius)
  // --- Exercise: Array operations (groceries) ---
  // write your codes here
}

