let inputText;
let userText = "Your Name";
function setup(){
    createCanvas(600, 400);
    // create Text box to use
    inputText = createInput();
    inputText.position(690, 450);
    inputText.input(updateText);
}

function draw(){
    background(220);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(userText, width/2, 180);
}

function updateText(){
    userText = this.value();
}