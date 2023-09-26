var detetive_img, detetive;
var ladrão_img, ladrão;
var left_wall,right_wall, top_wall, botton_wall;

function preload(){
  detetive_img = loadImage("assets/istockphoto-1357399348-612x612.png");
  ladrão_img = loadImage("assets/ladrao.png");
}

function setup(){
  createCanvas(1200, 600);

  detetive = createSprite(400,200, 50, 50);
  detetive.addImage(detetive_img);
  detetive.scale = 0.3;

  ladrão = createSprite(600,200, 50, 50);
  ladrão.addImage(ladrão_img);
  ladrão.scale = 0.35;

  left_wall = createSprite(1,400,2,800);
  right_wall = createSprite(1199,300,2,800);
  top_wall = createSprite(600,1,1200,2);
  botton_wall = createSprite(600,599,1200,2);
}

function draw(){
  background(184);
    
  if(keyDown("UP_ARROW")){
    detetive.y = detetive.y -10;
  }

  if(keyDown("DOWN_ARROW")){
    detetive.y = detetive.y +10;
  }

  if(keyDown("LEFT_ARROW")){
    detetive.x = detetive.x -10;
  }

  if(keyDown("RIGHT_ARROW")){
    detetive.x = detetive.x +10;
  }

  detetive.collide(left_wall);
  detetive.collide(right_wall);
  detetive.collide(top_wall);
  detetive.collide(botton_wall);
    
    drawSprites();
}
  
