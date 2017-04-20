function setup()
{
  createCanvas(1366,768);
  background('rgb(79,170,161)');
  noStroke();
  noLoop();

  fill(random(230,255),random(170,190),random(100,120));
  ellipse(683,100,75);

}

function mountain(x,y,color,sc)
{
  push();

  translate(x,y);
  fill(color);
  scale(sc);

  beginShape();
  vertex(0,720);
  curveVertex(540,200);
  vertex(1080,720);
  endShape(CLOSE);

  pop();
}

function weird(x,y,color,sc)
{
  push();

  translate(x, y);
  fill(color);
  scale(sc);

  var w = 10;
  var h = 10;

  for (var x=200; x<=300; x += 30)
  {
    ellipse(x,0,w,h+random(-10,10));
    
    w += random(-10,10);
    h += random(-10,10);
  }
  endShape(CLOSE);
}

function Trees(x,y,rot,sc)
{
  translate(x,y);
  rotate(rot);
  scale(sc);

  for (var x=0; x<=20; x+=1)
  { 
    // push();
    fill(146,123,79);
    rect(x+10,17,4,1,0.5);
    // pop();

    fill(random(70,100),random(142,200),random(70,100));
    rect(x,random(13,18),random(10),random(10),2);
  }
}

function Clouds(x,y,sc)
{
  translate(x,y);
  scale(sc);

  for (var x=0; x<=100; x+=50)
  { 

    fill(random(230,250),random(230,250),random(230,250));
    rect(x,random(5,10),random(5,25),random(1,2),2);
  }
}

function Grass(x,y,color,sc)
{
  push();

  translate(x, y);
  fill(color);
  scale(sc);

  beginShape();
  for (var x=0; x<=100; x += 5)
  {
   vertex(0, 300);
   vertex(x, random(-50));
   vertex(x+10,random(20,-50));
   vertex(x+40,0);
  }
  endShape(CLOSE);

  pop();
}

function draw()
{
  for (i=0; i<100; i++)
  {
    mountain(random(width-900),random(100,300),
      color(random(120,140),random(60,100),random(120,150)),
      0.75);
  }

  for (i=0; i<100; i++)
  {
    push();
    weird(300,200, //x,y
             color(random(100,200),random(100,255),random(100,255)), //color
             1.5); //scaling
    pop();
  }

      for (i=0; i<100; i++)
  {
    push();
    Grass(random(-100,1080), random(720,800), //x,y
             color(random(200,255),random(200,240),random(100,160)), //color
             5); //scaling
    pop();
  }

  for (i=0; i<6; i++)
  {
    push();
    Trees(random(500,1200),300, //x,y
          PI/2, //rot
          10); //scaling
    pop();
  }

  for (i=0; i<100; i++)
  {
    push();
    Grass(random(-100,1080),860, //x,y
             color(random(200,210),random(240,255),random(80,100)), //color
             5); //scaling
    pop();
  }

  for (i=0; i<10; i++)
  {
    push();
    Clouds(random(-100,500),20, //x,y
          10); //scaling
    pop();
  }
  
}


