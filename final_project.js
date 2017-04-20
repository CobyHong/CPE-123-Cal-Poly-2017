//Coby's Global Vars
var xloc=250;
var yloc=400;

var dx =0;
var dy =0;

var img1, img2, img3, img4, img5, img6, img7, img8, img9, SpaceBack;
var BackMusic, ThrusterSound, Congradulations;

var count = 0;
var countWIN = 0;

//Ahmed's Global Vars
var displaySplashScreen = false;
var startDescent = false;
var rocketX, rocketY, timeCount, u_count, l_count, r_count, global_count, switchValue, windSpeed;
var setReset = false;
var didLand = false;
rocketX = rocketY = 80;
timeCount = u_count = l_count = r_count = global_count = 1;
switchValue = 0;

//Matthew's Global Vars
var RS_x, RS_y, RS_scale, RS_dx, RS_dy, RS_dsc;
var	LZ_x, LZ_y, LZ_sc;
var AL_x, AL_y, AL_dy;
var ramp_l, ramp_dl;
var time, timer;
var landcount;
var starX = [];
var starY = [];
//var starDiam = [];

//Sujit's Global Vars
var walk = false;

var FlegR;
var legDown = false;
var fullLegMove = false;

var Dlocx;
var Dlocy;
var dirX, dirY;
var timeW;
var maxR;
var minR;
var switchL = false;

var leavingEarth = true;

//Dhruv's Global Vars
var fireW1 = [];
var earth;
var earthpresent=1;
var cscale=1;

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
	 earth=loadImage("earth.jpg");	

}

function setup()
{
	createCanvas(500,500);

	//Coby's Setup
	BackMusic.setVolume(0.001);
	BackMusic.loop();

	//Ahmed's Setup
	displaySplashScreen = true;

	//Matthew's Setup
	RS_x = 130;
	RS_y = height-65;
	RS_scale = .5;
	RS_dx = 1.2;
	RS_dy = -1.55;
	RS_dsc = .01;
	
	LZ_x = 0;
	LZ_y = 400;
	LZ_sc = 1;
	
	AL_x = 250;
	AL_y = 175;
	AL_dy = -.5

	ramp_l = 0;
	ramp_dl = -1;

	var n = 500 // Number of stars
	for (var i = 0; i < n; i ++){
		starX.push(random(width));
		starY.push(random(height));
		//starDiam.push(random(1, 5));	
	}

	time = 0;
	timer = 1;
	landcount = 0;


	//Sujit's Setup
	if(leavingEarth){
        Dlocx = 10;
        Dlocy = 315;
     }
     else{
        Dlocx = 260;
        Dlocy = 195;
     }

    dirX = 1;
    dirY = 0;
    timeW = 0.5;
    FlegR = 0;
    maxR = 0;
    minR = 100;
}

function draw(){
	if(landcount<=1)
	ifLand();

	if (landcount == 1) {
		leavingEarth = false;
		timer = 0;
		drawMinigame();
   
		if (countWIN>1)
		{
			if(displaySplashScreen){
	   		background(230, 230, 230);
			splashScreen();
			}
	   		if(startDescent && !didLand){
	      	spaceshipDescent();
			}

	   		if (didLand) {
			background(40, 40, 40);
			dirY = 0;
			timer = 1;
			ifLand();
	   		}
		}
	}
	if(landcount==2) {
		drawCamera(cscale);
		if(cscale<=2)
		{
			cscale+=0.01;
		}
		if(cscale>=2)
		{
			if(earthpresent == 1) image(earth,0,0);
			fill(255,0,0);
			ellipse(450,450,100);
			fill(0);
			textSize(18);
			text("take picture", 405, 455);
			   //run the particle system
		}
		   for (var i=0; i<fireW1.length; i++)
		   {
			  fireW1[i].run();
		   }
	}
}

//====================================================================//
//Universal Functions

function drawRocketShip(xRS, yRS, scRS, thrust, outline, dx, dy) //Draws Rocket ship
/* xRS: x-coordinate
 * yRS: y-coordinate
 * scRS: scale
 * tRS: transparency
 */

