let fruitGroup;
let fruitTypes = [];
let dojoBG;

function preload(){
    dojoBG = loadImage('assets/dojobackground.png');
    let peach = {
        whole: loadImage('assets/peachwhole.png')
    };
    let watermelon = {
        whole: loadImage('assets/watermelonwhole.png')
    }; 
    fruitTypes = [peach, watermelon];
   
}

function setup(){
    new Canvas(800, 600);
    // set gravity to 10;
    world.gravity.y = 10;

    fruitGroup = new Group();

    
    // fruittype = [];
}

function draw(){
    clear();
    image(dojoBG, 0, 0, width, height);
    if (frameCount % 60 === 0){// % refers to the remainder so if framecount divided by 120, if the remainder is 0, theb I will call spawnfruit function
        spawnFruit();
    }
    // handles my slicicng effect
    if(mouse.pressing()){
        trail = new Sprite(mouse.x, mouse.y, 10);
        trail.collider = 'none';
        trail.color = "red";
        trail.life = 10;
    }

    sliceFruit();
}

function sliceFruit(){
    for(let fruit of fruitGroup){
        if(fruit.sliced){
            continue;
        }
    }

    let d = dist(mouse.x, mouse.y, fruit.x, fruit.y);

    if(d < (fruit.d/2)){
        fruit.sliced = true;
        fruit.remove;
    }
}

function spawnFruit(){
    // fruitTypes = [peach, watermelon];
    // let peach = {
    //     whole:loadImage('assets/peachwhole.png')
    // };
    //tell the program to randomly pick one fruit object
    let fruitData = random(fruitTypes);
    let randomX = random(300, 500);
    // create a fruit and stroing it in the group
    let fruit = new fruitGroup.Sprite(randomX, height+ 20, 40);
    //basically loading the image adnt eh image is sored in the array and the key to the image values
    //is whole hence its fruitData.whole (arrayname.whichkey)
    fruit.image = fruitData.whole;
    //telling the program that it is going to be a random fruit form the array
    fruit.type = fruitData;
    //setting the game physics the numbers can play around
    fruit.vel.y = random(-10, - 14);
    fruit.vel.x = random(-2, 2);
    fruit.friction = 0;
}