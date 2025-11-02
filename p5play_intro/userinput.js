let inputText;
let inputText2;
let userName = "Your Name";
let userAge = "Age";
let textone = "Your Name";
let texttwo = "Your Age";
function setup(){
    createCanvas(600, 400);
    // create Text box to use
    inputText = createInput();
    inputText.position(690, 450);
    inputText.input(updateText);
    inputText2 = createInput();
    inputText2.position(690, 470);
    inputText2.input(updateText2);

}

function draw(){
    background(220);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(userName, width/2, 180);
    text(userAge, width/2, 210);
    textSize(15);
    text(textone, 180, 300);
    text(texttwo, 180, 320);
}

function updateText(){
    userName = this.value();
}

function updateText2(){
    userAge = this.value();
}
