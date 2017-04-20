var C1 = 0;
var C2 = 100;
var C3 = -150;
var C4 = 400;
var C5 = 300;

var C6 = -150;
var C7 = 20;

var CA = -150;
var CB = -200;

var hiker_y = 125;


function setup()
{
	createCanvas(400,600);
}

//------------------------------------------------------------------------||

//x - x-coordinate of hiker
//y - y-coordinate of hiker
//sc - scale of hiker
//rot - rotation of hiker
//r - red hue of jacket
//g - green hue of jacket
//b - blue hue of jacket
function drawHiker(x, y, sc, rot, r, g, b)
{
	push();
		translate(x, y);
		rotate(rot);
		scale(sc);
		smooth();
		noStroke();

		//Hiker's Right Shoe
		fill(33, 146, 189);
		beginShape();
			vertex(34, 260);
			bezierVertex(100, 260, 100, 300, 30, 290);
			bezierVertex(15, 280, 15, 280, 10, 290);
			vertex(-5, 290);
			vertex(-5, 260);
		endShape();

		//Hiker's Left Shoe
		fill(33, 146, 189);
		beginShape();
			vertex(-180, 240);
			bezierVertex(-160, 255, -160, 300, -210, 250);
			bezierVertex(-215, 230, -210, 240, -220, 245);
			vertex(-230, 235);
			vertex(-200, 210);
		endShape();
		

		//Hiker's Jacket
		fill(r, g, b);
		beginShape();
			vertex(-230, 160);
			vertex(-240, 120);
			vertex(-180, 100);
			vertex(-245, 105);
			bezierVertex(-265, 50, -265, 50, -260, 0);
			bezierVertex(-190, -20, -190, -20, -110, -20);
			bezierVertex(-70, -50, -70, -50, -10, -90);
			bezierVertex(-50, -105, -50, -105, -70, -120);
			bezierVertex(-110, -90, -110, -90, -150, -75);
			vertex(-170, -100);
			vertex(-80, -165);
			bezierVertex(-10, -160, -10, -160, 75, -120);
			vertex(100, -150);
			vertex(100, -170);
			vertex(200, -170);
			vertex(210, -150);
			vertex(190, -140);
			vertex(210, -125);
			vertex(180, -125);
			vertex(180, -50);
			vertex(220, -15);
			vertex(310, -10);
			vertex(310, 20);
			bezierVertex(200, 40, 230, 40, 150, 0);
			bezierVertex(-175, 170, -175, 170, -230, 160);
		endShape();

		//Hiker's Shirt
		fill(255);
		beginShape();
			vertex(128, -92);
			bezierVertex(135, -30, 135, -30, -10, 80);
			bezierVertex(-110, 0, -110, 0, -110, 0);
			bezierVertex(110, -50, 110, -50, 105, -105);
		endShape();

		//Flag staff
		fill(0,0,0);
		rect(320,-175,10,500);

		//Flag pole
		fill(255,255,0);
		rect(330,-190,230,130);
	

		//Hiker's right hand
		fill(222, 186, 131);
		ellipse(330, 5, 35);

		//Hiker's left hand
		ellipse(-170, -70, 35);

		//Hiker's shirt left
		fill(255);
		quad(-170, -100, -140, -80, -150, -70, -175, -90);

		//Hiker's shirt right
		quad(320, -10, 320, 20, 310, 20, 310, -10);

		//Hiker's Pants
		fill(219, 63, 0);
		beginShape();
			vertex(-10, 80);
			bezierVertex(-15, 100, -15, 100, -10, 120);
			vertex(40, 180);
			vertex(36, 260);
			vertex(-10, 260);
			bezierVertex(-17, 230, -17, 230, -20, 190);
			vertex(-80, 140);
			bezierVertex(-100, 220, -100, 220, -180, 240);
			vertex(-206, 214);
			vertex(-150, 180);
			bezierVertex(-160, 60, -160, 60, -110, 0);
		endShape();

		//Hiker's face
		fill(222, 186, 131);
		quad(180, -125, 180, -50, 106, -105, 106, -125);
		
		//beard
		fill(130, 40, 2);
		beginShape();
			vertex(106, -125);
			bezierVertex(150, -120, 136, -125, 140, -101);
			bezierVertex(205, -85, 125, -90 , 173, -90);
			vertex(127, -90);
			vertex(125, -110);
			vertex(106, -113);
		endShape();	

		//bandana
		fill(0, 138, 158);
		triangle(180, -90, 180, -50, 125, -90);

		//nose
		fill(218, 162, 111);
		ellipse(179, -90, 13, 13);

		//eye
		fill(105, 33, 0);
		ellipse(165, -115, 9);

	pop();

}

