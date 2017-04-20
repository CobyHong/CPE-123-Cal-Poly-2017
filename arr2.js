var numBalls;
var dx = [];
var dy = [];
var ballX = [];
var ballY = [];
var ballColor = [];

function setup() 
{
   createCanvas(500, 500);
   numBalls = 50;

   //set balls directions
   for (var i =0; i < numBalls; i++) {
      dx.push(random(1,3));
      dy.push(random(-3, 3));
      ballColor.push(color(random(0, 10), random(0, 255), random(0, 255)))
      ballX.push(0);
      ballY.push(random(0, 500));
   }
}

function draw() 
{
   background(0);

   for (var i=0; i < numBalls; i++) 
   {
      // draw ball
      fill(ballColor[i]);
      ellipse(ballX[i], ballY[i], 25, 25);
      
      // updates the ball's location
      ballX[i] += dx[i];
      ballY[i] += dy[i];
      
      // bounces the ball
      if (ballX[i] > width || ballX[i] < 0) 
         dx[i] = -dx[i];

      if (ballY[i] < 0 || ballY[i] > height) 
         dy[i] = -dy[i];
   }
}