{
	var t = 255;

	if (outline) {
		t = 50
	}

	push();
		translate(xRS, yRS);
		scale(scRS);
		rotate(atan2(dy,dx)+2*PI);
		strokeWeight(0);


		if (thrust) {
			//Fire
			fill(255,random(100,255),random(40,60));
			beginShape();
			vertex(-20,0);
			vertex(-12,random(10,70));
			vertex(0,random(10,70));
			vertex(12,random(10,70));
			vertex(20,0);
			endShape(CLOSE);
		}
		
		//body
	  	fill(67, 74, 84, t);
	  	ellipse(250-250, 300-300, 40, 40);
	  	triangle(150-250, 240-300, 250-250, 175-300, 350-250, 240-300);
		ellipse(250-250, 164-300, 40, 120);
	  
		fill(242, 243, 244, t);
		triangle(160-250, 240-300, 250-250, 190-300, 340-250, 240-300);
	  
		fill(255, t);
		ellipse(250-250, 164-300, 40, 100);
		rect(220-250, 275-300, 60, 25);
	  
		//back 
		fill(67, 74, 84, t);
		rect(150-250, 240-300, 200, 30);
	 
		fill(242, 243, 244, t);
		rect(160-250, 240-300, 180, 20);
	  
		fill(255, t);
		ellipse(250-250, 275-300, 60, 50);
	  
		fill(145, 151, 160, t);
		rect(248-250, 265-300, 4, 50);

		fill(255, t);	
		rect(230-250, 164-300, 40, 100);
	  
		fill(102, t);
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

function implicit_C(x,y,cx,cy,radius)
{
	return ((x-cx)*(x-cx)+(y-cy)*(y-cy)-(radius*radius));
}

//====================================================================//

//Coby's Functions

function drawMinigame()
{
	background(0);
	image(SpaceBack,0,0);

	//=========================================//
	var lastX=xloc; //Save current location of X, Used in implicit Circle for planet. So when touching planet, ship will be sent back to previous location before touching planet.
	var lastY=yloc;

	//=========================================//
	if(keyIsDown(37) && keyIsDown(38)) //LEFT+UP
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
	if(keyIsDown(39) && keyIsDown(38)) //RIGHT+UP
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
	if(keyIsDown(37) && keyIsDown(40)) //LEFT+DOWN
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
	if(keyIsDown(39) && keyIsDown(40)) //RIGHT+DOWN
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
	if(keyIsDown(37)) //LEFT
	{
		xloc-=3;
		dx = 0;
		dy = -1;
	}
	//=========================================//
	if(keyIsDown(39)) //RIGHT
	{
		xloc+=3;
		dx = 0;
		dy = 1;
	}
  	//=========================================//
  	if(keyIsDown(38)) //UP
	{
		yloc-=3;
		dx = 0;
		dy = 0;
	}
	//=========================================//
	  	if(keyIsDown(40)) //DOWN
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
	drawRocketShip(xloc,yloc, .15, true, false ,dx,dy);

	//=========================================//
	//BOUNDARIES
	if(xloc<0)
	{
		xloc=width;
	}

	if(xloc>width)
	{
		xloc=0;
	}

	if(yloc<0)
	{
		yloc=height;
	}

	if(yloc>height)
	{
		yloc=0;
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

		drawRocketShip(xloc,yloc, .15, true, false, dx,dy);
		
		xloc = lastX;
		yloc = lastY;

		if(countWIN == 1 && leavingEarth == false)
		{
			Congradulations.play();
		}
		countWIN += 1;	
	}

	else
	{	
		image(img1,215,65,img1.width/11,img1.height/11);
		drawRocketShip(xloc,yloc, 0.15, true, false, dx,dy);
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

		drawRocketShip(xloc,yloc, 0.15, true, false, dx,dy);

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
		drawRocketShip(xloc,yloc, 0.15, true, false, dx,dy);
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

		drawRocketShip(xloc,yloc, .15, true, false, dx,dy);

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
		drawRocketShip(xloc,yloc, .15, true, false, dx,dy);
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

		drawRocketShip(xloc,yloc, .15, true, false, dx,dy);

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
		drawRocketShip(xloc,yloc, .15, true, false, dx,dy);
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

		drawRocketShip(xloc,yloc, .15, true, false, dx,dy);

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
		drawRocketShip(xloc,yloc, .15, true, false, dx,dy);
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

		drawRocketShip(xloc,yloc, .15, true ,false, dx,dy);

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
		drawRocketShip(xloc,yloc, .15, true, false, dx,dy);
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

		drawRocketShip(xloc,yloc, .15, true, false, dx,dy);

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
		drawRocketShip(xloc,yloc, .15, true, false, dx,dy);
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

		drawRocketShip(xloc,yloc, .15, true, false, dx,dy);

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
		drawRocketShip(xloc,yloc, .15, true, false, dx,dy);
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

		drawRocketShip(xloc,yloc, .15, true, false, dx,dy);

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
		drawRocketShip(xloc,yloc, .15, true, false, dx,dy);
	}
	//=========================================//
	fill(255);
	text("Arrow Keys to Move - Find Planet Murph",5,495);
}

function keyPressed() 
{
  if (countWIN < 1 && leavingEarth == false){

	  if (keyCode == 37)
	  {
	  	ThrusterSound.setVolume(0.05);
	  	ThrusterSound.play();
	  }
	  if (keyCode == 39)
	  {
	  	ThrusterSound.setVolume(0.05);
	  	ThrusterSound.play();
	  }
	   if (keyCode == 40)
	  {
	  	ThrusterSound.setVolume(0.05);
	  	ThrusterSound.play();
	  }
	   if (keyCode == 38)
	  {
	  	ThrusterSound.setVolume(0.05);
	  	ThrusterSound.play();
	  }
   }
}

//====================================================================//

//Ahmed's Function

function splashScreen(){
   background(230,230,230);

   fill(255);
   rect(width/2 - 150, height/2 - 200, 300, 125, 40);

   //textAlign(CENTER);

   fill(40);
   textSize(30);
   text("You have reached", width/2 - 135, 90);
   text("Planet Murph!", width/2 - 135, 120);
   text("Prepare to Land!", width/2 - 135, 150);

   textSize(20);
   text("Press anywhere to start...", width/2 - 100, 400);
}

function mouseClicked(){
   if(displaySplashScreen == true && countWIN > 1){
      displaySplashScreen = false;
      startDescent = true;
   }
}

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

function spaceshipDescent(){
   background(40,40,40);
   drawStars();

   if(setReset){
      sleep(1000);
      reset();
      setReset = false;
   }

   fill(130);
   noStroke();
   rect(0, height - 100, width, 100);

   fill(70);
   strokeWeight(2);

   ellipse(130, height - 65, 180, 40);


   var planet_gravity, downSpeed, rocket_dX, rocket_dY, thrustersOn;


   var windChangeWarning = switchValue - global_count;

   if(windChangeWarning < 60){
      textAlign(CENTER);
      textSize(25);
      fill(230);
      text("Warning! Wind Change Incoming", width/2, 200);
   } 

   if(global_count > switchValue){
      global_count = 0;
      switchValue = random(100,400);
      windSpeed = random(-2,2);
   }


   if(windSpeed > 0){
      noStroke();
      rect(width - 100, 47, 40, 6);
      triangle(width - 60, 40, width - 60, 60, width - 40, 50);
      textSize(15);
      textAlign(LEFT);
      text("Wind Speed: " + truncate(windSpeed, 3), width - 145, 80);
   }
   if(windSpeed < 0){
      noStroke();
      rect(width - 100, 47, 40, 6);
      triangle(width - 100, 40, width - 100, 60, width - 120, 50);
      textSize(15);
      textAlign(LEFT);
      text("Wind Speed: " + truncate(windSpeed, 3), width - 145, 80);
   }
  

   planet_gravity = 0.9;
   thrustersOn = false;

   downSpeed = timeCount * planet_gravity;

   rocketY += downSpeed;

   //println("Before:" + rocketX);
   rocketX += windSpeed;
   //println("After:" + rocketX);

   global_count++;

   timeCount += 0.07;

   drawRocketShip(130,height - 65, RS_scale, false, true);

   if(keyIsDown(UP_ARROW)){
      //rocketY -= planet_gravity + 1.01 * u_count;
      rocketY += downSpeed - 1.01 * u_count;
      timeCount = 1;
      u_count += .02;
      thrustersOn = true;
   }else{
      u_count = 1;
   }

   if(keyIsDown(RIGHT_ARROW)){
      rocketX += 1.01 * l_count;
      l_count += .02;
      thrustersOn = true;
   }else{
      l_count = 1;
   }

   if(keyIsDown(LEFT_ARROW)){
      rocketX -= 1.01 * r_count;
      r_count += .02;
      thrustersOn = true;
   }else{
      r_count = 1;
   }

   drawRocketShip(rocketX, rocketY, RS_scale, thrustersOn, false);

   //Allows for side to side motion
   if(rocketX + 40 < 0){
      rocketX = width;
   }
   if(rocketX - 40 > width){
      rocketX = 0;
   }

   //If the user leaves the top of the screen
   if(rocketY + 20 < 0){
      fill(230,20,20);
      textAlign(CENTER);
      textSize(30);
      text("You left the planet!", width/2, 125);
      setReset = true;
   }

   if(rocketY + 50 > height){
      fill(230,20,20);
      textAlign(CENTER);
      textSize(30);
      text("You crashed!", width/2, 125);
      setReset = true;
   }

   
   if (rocketX > 125 && rocketX < 135 && rocketY < height - 55 && rocketY > height - 75){
      didLand = true;
   }

   function reset(){
      rocketX = random(80, width-80);
      rocketY = 80;
      rocket_dX = rocket_dY = 0;
      downSpeed = 1;
      timeCount = 1;
      global_count = 1;
      switchValue = 0;
      startDescent = false;
      displaySplashScreen = true;
   }
   
   function truncate (num, places) {
      return Math.trunc(num * Math.pow(10, places)) / Math.pow(10, places);
   }
}

//====================================================================//

//Matthew's Functions

function drawLandingZone(xLZ, yLZ, scLZ)
/*
 * xLS: x-coordinate of ground
 * yLS: y-coordinate of ground
 * scLS: scale of ground
 */
{
	push();
		translate(xLZ, yLZ);
		scale(scLZ);
		
		noStroke();
		fill(130);
		rect(-100, 0, width + 100, 200);

		fill(70);
		ellipse(130, 35, 180, 40);
	pop();
}

function drawAirlock(x, y)
{
	push();
		translate(x, y);

		noStroke();
		fill(0);
		ellipse(0, -10, 30);
		rect(-15.3, -10, 30, 20);
	pop();
}

function openAirlock(x, y, sc)
{
	push();
		translate(x, y);
		scale(1.1);
		
		noStroke();
		fill(255);
		ellipse(0, -10, 30);
		rect(-15.4, -10, 30, 20);
	pop();
}

function moveRamp(x, y, l)
{
 if(leavingEarth){

        push();
            translate(x, y);
            noStroke();
            fill(100);
            beginShape();
                vertex(0, 0);
                vertex(29.5, 0);
                vertex(30-l, l);
                vertex(-l, l);
            endShape(CLOSE);
        pop();

    }
    else{
        push();
            translate(x, y);
            noStroke();
            fill(100);
            beginShape();
                vertex(0, 0);
                vertex(29.5, 0);
                vertex(30+l, l);
                vertex(0+l, l);
            endShape(CLOSE);
	    pop();
    }
}

function ifLand()
{
	if(leavingEarth) {
        background(13, 39, 81);
    }
    else {
        background(40, 40, 40);
        drawStars()
    }

	drawLandingZone(LZ_x, LZ_y, LZ_sc);
	drawRocketShip(RS_x, RS_y, RS_scale, false, false);

	if (time > 100) {
		LZ_y += RS_dy;
		LZ_sc += RS_dsc;

		RS_x += RS_dx;
		RS_y += RS_dy;
		RS_scale += RS_dsc;

		if (RS_x > 250)
			RS_dx = 0;
		if (RS_y < 280)
			RS_dy = 0;

		if (RS_scale > 1.5)
			RS_dsc = 0;
	}

	if (time > 275) {
		drawAirlock(250, 175);
		openAirlock(AL_x, AL_y);
	}

	if (time > 275) {
		AL_y += AL_dy;

		if (AL_y < 140)
			AL_dy = 0;
	}

	if (time > 350) {
		moveRamp(235, 185, abs(ramp_l));
        openAirlock(AL_x, AL_y);
		ramp_l += ramp_dl;

		if (ramp_l < -140) {
            ramp_dl = 0;
            if (time > 850) {
		      ramp_dl = 1;
            }
		}

        if (ramp_l > 0) {
            ramp_dl = 0;
            AL_dy = .5;
            if (AL_y > 176) {
                AL_dy = 0;
            }
        }

	}

	if (time > 400){
		walk = true;
		if (landcount == 0) {
			astroWalk();
		}
		if (landcount == 1) {
       		astroWalk();
		}
	}

	if (time == 1200) {
		landcount ++;
		if (landcount == 1){
			RS_x = 130;
			RS_y = height-65;
			RS_scale = .5;
			RS_dx = 1.2;
			RS_dy = -1.55;
			RS_dsc = .01;
		
			LZ_x = 0;
			LZ_y = 400;
			LZ_sc = 1;
		
			AL_x = 250;
			AL_y = 175;
			AL_dy = -.5;

			ramp_l = 0;
			ramp_dl = -1;
			
			time = 0;
			Dlocx = 260;
			Dlocy = 195;
		}
	}

	
	if(landcount == 2){
		timer = 0;
	}


    time += timer;    
}

function drawStars()
{
	for (var i = 0; i<starX.length; i++){
		noStroke();
		fill(255);
		ellipse(starX[i] ,starY[i], random(2));
	}

}

//====================================================================//

//Sujit's Functions

function move(){
   Dlocx = Dlocx + dirX*timeW;
   Dlocy = Dlocy + dirY*timeW;

   if (FlegR > radians(30)) {
      legDown = false;
   }

   if (FlegR < radians(0)) {
     legDown = true;
     fullLegMove = true;
   }

   if (legDown) {
      FlegR += 0.025;

   } else {
      FlegR -= 0.025;
      fullLegMove = false;
   }
}

function drawAstro(footX, footY){
    //Legs
    fill(63, 5, 55); //fill(255);
    var legY = footY-85;
    var lastX;
    var lastY;


    //if(!fullLegMove){
        //Leg 1
        //Upright Thigh
        fill(63, 5, 55);
        rect(footX, legY, 30, 45);

        //Leg 2
        //Upright Thigh
        fill(255)
        rect(footX, legY, 30, 45);

       if (legDown) {
          //fill(63, 5, 55);
       }else{
            fill(255)
       }

        //Bent Knee
        push();
            translate(footX+30, legY+45)
            rotate(FlegR);
            rect(-30, 0, 30, 50);
             //Shoes
                fill(165, 215, 230);
                rect(-30, 40, 45, 20, 0, 10, 0, 0);
                fill(255)
        pop();

        //Bent Knee
        push();
            translate(footX+30, legY+45)
            rotate(-FlegR);
            rect(-30, 0, 30, 50);
             //Shoes
            fill(165, 215, 230);
            rect(-30, 40, 45, 20, 0, 10, 0, 0);
            fill(255)
        pop();
        
    //Body
    fill(253, 174, 1); fill(255);
    var rectX= footX;
    var rectY = legY-65-25/2;

    fill(160)
    ellipse(footX+20/10, rectY+85/2, 50, 85);

    fill(255)
    ellipse(rectX+35/1.5, rectY+85/2, 47, 85);

    fill(255, 0, 0)
    beginShape();
        curveVertex(rectX+35/1.5, rectY+85/2)
        curveVertex(rectX+35/1.5, rectY+85/2)
        curveVertex(rectX+35/1.5, rectY+85/2)

        curveVertex(footX, rectY);
        curveVertex(footX, rectY);
        curveVertex(footX, rectY);

    endShape();

    fill(255)
    rect(footX, rectY, 25, 80);
    rect(footX, legY, 25, 8);

    fill(160)
    rect(rectX+20, rectY+25, 20, 30)
    fill(150, 190, 190)
    rect(rectX+25, rectY+30, 5, 10)
    fill(200, 100, 120)
    rect(rectX+35, rectY+30, 2.5, 10)
    fill(175, 240, 185)
    rect(rectX+25, rectY+45, 12, 7)

    //Arm
    fill(251, 17, 44); fill(255);
    push();
        translate(footX, legY - 105/5);
        rotate(11.6*PI/6);
        fill(63, 5, 55);
    pop();

    //Head

    //Neck
    var neckX = rectX;
    var neckY = rectY - 40;
    fill(251, 17, 44); fill(255);
    //rect(neckX, neckY, 45, 70);


    push();
        //head
        translate(neckX + 5/2.5, neckY + 20);
        rotate(PI/2);

        //white part
        fill(251, 17, 44); fill(255);
        ellipse(-5, -15, 60, 65);

        //black helmet
        fill(0, 102, 204);
        ellipse(-7, -20, 45, 50);

        //Helmet - Body Connection
        fill(165, 215, 230);
        arc(20, -14, 12, 36, -PI/2, -3*PI/2);

    pop();
}

function astroWalk()
{
    if(leavingEarth){
        if(walk && Dlocx < 239){
            push();
                translate(Dlocx, Dlocy);
                scale(0.2);
                if(Dlocx >= 110){
                    dirY = -1;
                }

                if(Dlocx >= 225){
                    dirY = 0;
                }
                noStroke();
                drawAstro(0, 0);
            pop();
           move();
        }
    }
    else
    {
        if(walk && Dlocx <= 510){
            push();
                translate(Dlocx, Dlocy);
                scale(0.2);
                if(Dlocx >= 500-135){
                    dirY = 0;
                }

                if(Dlocx >= 500-235 && Dlocx < 500-100){
                    dirY = 1;
                }
                noStroke();
                drawAstro(0, 0);
            pop();
            move();
        }
    }
}

//====================================================================//

//Dhruv's Functions
//Code to create Explosion
//Example of very simple particle systems - inroduction to objects in javascript
//define a single particle
function Particle(x,y,red,green,blue)
{
   //the data associated with a particle
   this.accelY = 0.02; //gravity
   this.velX = random(-4, 4);
   this.velY = random(-4, 4);
   //note this particle only can vary its blue color - change this to include red and green
   //this.pcolorR = random(0,255);
  // this.pcolorG = random (0,255);
  // this.pcolorB = random(0, 255);
   this.locX = x;
   this.locY = y;
   this.r = 5;
   this.life = 150;

   //a function to update the particle each frame
   this.updateP = function()
   {
      this.velY += this.accelY;
      this.locX += this.velX;
      this.locY += this.velY;
      this.life -= 1.0;
   };

   //function to draw a particle
   this.renderP = function()
   {
      noStroke();
      push();
         ellipseMode(CENTER);
         //very simple coloring
         fill(red,green,blue);
         translate(this.locX, this.locY);
         rotate(random(0,2*PI));
         ellipse(0, 0, this.r);
      pop();
   };
} //end of particle object definition


//define a group of particles as a particleSys
function PSys(sX, sY, num, red, green, blue)
{
    //the data - lots of particles
   this.particles = [];
   for (var i=0; i < num; i++)
   {
      this.particles.push(new Particle(sX, sY, red, green, blue));
   }

    //function defining what to do each frame
   this.run = function()
   {
      for (var i=0; i < this.particles.length; i++)
      {
         //update each particle per frame
         this.particles[i].updateP();
         this.particles[i].renderP();
         this.particles[i].r+=random(-5,5);
      }
   }
}

function mousePressed()
{
	if(implicit_C(mouseX,mouseY,450,450,50)<=0)
	{
		console.log(2);
		fill(0);
		earthpresent=0;
		rect(0,0,500,500);
		red = random(150,255);
   		green = random(50);
   		blue = random(50);
   		ellipse(250, 250, earth.width);
   		fireW1.push(new PSys(250,250,random(500,1000), red, green, blue));
	}

}
function drawCamera(cscale)
{
	push();
		scale(cscale);
		fill(88);
		rect(150/cscale-(cscale*100/1.8),150/cscale-(cscale*100/1.8),300,300);
		fill(33);
		ellipse(width/(2*cscale),height/(2*cscale),250);
		fill(50);
		ellipse(width/(2*cscale),height/(2*cscale),200);
	pop();
}