var Z,Z2;

function setup()
{
  createCanvas(500,500);
  background(79,170,161);

  Z=PI;
  Z2=0;
}

function BasePillar(x,y,sc)
{
  push();

  translate(x,y);
  scale(sc);

  noStroke();

  var count = 0; //Test Even and Odds for grey and white pattern on pillar

  //THIS IS BOTTOM SQUARE: DRAWN FIRST SO THAT CIRCLE ASPECT OVERLAPS IT.
  //Bottom
  push();
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

function Arms(x,y,rot,sc)
{
  push();

  translate(x,y);
  rotate(rot);
  scale(sc);
  noStroke();

  var x0,y0,x1,y1,radius,Armsize;
  var b=false;

  Armsize = 50;
  Armsize2= 20;
  radius = 100;

  for(G=PI; G<Z; G+=PI/200)
  { 
    x0 = x+radius*cos(-G);
    y0 = y+radius*sin(-G);
  
    fill(255, 147, 112);
    ellipse(x0,y0,Armsize);
    radius -= 0.1*2;
    Armsize -= 0.12;
  }

  Z+=PI/200;

  if (Z>3*PI)
  {
    Z = 0;
  }

  pop();

}

function draw()
{
    //BasePillar(250,250,0.5);
    Arms(100,100,0,1);
}