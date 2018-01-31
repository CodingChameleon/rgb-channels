var lpkidsred;
var lpkidsgreen;
var lpkidsblue;
var lpkidsgray;
var oldSchoolTV

function preload(){
    lpkidsgray = loadImage("images/lpkids-gray.png");
    lpkidsred = loadImage("images/lpkids-red.png");
    lpkidsgreen = loadImage("images/lpkids-green.png");
    lpkidsblue = loadImage("images/lpkids-blue.png");
    oldSchoolTV = loadImage("images/OLD-TV.png");
}

function setup(){
    createCanvas(749,524).parent("sketch-holder");
}

function draw(){
    if(keyIsPressed){
        if(key=="r"){
            image(lpkidsred, 50, 50);
        }
        if(key=="g"){
            image(lpkidsgreen, 50, 50);
        }
        if(key=="b"){
            image(lpkidsblue, 50, 50);
        }
        if(keyCode==32){
            fill(0);
            rect(50, 50, 500, 374);
            blendMode(LIGHTEST);
            image(lpkidsred, 50, 50);
            image(lpkidsgreen, 50, 50);
            image(lpkidsblue, 50, 50);
        }
    } 
    else{
        image(lpkidsgray, 50, 50);
        image(oldSchoolTV, 0, 0);
    }
    blendMode(NORMAL);
    image(oldSchoolTV, 0, 0);
}