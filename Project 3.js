var Z,Z1;
function setup()
{
  createCanvas(500,500);
  background(79,170,161);
  Z=0;
  Z1=PI;
   //Drawing Objects-The pillars and vines on it(background)
for(x=25; x<width; x+=150)	
{  for (y=60; y<height; y+=125)
  {	
	noStroke();
    BasePillar(x,y,0.27);
    vinex=x-13.5;
  	viney=y+48.0;
  	vinex2=x+12;
  	for(var i=0;i<9*PI;i+=PI/100)
  	{
		vinex+=sin(i)*0.4;
  		vinex2+=cos(i+PI/2)*0.4;
  		fill(98,173,48);
  		ellipse(vinex,viney,3);
  		ellipse(vinex2,viney,3);
  		viney-=0.08;
  	 	fill(160);
	}
  }
}
}
function BasePillar(x,y,sc)
{
  push();
  translate(x,y);
  scale(sc);

  noStroke();

  var count = 0; //Test Even and Odds for grey and white pattern on pillar

  //THIS IS BOTTOM SQUARE: DRAWN FIRST SO THAT CIRCLE ASPECT OVERLAPS IT.
  push();
  //Bottom
  fill(100);
  beginShape();
  vertex(0,200);
  vertex(100,225);
  vertex(0,275);
  vertex(-100,225);
  endShape(CLOSE);

  //Connection of Bot and Top
  fill(100);
  rect(-100,175,200,50);

  //Top
  fill(210);
  beginShape();
  vertex(0,125);
  vertex(100,175);
  vertex(0,225);
  vertex(-100,175);
  endShape(CLOSE);

  //Shading on the right
  fill(60);
  beginShape();
  vertex(0,225);
  vertex(100,175);
  vertex(100,225);
  vertex(0,275);
  endShape(CLOSE);
  pop();

  //=======================================================//

  //Creation of Pillars (Cyliner Aspect)
  for(var i=320; i>0; i-=20)
  {

   ellipse(0,-150+i,100,50);

   count += 1;

      if (count % 2==0) //Even number gives grey fill
      {
       fill(160);
      }
        else if(count%2==1) //Odd number gives white fill
      {
       fill(255);
      }
   }

   //======================================================//


  //THIS IS TOP SQUARE: DRAWN LAST SO IT IS ON TOP OF CIRCLE ASPECTS OF PILLAR.
  push();
  //Bottom
  fill(100);
  beginShape();
  vertex(0,-175);
  vertex(100,-125);
  vertex(0,-75);
  vertex(-100,-125);
  endShape(CLOSE);

  //Connection of Bot and Top
  fill(100);
  rect(-100,-175,200,50);

  //Top
  fill(210);
  beginShape();
  vertex(0,-225);
  vertex(100,-175);
  vertex(0,-125);
  vertex(-100,-175);
  endShape(CLOSE);

  //Shading on the right
  fill(60);
  beginShape();
  vertex(0,-125);
  vertex(100,-175);
  vertex(100,-125);
  vertex(0,-75);
  endShape(CLOSE);
  pop();
  pop();
}

//======================================================/
function Arms2(x,y,rot,sc)
{
  push();

  translate(x,y);
  rotate(rot);
  scale(sc);
  noStroke();

  var x0,y0,x1,y1,radius,Armsize;
  Armsize = 15;
  radius = 100;

  for(G=PI; G<Z1; G+=PI/50)
  { 
    x0 = x+radius*cos(-G);
    y0 = y+radius*sin(-G);
  
    fill(128,0,128);
    ellipse(x0,y0,Armsize);
    radius -= 0.1*2;
    Armsize -= 0.12;
  }

  Z1+=PI/50;

  if (Z1>3*PI)
  {
    Z1 = 0;
  }

  pop();

}
function Arms(x,y,rot,sc)
{
  push();

  translate(x,y);
  rotate(rot);
  scale(sc);
  noStroke();

  var x0,y0,radius,Armsize;

  Armsize = 15;
  radius = 100;

  for(G=0; G<Z; G+=PI/50)
  { 
    x0 = x+radius*cos(G);
    y0 = y+radius*sin(G);
  
    fill(128,0,128);
    ellipse(x0,y0,Armsize);

    radius -= 0.1*2;
    Armsize -= 0.12;
  }

  Z+=PI/50;

  if(Z>2*PI)
  {
    Z -=PI/50;
  }

 

  pop();

}
function draw()
{

 //Drawing the kraken's body devoid of the tentacles
push();
translate(250,50);
fill(128,0,128);
push();
rotate(PI/4);
noStroke();
rect(0,0,100,100,20);
pop();
noStroke(0);
rect(-40,70,80,100,20);
ellipse(0,150,60,120);
fill(0);
ellipse(-20,180,15);
fill(255);
ellipse(-20,180,10);
fill(0);
ellipse(20,180,15);
fill(255);
ellipse(20,180,10);
pop();
fill(0);
/* Making the kraken's tentacles. Will calclulate PI/10 for 10 tentacles , 
then loop1: loop through all the positions drawing some of the tentacle.
when draw is called again, all the tentacles are redrawn by the for function
only this time a little further.*/
Arms(60,100,0,1);
Arms(80,100,0,1);
Arms2(190,105,0,1); 
Arms2(170,100,0,1); 
}