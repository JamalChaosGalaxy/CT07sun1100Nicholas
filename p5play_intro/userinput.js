let inputText;
let inputText2;
let userName = "Your Name";
let userAge = "Age";
function setup(){
    createCanvas(600, 400);
    // create Text box to use
    inputText = createInput();
    inputText.position(690, 450);
    inputText2 = createInput();
    inputText2.position(690, 450);
    inputText.input(updateText);
}

function draw(){
    background(220);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(userName, width/2, 180);
}

function updateText(){
    userName = this.value();
}