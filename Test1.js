function draw()
{	
	createCanvas(400,400);
	background(0);

	ellipse(200,200,300);

	fill(0);
	ellipse(100,200,100);
	ellipse(300,200,100);

	fill(255,0,0);

	var leftX=100;
	var leftY=200;

	var Leftpupil;


	Leftpupil = createVector(mouseX-leftX,mouseY-leftY);
	Leftpupil.normalize();
	Leftpupil.mult(30);
	ellipse(leftX+Leftpupil.x,leftY+Leftpupil.y,40);

	//===========================================================//

	var rightX=300;
	var rightY=200;

	var Rightpupil;


	Rightpupil = createVector(mouseX-rightX,mouseY-rightY);
	Rightpupil.normalize();
	Rightpupil.mult(30);
	ellipse(rightX+Rightpupil.x,rightY+Rightpupil.y,40);


}