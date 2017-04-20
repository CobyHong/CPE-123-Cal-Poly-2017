var xloc=250;
var yloc=400;

var dx =0;
var dy =0;

var img1, img2, img3, img4, img5, img6, img7, img8, img9, SpaceBack;
var BackMusic, ThrusterSound, Congradulations;

var count = 0;
var countWIN = 0;

function preload()
{
	 img1 = loadImage("Planets+Back/img1.png");
	 img2 = loadImage("Planets+Back/img2.png");
	 img3 = loadImage("Planets+Back/img3.png");
	 img4 = loadImage("Planets+Back/img4.png");
	 img5 = loadImage("Planets+Back/img5.png");
	 img6 = loadImage("Planets+Back/img6.png");
	 img7 = loadImage("Planets+Back/img7.png");
	 img8 = loadImage("Planets+Back/img8.png");
	 img9 = loadImage("Planets+Back/img9.png");

	 SpaceBack = loadImage("Planets+Back/SpaceBack.jpg");

	 BackMusic = loadSound('Planets+Back/BackMusic.m4a');
	 ThrusterSound = loadSound('Planets+Back/Thruster.wav');
	 Congradulations = loadSound('Planets+Back/Congradulations.mp3');
}

function setup()
{
	createCanvas(500,500);
	BackMusic.setVolume(0.05);
	BackMusic.loop();
}

