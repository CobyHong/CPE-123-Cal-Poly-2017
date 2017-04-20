var bugX = [];
var bugY = [];
var bugColor = [];

var leafX = [];
var leafY = [];
var leafColor = [];
var leafRot = [];
var leafScale = [];

var dx = [];
var dy = [];

var numBug;

function setup()
{
  createCanvas(500,500);
  background(187, 93, 17);

  numBug = 10;

  //Bug Variables
  for (var i=0; i<numBug; i++)
  {
    bugX.push(random(width));
    bugY.push(random(height));
    bugColor.push(color(random(180,200),random(45,80),random(64,150)));
    dx.push(-3,3);
    dy.push(-3,3);
  }

  //Leaf Variables
  for(var i=0; i<15; i++)
  {
    leafX.push(random(width));
    leafY.push(random(height));
    leafColor.push(color(random(50,100),random(160,230),random(30,100)));
    leafRot.push(random(2*PI));
    leafScale.push(random(0.3,0.7));
  }

}

//===============================================================================//

function draw()
{
  background(135,74,33);

  //Drawing Leafs
  for (var i=0; i<20; i++)
  {
   drawLeafs(leafX[i],leafY[i],random(color(255)),leafRot[i],leafScale[i]);   //issue: Using leafColor[i] removes moving bugs? Why!?!?!
  }
 
  //Bug
  for (var i = 0; i<numBug; i++)
  {
   drawBug(bugX[i],bugY[i],bugColor[i],dx[i],dy[i]);  
    
   bugX[i]+=dx[i];
   bugY[i]+=dy[i];
    
   if(bugX[i]>width || bugX[i]<0)
    dx[i] = -dx[i]
  
    
   if(bugY[i]>height || bugY[i]<0)
    dy[i] = -dy[i]
  }

}

//===============================================================================//

function drawLeafs(x,y,color,rot,sc)
{
  push(); 

  translate(x,y);
  fill(color); // wtf
  rotate(rot);
  scale(sc);
  
  beginShape();
  vertex(0,-150);
  vertex(0,-150);
  curveVertex(75,0);
  vertex(10,150);
  vertex(-10,150);
  curveVertex(-75,0);
  endShape(CLOSE);

  line(0,-150,0,150);

  pop();
}

function drawBug(x,y,color,dx,dy)
{
  push();

  translate(x,y);
  rotate(atan2(dy,dx)+PI/2);

  stroke(187,93,17);
  line(0,0,20,-75);
  line(0,0,-20,-75);

  fill(134,45,64);
  ellipse(0,0,50);
  ellipse(0,0,0,50);
  fill(color);
  rect(-10,-30,20,10,5);

  //Green Dots Upper
  fill(144,237,167);
  ellipse(-10,-8,15);
  ellipse(10,-8,15);

  //Dark Green Dots Upper
  fill(92,178,112);
  ellipse(-10,-8,8);
  ellipse(10,-8,8);

  //Dark Red Bottom
  fill(91,30,18);
  ellipse(-10,9,12,10);
  ellipse(10,9,12,10);

  //Yellow
  fill(252,233,90);
  ellipse(-10,10,6,9);
  ellipse(10,10,6,9);

  pop();

}





