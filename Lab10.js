//Example of very simple particle systems - inroduction to objects in javascript

//define a single particle
function Particle(x,y,red,green,blue) 
{
   //the data associated with a particle
   this.accelY = 0.05; //gravity
   this.velX = random(-4, 4);
   this.velY = random(-4, 4);
   //note this particle only can vary its blue color - change this to include red and green
   //this.pcolorR = random(0,255);
  // this.pcolorG = random (0,255);
  // this.pcolorB = random(0, 255);
   this.locX = x;
   this.locY = y;
   this.r = 5;
   this.life = 150;
  
   //a function to update the particle each frame
   this.updateP = function()
   {
      this.velY += this.accelY;
      this.locX += this.velX;
      this.locY += this.velY;
      this.life -= 1.0;
   };
  
   //function to draw a particle
   this.renderP = function() 
   {
      noStroke();
      push();
         ellipseMode(CENTER);
         //very simple coloring
         fill(red,green,blue,this.life);
         translate(this.locX, this.locY);
         rotate(random(0,2*PI));
         ellipse(0, 0, this.r+random(-5,5), this.r+random(-5,5));
      pop();
   };
} //end of particle object definition


//define a group of particles as a particleSys
function PSys(sX, sY, num, red, green, blue)
{
    //the data - lots of particles
   this.particles = [];
   for (var i=0; i < num; i++) 
   {
      this.particles.push(new Particle(sX, sY, red, green, blue));
   }
  
    //function defining what to do each frame
   this.run = function() 
   {
      for (var i=0; i < this.particles.length; i++) 
      {
         //update each particle per frame
         this.particles[i].updateP();
         this.particles[i].renderP();
      }
   }
}

//declare of a variable to represent a particle system
var fireW1 = [];

function setup() 
{
   createCanvas(500, 500);
   colorMode(RGB, 255, 255, 255, 100);
   frameRate(40);
}

function draw() 
{
   background(0);

   //run the particle system
   for (var i=0; i<fireW1.length; i++)
   {
      fireW1[i].run();
   }
}

function mousePressed()
{
   red = random(255);
   green = random(255);
   blue = random(255);

   fireW1.push(new PSys(mouseX, mouseY, random(75,125), red, green, blue));
}