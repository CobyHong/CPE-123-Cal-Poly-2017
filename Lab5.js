var A; //A is theta
var radius;
//var SPEED;
var red,green,blue;

var maxtheta;


function setup() 
{
  createCanvas(490,490);
  noStroke();

  background(0);

  A=250;
  radius=0;
  //SPEED=250;
  red=255;
  green=blue=0;

  maxtheta = 0;
 
}

function Car(x,y,rot,sc)
{
  push();

  translate(x, y);
  rotate(rot);
  scale(sc);

  var B = -5;

  noStroke()
  fill(255,58,58);
  triangle(0+B,0+B,15+B,5+B,0+B,10+B);


  pop();
}

function Track(x,y,sc)
{
  push();

  translate(x,y);
  scale(sc);

  var x0,y0;

  for(Z=0; Z<2*PI; Z+=0.05)
  {	
    x0 = 219+100*cos(Z);
    y0 = 215+100*sin(2*Z);
  
    fill('rgba(0,0,0,0.5)');
    stroke(79,random(200.255),random(170,255));
    rect(x0,y0,50,10);


    pop();
  }

}

function back(x,y,color)
{
  push();

  translate(x,y);
  fill(color);

  var x2,y2;
  var b=false;

  //SPEED += 2*PI/700;

  for (SPEED=0; SPEED<maxtheta; SPEED+=2*PI/700)
  {
   x2 = 245 + radius*(cos(2*SPEED) + cos(14*SPEED)/2 + sin(0*SPEED)/3);
   y2 = 245 + radius*(sin(2*SPEED) + sin(14*SPEED)/2 + cos(0*SPEED)/3);

   radius += 0.005;
 
   fill(0);

   stroke(color);
   strokeWeight(1.5);
   point(x2,y2);

   if(radius>width-200)
   {
   	b=true;
   }
   	else
   {
   	b=false;
   }

   if (b==true)
   {
   	//When it background expands too far
   	radius = -radius;
   	blue +=100;
   	red -+100;
   }

   if (b==false)
   {
   	//Shrinks too much
   	radius = +radius;
   	blue -+100;
   }

  }

   maxtheta += 2*PI/700;

  pop();
}

function draw() 
{
  push();

  noFill();
  background('rgba(0,0,0,0.05)');
  stroke(177,random(44,255),random(221,255));
  beginShape();
  vertex(245,random(100,200));
  vertex(400,200);
  vertex(245,random(200,400));
  vertex(90,200);
  endShape(CLOSE);

  push();

//FOR MOVEMENT OF CAR
  var x0,y0,x1,y1,Turn;

 x0 = 245+100*cos(A);
 y0 = 220+85*sin(2*A);
    
  push();
  A += 2*PI/200; 

  x1 = 245+100*cos(A);
  y1 = 220+85*sin(2*A);

  pop();
  
  Turn = atan((y1-y0)/(x1-x0)); //Converts slope into angle for rotation

  A = A % (2 * PI); //Sets limit percent to 2*PI

  if (A >= PI)
  {
    Turn+=PI; // Have no idea how this fixed the annoying invert but AYYY!!!! LOL
  }

  pop();

//Drawing of Objects
  push();
  back(0,-25,color(red,green,blue));
  pop();

  push();
  Track(0,0);
  pop();

  
  push();
  Car(x1,y1,Turn+PI,1.25);
  pop();
}