function draw()
{
	background(0);
	image(SpaceBack,0,0);

	//=========================================//
	var lastX=xloc; //Save current location of X, Used in implicit Circle for planet. So when touching planet, ship will be sent back to previous location before touching planet.
	var lastY=yloc;

	//=========================================//
	if(keyIsDown(65) && keyIsDown(87)) //LEFT+UP
	{
		xloc-=2.75;
		yloc-=2.75;
		dx = 0.5;
		dy = -1;
	}
	//==========================================//

	else
	{

	//=========================================//
	if(keyIsDown(68) && keyIsDown(87)) //RIGHT+UP
	{
		xloc+=2.75;
		yloc-=2.75;
		dx = 0.5;
		dy = 1;
	}
	//=========================================//

	else
	{

	//=========================================//
	if(keyIsDown(65) && keyIsDown(83)) //LEFT+DOWN
	{
		xloc-=2.75;
		yloc+=2.75;
		dx = -0.5;
		dy = -1;
	}
	//=========================================//

	else
	{

	//=========================================//
	if(keyIsDown(68) && keyIsDown(83)) //RIGHT+DOWN
	{
		xloc+=2.75;
		yloc+=2.75;
		dx = -0.5;
		dy = 1;
	}
	//=========================================//

	else
	{

	//=========================================//
	if(keyIsDown(65)) //LEFT
	{
		xloc-=3;
		dx = 0;
		dy = -1;
	}
	//=========================================//
	if(keyIsDown(68)) //RIGHT
	{
		xloc+=3;
		dx = 0;
		dy = 1;
	}
  	//=========================================//
  	if(keyIsDown(87)) //UP
	{
		yloc-=3;
		dx = 0;
		dy = 0;
	}
	//=========================================//
	  	if(keyIsDown(83)) //DOWN
	{
		yloc+=3;
		dx = -1;
		dy = 0;
	}
	//=========================================//
}
}
}
}
	//=========================================//
	//DRAWS
	RocketShip(xloc,yloc,dx,dy);

	//=========================================//
	//BOUNDARIES
	if(xloc<0)
	{
		xloc=3;
	}

	if(xloc>width)
	{
		xloc=width-3;
	}

	if(yloc<0)
	{
		yloc=3;
	}

	if(yloc>height)
	{
		yloc=height-3;
	}

	//=========================================//
	//PLANET MURPH #1
	if(implicit_C(xloc,yloc,250,100,40)<0)
	{	
		push();
		noFill();
		stroke(83,211,63);
		ellipse(250,100,50);
		fill(83,211,63);
		textSize(10);
		text("Planet Murph",235,93,50);
		textSize(30);
		fill(255);
		text('YOU DID IT',180,250);	
		pop();

		RocketShip(xloc,yloc,dx,dy);
		
		xloc = lastX;
		yloc = lastY;

		if(countWIN>1)
		{
			Congradulations.play();
		}
		countWIN += 1;	
	}

	else
	{	
		image(img1,215,65,img1.width/11,img1.height/11);
		RocketShip(xloc,yloc,dx,dy);
	}
	//=========================================//
	//Blue Clue's Planet #2
	if(implicit_C(xloc,yloc,135,135,40)<0)
	{	
		push();
		noFill();
		stroke(255,0,0);
		ellipse(135,135,50);
		fill(255,0,0);
		textSize(10);
		text("Blue's Clue Planet",120,128,50);
		pop();

		RocketShip(xloc,yloc,dx,dy);

		xloc = lastX;
		yloc = lastY;

		if(count>15)
		{
			xloc = 250;
			yloc = 400;	

			count = 0;
		}
		count += 1;	
	}

	else
	{	
		image(img2,100,100,img2.width/11,img2.height/11);
		RocketShip(xloc,yloc,dx,dy);
	}
	//=========================================//
	//Yellow Mello #3
	if(implicit_C(xloc,yloc,385,285,40)<0)
	{	
		push();
		noFill();
		stroke(255,0,0);
		ellipse(385,285,50);
		fill(255,0,0);
		textSize(10);
		text("Yellow Mello",370,287,50);
		pop();

		RocketShip(xloc,yloc,dx,dy);

		xloc = lastX;
		yloc = lastY;

		if(count>15)
		{
			xloc = 250;
			yloc = 400;	

			count = 0;
		}
		count += 1;	
	}

	else
	{	
		image(img3,350,250,img3.width/11,img3.height/11);
		RocketShip(xloc,yloc,dx,dy);
	}
	//=========================================//
	//Urf #4
	if(implicit_C(xloc,yloc,85,385,40)<0)
	{	
		push();
		noFill();
		stroke(255,0,0);
		ellipse(85,385,50);
		fill(255,0,0);
		textSize(10);
		text("Urf",80,387,50);
		pop();

		RocketShip(xloc,yloc,dx,dy);

		xloc = lastX;
		yloc = lastY;

		if(count>15)
		{
			xloc = 250;
			yloc = 400;	

			count = 0;
		}
		count += 1;	
	}

	else
	{	
		image(img4,50,350,img4.width/11,img4.height/11);
		RocketShip(xloc,yloc,dx,dy);
	}
	//=========================================//
	//Shrek #5
	if(implicit_C(xloc,yloc,455,85,40)<0)
	{	
		push();
		noFill();
		stroke(255,0,0);
		ellipse(455,85,50);
		fill(255,0,0);
		textSize(10);
		text("Shrek",440,85,50);
		pop();

		RocketShip(xloc,yloc,dx,dy);

		xloc = lastX;
		yloc = lastY;
		
		if(count>15)
		{
			xloc = 250;
			yloc = 400;	

			count = 0;
		}
		count += 1;	
	}

	else
	{	
		image(img5,420,50,img5.width/11,img5.height/11);
		RocketShip(xloc,yloc,dx,dy);
	}
	//=========================================//
	//MAC.C #6
	if(implicit_C(xloc,yloc,285,185,40)<0)
	{	
		push();
		noFill();
		stroke(255,0,0);
		ellipse(285,185,50);
		fill(255,0,0);
		textSize(10);
		text("MAC.C",270,185,50);
		pop();

		RocketShip(xloc,yloc,dx,dy);

		xloc = lastX;
		yloc = lastY;
		
		if(count>15)
		{
			xloc = 250;
			yloc = 400;	

			count = 0;
		}
		count += 1;	
	}

	else
	{	
		image(img6,250,150,img6.width/11,img6.height/11);
		RocketShip(xloc,yloc,dx,dy);
	}
	//=========================================//
	//Memes #7
	if(implicit_C(xloc,yloc,465,465,40)<0)
	{	
		push();
		noFill();
		stroke(255,0,0);
		ellipse(465,465,50);
		fill(255,0,0);
		textSize(10);
		text("Memes",445,465,50);
		pop();

		RocketShip(xloc,yloc,dx,dy);

		xloc = lastX;
		yloc = lastY;
		
		if(count>15)
		{
			xloc = 250;
			yloc = 400;	

			count = 0;
		}
		count += 1;	
	}

	else
	{	
		image(img7,430,430,img7.width/11,img7.height/11);
		RocketShip(xloc,yloc,dx,dy);
	}
	//=========================================//
	//Ur Mom #8
	if(implicit_C(xloc,yloc,105,285,40)<0)
	{	
		push();
		noFill();
		stroke(255,0,0);
		ellipse(105,285,50);
		fill(255,0,0);
		textSize(10);
		text("Ur Mom",90,285,50);
		pop();

		RocketShip(xloc,yloc,dx,dy);

		xloc = lastX;
		yloc = lastY;

		if(count>15)
		{
			xloc = 250;
			yloc = 400;	

			count = 0;
		}
		count += 1;	
	}

	else
	{	
		image(img8,70,250,img8.width/11,img8.height/11);
		RocketShip(xloc,yloc,dx,dy);
	}
	//=========================================//
	//Brad Pitt #9
	if(implicit_C(xloc,yloc,45,85,40)<0)
	{	
		push();
		noFill();
		stroke(255,0,0);
		ellipse(45,85,50);
		fill(255,0,0);
		textSize(10);
		text("Brad Pitt",30,80,50);
		pop();

		RocketShip(xloc,yloc,dx,dy);

		xloc = lastX;
		yloc = lastY;

		if(count>15)
		{
			xloc = 250;
			yloc = 400;	

			count = 0;
		}
		count += 1;	
	}

	else
	{	
		image(img9,10,50,img9.width/11,img9.height/11);
		RocketShip(xloc,yloc,dx,dy);
	}
	//=========================================//
	fill(255);
	text("WASD Keys to Move - Find Planet Murph",5,495);
}

