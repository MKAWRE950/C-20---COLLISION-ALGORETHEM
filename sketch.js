var fixRect,movingRect;



function setup() {
  createCanvas(1200,800);
  

  fixRect = createSprite(200,250,50,50);
  fixRect.shapeColor="green";
  
  movingRect = createSprite(100,300,50,50);
  movingRect.shapeColor = "green";
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixRect.x)


  if(movingRect.x - fixRect.x < movingRect.width/2 + fixRect.width/2 && 
     fixRect.x - movingRect.x < fixRect.width/2+fixRect.width/2 && 
     movingRect.y - fixRect.y < movingRect.height/2 + fixRect.height/2 &&
     fixRect.y - movingRect.y < movingRect.height/2 + fixRect.height/2){
    fixRect.shapeColor="red";
    movingRect.shapeColor = "red";
  }
  else{
    fixRect.shapeColor="green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}