var trex 
var trexrunning  
var ground
var groundimage
var invground
function preload()
{
trexrunning = loadAnimation("trex1.png","trex3.png","trex4.png")
groundimage = loadImage("ground2.png")



}
function setup() 
{
  createCanvas(1200,400);
  ground = createSprite (200,180,400,20)
ground.velocityX = -5
ground.addImage(groundimage)
  trex = createSprite (50,160,20,50)
trex.addAnimation("running",trexrunning)
trex.scale = .5

invground = createSprite(200,190,400,20)
invground.visible = false
}

function draw() 
{
background(51);
if (keyDown("space")&&trex.y>=100)
{
trex.velocityY = -10
}
trex.velocityY = trex.velocityY + 0.8
if (ground.x < 0)
{
  ground.x = ground.width/2
}
trex.collide (invground)

drawSprites()
}

