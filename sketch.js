
function preload(){
  bgImage = loadImage("Background 2.jpg");
  bombImage = loadImage("Bomb 1.png");
  bombBlastImage = loadImage("BombBlast.png");
  EggImage = loadImage("Golden Egg.png");
  HammerImage = loadImage("Hammer New.png");
  monsterHeadImage = loadImage("Monster Head.png");
  HammerRightImage = loadImage("Hammer Right.png");
  HammerLeftImage = loadImage("Hammer Left.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  monster = createSprite(500,470,10,10);
  monster.addImage(monsterHeadImage);
  monster.scale = 0.2;

  hammer = createSprite(400,400,10,10);
  hammer.addImage(HammerImage);
  hammer.scale = 0.08
  
 
}

function draw() {
  background(bgImage);
  fill("black");
  ellipse(500,500,100,40);
  hammer.x = mouseX;
  hammer.y = mouseY;
  if(mousePressedOver(monster)){
    hammer.addImage(HammerLeftImage);

  }else{
    hammer.addImage(HammerImage);
  }
  
  drawSprites();
  
}

/*function mousePressed(){
  console.log("mousePressed");
  if(hammer.x<=width/2){
    hammer.addImage(HammerLeftImage); 
  }
}

function mouseReleased(){
  console.log("mouseReleased")
  hammer.addImage(HammerImage);
}*/
