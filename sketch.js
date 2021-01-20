

var car1,car2,car3,wall1,wall2,wall3;


var speed, weight; 


function setup() {
  createCanvas(1400, 400);


	speed=random(45,100);
	weight=random(1522,3000);


	car1=createSprite(20, 40, 35,35);   
	car1.velocityX = speed;
	car1.shapeColor=color("white");

	car2=createSprite(20, 150, 50,50);   
	car2.velocityX = speed;
	car2.shapeColor=color("white");
  
	car3=createSprite(20, 260, 50,50);   
	car3.velocityX = speed;
	car3.shapeColor=color("white");

  	wall1=createSprite(1000,50, 60, 100)
    wall1.shapeColor=color("grey");
	  
	wall2=createSprite(1000,160, 60, 100)
    wall2.shapeColor=color("grey");
	  
	wall3=createSprite(1000,270, 60, 100)
    wall3.shapeColor=color("grey");
	  
	  
}


function draw() {
  background(0);

  if(wall1.x-car1.x < (car1.width+wall1.width)/2 || wall2.x-car2.x < (car2.width+wall2.width)/2 
  ||wall3.x-car3.x < (car3.width+wall3.width)/2 )
  {
	  car1.velocityX=0;
	  car2.velocityX=0;
	  car3.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>150)
	{
		car1.shapeColor=color(255,0,0);
		car2.shapeColor=color(255,0,0);
		car3.shapeColor=color(255,0,0);
	}

	if(deformation<150 && deformation>100)
	{
		car1.shapeColor=color(230,230,0);
		car2.shapeColor=color(230,230,0);
		car3.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		car1.shapeColor=color(0,255,0);
		car2.shapeColor=color(0,255,0);
		car3.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}