//------------------------------------------------------------------------||

//This draws the clouds
function drawClouds()
{
	//Cloud #1
	push();
	fill('rgba(254,238,203,0.60)');
	rect(C1,250,120,15,10);
	rect(C1,90,200,15,10);
	rect(C1,50,100,15,10);
	pop();

//Cloud #1 Movement
	C1= C1 + 0.3;
	if (C1 > 450)
	{
		C1= -300;
	}

//Cloud #2
	push();
	fill('rgba(254,238,203,0.7)');
	rect(C2,100,200,15,10);
	pop();

//Cloud #2 Movement
	C2= C2 + 0.2;
	if (C2 > 450)
	{
		C2= -220;
	}

//Cloud #3
	push();
	fill('rgba(254,238,203,0.75)');
	rect(C3,180,120,15,10);
	pop();

//Cloud #3 Movement
	C3= C3 + 0.2;
	if (C3 > 450)
	{
		C3= -130;
	}

//Cloud #4
	push();
	fill('rgba(254,238,203,0.70)');
	rect(C4,200,120,15,10);
	pop();

//Cloud #4 Movement
	C4= C4 + 0.2;
	if (C4 > 450)
	{
		C4= -140;
	}

//Cloud #5
	push();
	fill('rgba(254,238,203,0.75)');
	rect(C5,70,200,15,10);
	pop();

//Cloud #5 Movement
	C5= C5 + .25;
	if (C5 > 450)
	{
		C5= -250;
	}

//Cloud #6
	push();
	fill('rgba(254,238,203,0.75)');
	rect(C6,150,110,15,10);
	pop();

//Cloud #6 Movement
	C6= C6 + 0.2;
	if (C6 > 450)
	{
		C6= -130;
	}

//Cloud #7
	push();
	fill('rgba(254,238,203,0.75)');
	rect(C7,20,140,15,10);
	pop();

//Cloud #7 Movement
	C7= C7 + .25;
	if (C7 > 450)
	{
		C7= -200;
	}


//Cloud #CA
	push();
	fill('rgba(254,238,203,0.6)');
	rect(CA,30,100,15,10);
	pop();

//Cloud #cA Movement
	CA= CA+ .25;
	if (CA > 450)
	{
		CA= -150;
	}

//Cloud #CA #2
	push();
	fill('rgba(254,238,203,0.9)');
	rect(CA,80,120,15,10);
	pop();

//Cloud #CA 2 Movement
	CA= CA+ .3;
	if (CA > 450)
	{
		CA= -150;
	}

//Cloud #CB
	push();
	fill('rgba(254,238,203,0.6)');
	rect(CB,120,100,15,10);
	pop();

//Cloud #CB Movement
	CB= CB+ .2;
	if (CB > 450)
	{
		CB= -150;
	}

//Cloud #CB #2
	push();
	fill('rgba(254,238,203,0.9)');
	rect(CB,160,200,15,10);
	pop();

//Cloud #CB #2 Movement
	CB= CB+ .2;
	if (CB > 450)
	{
		CB= -220;
	}
}

//------------------------------------------------------------------------||

function drawBGMoutains()
{
	//blue parts not connected to main aspect of mountain
	fill(79,170,160);
	beginShape();
		vertex(50,200);
		vertex(80,220);
		vertex(80,250);
		vertex(0,250);
	endShape(CLOSE);

	beginShape();
		vertex(360,270);
		vertex(400,280);
		vertex(400,300);
		vertex(360,300);
	endShape();

	//Mountain; white
	fill(254,238,203);
	beginShape();
		vertex(0,250);
		vertex(50,200);
		vertex(50,220);
		vertex(180,130);
	
	//highest tip of mountain
		vertex(200,130);
		vertex(200,800);
		vertex(0,800);
	endShape(CLOSE);

	fill(254,238,203);
	beginShape(254,238,203);
		vertex(290,300);
		vertex(330,290);
		//tip of other mounrain
		vertex(360,270);
		vertex(380,290);
		vertex(400,260);
		vertex(400,800);
		vertex(0,800);
	endShape(CLOSE);

	//Mountain; blue 
	fill(79,170,160);
	beginShape();
		//1
		vertex(0,250);
		//2
		vertex(130,290);
		//3
		vertex(80,250);
		//4
		vertex(120,210);
		//5
		vertex(120,225);
		//6 THE TIP
		vertex(200,130);
		//7
		vertex(240,200);
		//8
		vertex(235,220);
		//9
		vertex(270,290);
		//10
		vertex(290,300);
		//11
		vertex(320,360);
		//12
		vertex(310,370);
		vertex(340,370);
		//13
		vertex(375,350);
		//14
		vertex(400,280);
		//15
		vertex(400,800);
		//16
		vertex(0,800);
	endShape(CLOSE);

	//BLUE PART CLOSEST TO HIGHEST TIP
	fill(79,170,160);
	beginShape();
		vertex(145,155);
		//highest tip of mountain
		vertex(170,137);
		vertex(160,150);
		vertex(150,160);
		vertex(101,200);
		vertex(100,200);
	endShape(CLOSE);

	//triangle blue part near second tip.
	fill(79,170,160);
	triangle(310,310,362,315,378,295);
}

