function setup() 
{
  createCanvas(500,500);
  background('rgb(79, 170, 161)');
  noLoop();
  noStroke();


  //Background diagnol grey
  fill('rgba(90,90,90,0.4)');
  triangle(0,500,500,0,500,500); 

  fill('rgba(0,0,0,0.5)');
  beginShape();
  vertex(250,125);
  vertex(375,250);
  vertex(250,375);
  vertex(125,250);
  endShape(CLOSE);
}

function Rectangle(x,y,color,rot,sc)
{
  push();

  translate(x,y);
  scale(sc);
  rotate(rot);
  fill(color);

  var B = 1;
  var E = random(10,20);

  rect(0,0,B,E,5);

  pop();
}

function Triangle(x,y,color,rot,sc)
{
  push();

  translate(x,y);
  scale(sc);
  rotate(rot);
  fill(color);

  beginShape();
  vertex(0,0);
  vertex(4,25);
  vertex(8,0);
  endShape(CLOSE);

  pop();
}

function Circle(x,y,color,sc)
{
  push();

  translate(x,y);
  scale(sc);
  fill(color);

  ellipse(0,0,15,15);

  pop();
}

function Polygon(x,y,radius,points,color,rot)
{
  var angle = 2*PI / points;

  beginShape();
  for (var i=0; i<2*PI; i+= angle) 
  {
    var sx = x + cos(i) * radius;
    var sy = y + sin(i) * radius;
    vertex(sx, sy);
    endShape(CLOSE);
  }

}

function draw() 
{

function Wave(x,y)
{
  var xWave = random(width);
  var wWave = 5;

  for(var y=0; y<=500; y += 10)
  {
   rect(xWave,y,wWave,20);
   xWave += random(-10,10);
   wWave += random(-5,5);
  }
}
 for (i=0; i<20; i++)
 {
 	fill(random(150,255),random(150,255),random(150,255));
Wave(random(width),random(height));

 }

  for (i=0; i<20; i++)
  {
    Rectangle(random(width),random(height),
          color(random(200,255),random(200,255),random(200,255)),
          random(0,2*PI),
          random(8,10));
  }

  for (var i=0; i<20; i++)
  {
    Triangle(random(width),random(height),
          color(random(255),random(200),random(100)),
          random(2*PI),
          random(3,8));
  }

  for (i=0; i<20; i++)
  {
    Circle(random(width),random(height),
          color(random(255),random(200),random(100)),
          random(4,6));
  }

  for (i=0; i<20; i++)
  {
    push();
    fill(random(255),random(200),random(100));
    rotate(0,2*PI);
    Polygon(random(width), random(height), random(20,50), random(3,6));
    pop();
  }

    for (i=0; i<20; i++)
  {
    Circle(random(width),random(height),
          color(random(200),random(230,255),random(200)),
          random(3,4));
  }

}



  



