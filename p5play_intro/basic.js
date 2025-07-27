function setup() {
  // create a new canvas
  new Canvas(800, 600);
  background(250);
  textSize(20);
  fill(0);
  // write your codes here
  let a = 5;
  let b = 10;

  let sum = a + b;
  let product = a * b;

  console.log("Sum of a and b is:", sum);
  console.log("Product of a and b is:", product);
  // This lien of code is to display text on the canvas("value",x,y)
  text("Sum of a and b is:", sum,20,30);
  // --- Exercise: Area of Triangle ---
  // write your codes here

  // --- Exercise: Sum of first 10 even numbers ---
  // write your codes here

  // --- Exercise: Age category classification ---
  // write your codes here

  // --- Exercise: Display odd numbers backward using while loop ---
  // write your codes here

  // --- Exercise: Array operations (groceries) ---
  // write your codes here
}

