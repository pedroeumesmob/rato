var xaniu,xaniu2,xaniu3,xaniu4;
var rato,rato1,rato2,rato3;
var bg;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png")
    xaniu2 = loadAnimation("images/cat1.png");
    xaniu3 = loadAnimation("images/cat2.png","images/cat3.png");
    xaniu4 = loadAnimation("images/cat4.png");

    rato1 = loadAnimation("images/mouse1.png");
    rato2 = loadAnimation("images/mouse2.png","images/mouse3");
    rato3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    xaniu = createSprite(870, 600);
    xaniu.addAnimation("gatolindo",xaniu2)
    xaniu.scale = 0.2;

    rato = createSprite(200, 600);
    rato.addAnimation("ratofei",rato1)
    rato.scale = 0.15;
}

function draw() {

    background(bg);
    if(xaniu.x-rato.x<(xaniu.width-rato.width)/2){
        xaniu.velocityX = 0;
        xaniu.addAnimation("miau",xaniu2);
        xaniu.x = 300;
        xaniu.scale = 0.2;
        xaniu.changeAnimation("miau");
        rato.addAnimation("trollface",rato3);
        rato.scale = 0.15;
        rato.changeAnimation("trollface");
    }

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    xaniu.velocityX = -5;
    xaniu.addAnimation("cadeirante",xaniu3);
    xaniu.changeAnimation("cadeirante");
    rato.addAnimation("morto",rato2);
    rato.frameDelay = 25;
    rato.changeAnimation("morto");
    rato.scale = 0.15;
}

}
