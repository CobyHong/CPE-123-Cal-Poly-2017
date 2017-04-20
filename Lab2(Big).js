function setup()
{
	createCanvas(400,600);
}
function draw() {
	background('rgb(126,232,232)');
	noStroke();

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

//------------------------------------------------------------------------||
//TRYING TO TRANSFORM THIS HOUSE BIGGER OR SMALLER AND STUFF

var SUPERHOUSEPRO2016 = 2;
var xxxSEXYtime = 200;
var yyyYouGottaBeSoRood = 311;

push();

translate(xxxSEXYtime,yyyYouGottaBeSoRood);
scale(SUPERHOUSEPRO2016);

//Roof of redbuilding
fill(254,238,203);
noStroke();
beginShape();
    vertex(20,43);
    vertex(80,43);
    vertex(176,100);
    //vertex(320,500);
    vertex(50,100);
endShape(CLOSE);

//THE RED BUILDING 
fill(201,57,78);
noStroke();
beginShape();
    vertex(-10,75);
    vertex(20,43);
    vertex(80,82);
    vertex(80,91);
    vertex(40,80);
    vertex(-10,115);
endShape(CLOSE);

//WHITE PART SQAURE TO MAKE ROOF LOOK ROUND
fill(254,238,203);
rect(45,50,40,40);

//Ellipse that makes the curved portion of the red building!
fill(201,57,78);
ellipse(42,69,20,20);
pop();

//TRYING TO TRANSFORM THIS HOUSE BIGGER OR SMALLER AND STUFF
//------------------------------------------------------------------------||

//Slope Foreground
fill(254,238,203);
noStroke();
beginShape();
	vertex(0,519);
	vertex(400,449);
	vertex(400,600);
	vertex(0,600);
endShape(CLOSE);


}