//------------------------------------------------------------------------||

function drawHouse()
{
	var SUPERHOUSEPRO2016 = 1;
	var xxxSEXYtime = -75;
	var yyyYouGottaBeSoRood = 10;

	push();

		translate(xxxSEXYtime,yyyYouGottaBeSoRood);
		scale(SUPERHOUSEPRO2016);

		//Roof of redbuilding
		fill(254,238,203);
		noStroke();
		beginShape();
			vertex(220,443);
			vertex(280,443);
			vertex(376,500);
			//vertex(320,500);
			vertex(250,500);
		endShape(CLOSE);

		//THE RED BUILDING 
		fill(201,57,78);
		noStroke();
		beginShape();
			vertex(190,475);
			vertex(220,443);
			vertex(280,482);
			vertex(280,491);
			vertex(240,480);
			vertex(190,515);
		endShape(CLOSE);

		//WHITE PART SQAURE TO MAKE ROOF LOOK ROUND
		fill(254,238,203);
		rect(245,450,40,40);

		//Ellipse that makes the curved portion of the red building!
		fill(201,57,78);
		ellipse(242,469,20,20);

	pop();
}

//------------------------------------------------------------------------||

function drawFGMoutains()
{
	//Slope Foreground
	fill(254,238,203);
	noStroke();
	beginShape();
		vertex(0,519);
		vertex(400,449);
		vertex(400,600);
		vertex(0,600);
	endShape(CLOSE);

	push();
		scale(.77);
		translate(0,350);
		//mountain 1
		fill(103, 138, 117);
		beginShape();
			vertex(0, 375);
			vertex(100, 275);
			vertex(200, 350);
			vertex(200, 600);
			vertex(0, 600);
		endShape();
	
		fill(54, 78, 71);
		triangle(195, 345, 100, 275, 100, 600);
	
		//mountain 2
		fill(76, 87, 67);
		triangle(0, 600, 300, 200, 600, 600);
	
		fill(68, 84, 64);
		triangle(300, 200, 600, 600, 300, 600);

		//moutain 3
		fill(98, 101, 70);
		beginShape();
			vertex(150, 600);
			bezierVertex(155, 580, 150, 580, 175, 550);
			bezierVertex(180, 520, 170, 510, 210, 460);
			bezierVertex(260, 400, 240, 420, 280, 400);
			bezierVertex(300, 380, 300, 285 ,370, 280);
			vertex(600, 220);
			vertex(600, 600);
		endShape();	

		//moutain 4
		fill(79, 74, 62);
		beginShape();
			vertex(345, 600);
			vertex(380, 520);
			bezierVertex(420, 470, 420, 470, 420, 350);
			vertex(440, 240);
			bezierVertex(480, 230, 460, 150, 460, 150);
			bezierVertex(500, 50, 520, 90, 520, 25);
			vertex(550, 0);
			vertex(600, 0);
			vertex(600, 600);
		endShape();
	pop();
}

//------------------------------------------------------------------------||

function drawRope()
{
	//rope
	noFill();
	stroke(88, 48, 0);
	strokeWeight(.75);
	beginShape();
		vertex(575, 0);
		vertex(380, 350);
		vertex(325, 475);
		bezierVertex(295, 600, 305, 550, 300, 800);
	endShape();
}

//------------------------------------------------------------------------||

function draw() 
{
	background('rgb(242,143,100)');
	noStroke();
	
	//draws the entire scene
	drawClouds();
	drawBGMoutains();
	drawHouse();
	drawFGMoutains();

	//moving hiker
	hiker_y -= .55;

	if(hiker_y < 115)
	{
		hiker_y = 125;
	}
	drawHiker(323, 500, .075, -24*PI/50, 190, 191, 0);
	
	drawRope();

	drawHiker(190, hiker_y, .025, 0, 79, 229, 0);

}
