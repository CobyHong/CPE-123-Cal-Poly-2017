var budx, budy;
var budxx, budyy;
var leafx,leafy;
var leafxx,leafyy;
var lipx, lipy;


var F;


var click = false;
var a = 0.55;

//Move Everything for Project 2
var XMEN;
//Project 2 LEAF
var L;
var T;

//for eyeball
var e;
var z;

var I,B;

//For Rect

var Rectx
var Recty

function setup()
{
  createCanvas(800,700);
  stroke(241,214,203);
  strokeWeight(2.75);

budx = 460;
budy = 200;

budxx = 200;
budyy= 430;

leafx= 255;
leafy= 55;

leafxx= 340;
leafyy= 540;

lipx = 220;
lipy= 550;

XMEN = 300; 
L = PI/3;
T = 0.005;
F = frameCount;

e= 0;
z= 0;

I= 300; //For eyeballs x
B= 270; //For eyeballs y

rectMode(CENTER); //For the square mans

}

function draw()
{
  background('rgb(241,214,203)');


//=======================================================
//Foreground
fill('rgba(255,39,77,0.2)');
 beginShape();
 vertex(0,0);
 vertex(100,0);
 vertex(100,700);
 vertex(0,700);
 endShape();
//=======================================================

//=======================================================
//Very Filthy messy looking code for rotating squares in sun
push();
fill('rgba(255,239,77,0.2)');
 translate(100,100);
rectMode(CENTER);
rotate(radians(frameCount));
rect(0,0,170,170);
pop();
push();
fill('rgba(255,39,77,0.2)');
 translate(100,100);
rectMode(CENTER);
rotate(radians(frameCount+20));
rect(0,0,170,170);
pop();
push();
fill('rgba(255,239,77,0.2)');
 translate(100,100);
rectMode(CENTER);
rotate(radians(frameCount+40));
rect(0,0,170,170);
pop();
push();
fill('rgba(255,39,77,0.2)');
 translate(100,100);
rectMode(CENTER);
rotate(radians(+frameCount+60));
rect(0,0,170,170);
pop();

push();
fill('rgba(255,239,77,0.2)');
 translate(100,100);
rectMode(CENTER);
rotate(radians(-frameCount));
rect(0,0,170,170);
pop();
push();
fill('rgba(255,39,77,0.2)');
 translate(100,100);
rectMode(CENTER);
rotate(radians(-frameCount-20));
rect(0,0,170,170);
pop();
push();
fill('rgba(255,239,77,0.2)');
 translate(100,100);
rectMode(CENTER);
rotate(radians(-frameCount-40));
rect(0,0,170,170);
pop();
push();
fill('rgba(255,39,77,0.2)');
 translate(100,100);
rectMode(CENTER);
rotate(radians(-frameCount-60));
rect(0,0,170,170);
pop();
//=======================================================

//=======================================================
//Non-moving Aspect of Sun + Lines
push();
  fill('rgba(224,80,119,0.2)');
  ellipse(100,100,200);
pop();
push();
   fill('rgba(255,74,100,0.6)');
  ellipse(100,100,180);
pop();
//lines
push();
stroke('rgba(224,80,119,0.9)');
line(0,500,800,300);
stroke('rgba(255,74,100,0.6)');
line(0,350,800,150);
pop();


//=======================================================

//=======================================================
//Stem #1 (Longest)
fill(136,145,79);

beginShape();
curveVertex(XMEN+400,700);
curveVertex(XMEN+390,700);
curveVertex(XMEN+400,480);
curveVertex(XMEN+420,400);
curveVertex(XMEN+440,300);
curveVertex(XMEN+410,200);
curveVertex(XMEN+360,100);
curveVertex(XMEN+360,60);
curveVertex(XMEN+320,20);
//
curveVertex(XMEN+300,20);
curveVertex(XMEN+340,60);
curveVertex(XMEN+340,100);

vertex(XMEN+380,180);
vertex(XMEN+280,210);
vertex(XMEN+260,220);
vertex(XMEN+240,250);

curveVertex(XMEN+390,200);
curveVertex(XMEN+420,300);
curveVertex(XMEN+400,400);
curveVertex(XMEN+380,480);
curveVertex(XMEN+360,700);
curveVertex(XMEN+360,700);
endShape();

//Stem #1 Shading
fill(91,77,53);
beginShape();
curveVertex(XMEN+400,700);
curveVertex(XMEN+390,700);
curveVertex(XMEN+400,480);
curveVertex(XMEN+420,400);
curveVertex(XMEN+440,300);
curveVertex(XMEN+410,200);
curveVertex(XMEN+360,100);
curveVertex(XMEN+360,60);
curveVertex(XMEN+320,20);
//
curveVertex(XMEN+300,20);
curveVertex(XMEN+350,60);
curveVertex(XMEN+355,100);


vertex(XMEN+380,187);
curveVertex(XMEN+270,210);
curveVertex(XMEN+240,230);
vertex(XMEN+310,215);


curveVertex(XMEN+400,200);
curveVertex(XMEN+435,300);
curveVertex(XMEN+410,400);
curveVertex(XMEN+395,480);
curveVertex(XMEN+380,700);
curveVertex(XMEN+380,700);
endShape();
//=======================================================

//=======================================================
//Stem #2 (smallest)

fill(94,122,42);
beginShape();
curveVertex(XMEN+320,700);
curveVertex(XMEN+320,700);
curveVertex(XMEN+400,580);
vertex(XMEN+410,580);
curveVertex(XMEN+380,650);
curveVertex(XMEN+375,700);
curveVertex(XMEN+375,700);
endShape();

//Stem #2 (Shading)
fill(86,68,35);
beginShape();
curveVertex(XMEN+320,700);
curveVertex(XMEN+320,700);
curveVertex(XMEN+400,580);
vertex(XMEN+410,580);
curveVertex(XMEN+360,650);
curveVertex(XMEN+370,700);
curveVertex(XMEN+370,700);
endShape();
//=======================================================

//=======================================================
//Stem #3 (Far Right)
fill(97,135,56);
beginShape();
curveVertex(XMEN+400,700);
curveVertex(XMEN+400,700);
curveVertex(XMEN+415,600);
curveVertex(XMEN+420,500);
curveVertex(XMEN+425,400);
curveVertex(XMEN+460,300);
curveVertex(XMEN+465,230);

curveVertex(XMEN+485,230);
curveVertex(XMEN+480,300);
curveVertex(XMEN+445,400);
curveVertex(XMEN+440,500);
curveVertex(XMEN+430,600);
curveVertex(XMEN+420,700);
curveVertex(XMEN+420,700);
endShape();

//Stem #3 Shading
fill(86,69,37);
beginShape();
curveVertex(XMEN+400,700);
curveVertex(XMEN+410,700);
curveVertex(XMEN+423,600);
curveVertex(XMEN+435,500);
curveVertex(XMEN+435,400);
curveVertex(XMEN+470,300);
curveVertex(XMEN+485,230);

curveVertex(XMEN+485,230);
curveVertex(XMEN+480,300);
curveVertex(XMEN+445,400);
curveVertex(XMEN+440,500);
curveVertex(XMEN+430,600);
curveVertex(XMEN+420,700);
curveVertex(XMEN+420,700);
endShape();
//=======================================================

//=======================================================
//Flower by Mouth
push();
translate(XMEN+budxx,budyy);
rotate(-PI/18);
//The Flower Aspect
fill(224,80,119);
arc(0,0,30,200,PI,2*PI);

fill(255,39,77);
arc(0,0,15,200,PI,2*PI);
fill(181,39,77);
arc(0,0,0.1,200,PI,2*PI);
//The Bud Aspect
fill(112,68,35);
arc(0,0,30,120,-PI/6,-PI*5/6);
fill(119,100,73);
arc(0,0,15,120,-PI/6,-PI*5/6);
pop();
//=======================================================

//=======================================================
//Stem #4 One Connects to Mouth
push();
strokeWeight(1.5);
fill(103,119,73);
beginShape();
curveVertex(XMEN+250,700);
curveVertex(XMEN+250,700);
curveVertex(XMEN+248,660);
curveVertex(XMEN+210,500);

curveVertex(XMEN+180,500);

curveVertex(XMEN+180,500);

curveVertex(XMEN+220,500);
curveVertex(XMEN+258,660);
curveVertex(XMEN+262,700);
curveVertex(XMEN+260,700);
endShape();

//Stem #4 Shading
fill(86,72,45);
beginShape();
curveVertex(XMEN+253,700);
curveVertex(XMEN+253,700);
curveVertex(XMEN+254,660);
vertex(XMEN+215,497);

curveVertex(XMEN+222,505);
curveVertex(XMEN+258,660);
curveVertex(XMEN+262,700);
curveVertex(XMEN+260,700);
endShape();
pop();
//=======================================================

//=======================================================
//SMALL LEAVES ON STEM BY MOUTH
push();
translate(XMEN+budxx-24,budyy+55);
rotate(PI/2);
fill(36,124,61);
ellipse(0,0,15,60);
pop();
//=======================================================

//=======================================================
//Flower on Far Right
fill(224,80,119);
ellipse()

push();
translate(XMEN+budx,budy);
rotate(-PI/10);
//The Flower Aspect
fill(224,80,119);
arc(0,0,40,200,PI,2*PI);
fill(181,39,77);
arc(0,0,20,200,PI,2*PI);
fill(255,39,77);
arc(0,0,10,200,PI,2*PI);
//The Bud Aspect
fill(112,68,35);
arc(0,0,40,120,-PI/6,-PI*5/6);
fill(119,100,73);
arc(0,0,10,120,-PI/6,-PI*5/6);
pop();
//=======================================================

//=======================================================
//Leaf on top [][][][][][][]

push();
ellipseMode(CORNER);
translate(XMEN+leafx+52,leafy-55);
rotate(L);
//Dark Part of Leaf
fill(74,150,33);
rectMode(CORNER);
ellipse(0,0,40,150);
fill(74,135,33);
//Light Part of Leaf
arc(0,0,40,150,-PI/2,-PI*3/2);
arc(0,0,20,150,-PI/2,-PI*3/2);
pop();

//=======================================================
//Lower Lip
push();
translate(XMEN+leafxx,leafyy);
scale(1.5);
rotate(-PI/15);
fill(119,100,73);
beginShape();
curveVertex(0,0);
curveVertex(0,0);
curveVertex(-75,35);
curveVertex(-160,5);
curveVertex(-10,-5);
curveVertex(-75,0);
curveVertex(-20,-7);
curveVertex(0,0);
curveVertex(0,0);
endShape();
//Low Lip Shading
fill(52,124,37);
beginShape();
curveVertex(0,0);
curveVertex(0,0);
curveVertex(-75,35);
curveVertex(-150,15);
curveVertex(-130,5);
curveVertex(-75,10);
curveVertex(-20,0);
curveVertex(0,0);
curveVertex(0,0);
endShape();
//Upper Lip
fill(74,150,33);
beginShape();
curveVertex(0,0);
curveVertex(0,0);
curveVertex(-50,-12);
curveVertex(-75,-7);
curveVertex(-110,-10);
curveVertex(-150,10);
curveVertex(-130,5);
curveVertex(-75,10);
curveVertex(-20,0);
curveVertex(0,0);
curveVertex(0,0);
endShape();
pop();

//=======================================================

//=======================================================
//The Mouse Clicky Thing That I have no idea how works because someone showed me it and I'm incredibly lazy.
if(click)
{


push();
translate(XMEN+I,B);
rotate(-PI/11);
  fill('rgba(224,80,119,0.5)');
  ellipse(0,0,100,50);
   fill('rgba(255,39,77,0.6)');
  ellipse(e,z,40);
pop();
push();
translate(XMEN+I-260,B+75);
rotate(-PI/11);
  fill('rgba(224,80,119,0.5)');
  ellipse(0,0,100,50);
   fill('rgba(255,39,77,0.6)');
  ellipse(e,z,40);
pop();

e = e + a+0.5;
if (e>I-275 || e<-28)
{
  a= -a-0.5;
}

L = L+T;

if (L>PI/2.5 || L<PI/3)
{
	T= -T;
}
}}

function mouseReleased()
{
  click = !click;
}

//=======================================================