function RocketShip(x,y,dx,dy)
{
  push();
  translate(x,y);
  //rectMode(CENTER);
  rotate(atan2(dy,dx)+2*PI);
  scale(0.15);

  //Fire
  fill(255,random(100,255),random(40,60));
  beginShape();
  vertex(-20,0);
  vertex(-12,random(10,70));
  vertex(0,random(10,70));
  vertex(12,random(10,70));
  vertex(20,0);
  endShape(CLOSE);

  //body
  strokeWeight(0);
  fill(67, 74, 84);
  ellipse(250-250, 300-300, 40, 40);
  
  strokeWeight(0);
  fill(67, 74, 84);
  triangle(150-250, 240-300, 250-250, 175-300, 350-250, 240-300);
  
  strokeWeight(0);
  fill(67, 74, 84);
  ellipse(250-250, 164-300, 40, 120);
  
  strokeWeight(0);
  fill(242, 243, 244);
  triangle(160-250, 240-300, 250-250, 190-300, 340-250, 240-300);
  
  strokeWeight(0);
  fill(255);
  ellipse(250-250, 164-300, 40, 100);
  
  strokeWeight(0);
  fill(255);
  rect(220-250, 275-300, 60, 25);
  
  //back 
  strokeWeight(0);
  fill(67, 74, 84);
  rect(150-250, 240-300, 200, 30);
 
  strokeWeight(0);
  fill(242, 243, 244);
  rect(160-250, 240-300, 180, 20);
  
  strokeWeight(0);
  fill(255);
  ellipse(250-250, 275-300, 60, 50);
  
  strokeWeight(0);
  fill(145, 151, 160);
  rect(248-250, 265-300, 4, 50);
  
  strokeWeight(0);
  fill(255);
  rect(230-250, 164-300, 40, 100);
  
  fill(102);
  strokeWeight(1);
  beginShape();
  vertex(250-250, 160-300);
  vertex(253-250, 173-300);
  vertex(265-250, 170-300);
  vertex(255-250, 180-300);
  vertex(260-250, 190-300);
  vertex(250-250, 185-300);
  vertex(240-250, 190-300);
  vertex(245-250, 180-300);
  vertex(235-250, 170-300);
  vertex(247-250, 173-300);
  endShape(CLOSE);
  pop();
}

//=================================================================================//
function implicit_C(x,y,cx,cy,radius)
{
	return ((x-cx)*(x-cx)+(y-cy)*(y-cy)-(radius*radius));
}
//=================================================================================//
function keyPressed() 
{
  if (keyCode == 65)
  {
  	ThrusterSound.setVolume(0.05);
  	ThrusterSound.play();
  }
  if (keyCode == 68)
  {
  	ThrusterSound.setVolume(0.05);
  	ThrusterSound.play();
  }
   if (keyCode == 83)
  {
  	ThrusterSound.setVolume(0.05);
  	ThrusterSound.play();
  }
   if (keyCode == 87)
  {
  	ThrusterSound.setVolume(0.05);
  	ThrusterSound.play();
  }
}
//=================================================================================//