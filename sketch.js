var shaiban,shaibanImg
var bg,background1;
function preload(){
  shaibanImg = loadImage("normie.png")
  background1 = loadImage("1243.png")
}

function setup() {
  createCanvas(1200,800);
  bg=createSprite(1200,800);
  bg.addImage("bk",background1);
  bg.scale = 1.0;
  bg.x=bg.width/2
  bg.velocityX=-3;
  shaiban = createSprite(50, 700, 50, 50);
  shaiban.addImage("normie", shaibanImg);
  shaiban.scale = 0.4;
  
}

function draw() {
 // background(180);  

  if(bg.x<=0){
    bg.x=bg.width/2;
  }
  
  if(keyCode === UP_ARROW){
    console.log(shaiban.y)
    shaiban.y = shaiban.y-5;
  }

  if(keyCode === DOWN_ARROW){
    console.log(shaiban.y)
    shaiban.y = shaiban.y+5;
  }

  if(keyCode === RIGHT_ARROW){
    console.log(shaiban.y)
    shaiban.x = shaiban.x+5;
  }

  if(keyCode === LEFT_ARROW){
    console.log(shaiban.y)
    shaiban.x = shaiban.x-5;
  }

  drawSprites();
}

