//Create variables here

var dog1,dog2
function preload()
{
dog1=loadImage("images/dogImg.png")
dog2=loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(800, 700);
  
}


function draw() {  
dog1.display();
  drawSprites();
  //add styles here

}



