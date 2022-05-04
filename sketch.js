var bgimage ,forestimage,maincharacterimage
var background,player
function preload() {
  bgimage = loadImage("backgroundimage.jpg");
  forestimage=loadImage("forest.jpg")
  maincharacterimage=loadImage("pirate.png")  
}

function setup() {
  createCanvas(600, 200);

  ground = createSprite(300,100,600,200);
  ground.addImage("ground",forestimage);
  

  player = createSprite(120,120,30,30);
  player.addImage("player",maincharacterimage);
  player.scale=0.1
}


function draw() {
  background(51);

  drawSprites();
}

