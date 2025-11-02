let inputText;
let userText = "Your Text Here";
function setup(){
    createCanvas(600, 400);
    // create Text box to use
    inputText = createInput();
    inputText.position(200, height - 80);
    inputText.input(updateText);
}

function draw(){

}