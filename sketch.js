var sun,planet1,planet2;

function setup() {
  createCanvas(800,800);
  
}

function draw() {
  background(0,0,0);  
  sun = createSprite(250,250,50,50);
  sun.shapeColor = "yellow";
  sun.debug = true;

planet1 = ellipse(400,250,20,20);

planet2 = ellipse(250,400,30,30);

if(frameCount%60 === 0){
sun.scale = sun.scale+1;
}

//console.log(World.frame)
  drawSprites();
}