//To start the animation click anywhere in the window
var Dlocx;
var Dlocy;
var dirX, dirY;
var neckR, wingR, time, FlegR;

var Mouth; //Mouth addition

var neckDown = true;
var wingDown = false;
var animate = false;
var legDown = false;

//Mouth
var MouthDown = true;

//normal set up
function setup() 
{
   createCanvas(400, 400);

   neckR = 0;
   wingR =-.2;
   Dlocx = width*.9;
   Dlocy = height/2;
   dirX = -1;
   dirY = 0;
   time = 0.5;
   FlegR = 0;

   //Mouth
   Mouth = 0;
}

//normal draw
function draw() 
{

   background(12, 245, 216);

   //foreground
   fill(78, 155, 16);
   rect(0, height/2, width, height/2);

   drawDuck();

   if (animate) 
   {
     moveDuck();
   }

   //building
   fill(255,96,96);
   rect(0,100,150,200);

   fill(255,243,117);
   triangle(0,100,75,50,150,100);

   fill(255);
   rect(0,125,150,50);

   fill(79,170,161);
   ellipse(75,225,50);

   push();
   stroke(0);
   line(75,200,75,250);
   line(50,225,100,225);
   pop();

   textSize(20);
   fill(0);
   text("Peking Duck",15,160);

}

//method to control starting the duck over again and control animation on and off
function mousePressed() 
{
   Dlocx = width*.9;
   animate = !animate;
}

//code to draw the duck with animation parameters neckR and wingR - other transforms align
//the peices to the correct pivot points
//Be very careful modifying this code - the structure of the push and pops are what builds
//the hierarchical relationships
function drawDuck() 
{
   noStroke();

   push();

      //move the entire duck
      translate(Dlocx, Dlocy);
      scale(2); //scale the entire duck

      //Leg Right
      fill(252,135,63);
      push();
      rotate(FlegR);
      rect(2,14.5,2,15);
      fill(255,0,0);
      ellipse(2,29,5,1.5);
      pop();

      //Leg Left
      fill(252,135,63);
      push();
      rotate(-FlegR);
      rect(-4,14.5,2,15)
      fill(255,0,0);
      ellipse(-4,29,5,1.5);
      pop();

      // draw body
      fill(245, 226, 12);
      ellipse(0, 0, 40, 30); 

      //draw neck and head with possible animation transforms
      push();
         translate(-16, 0); //move into pivot position
         rotate(neckR);  //rotate by neckR parameter
         ellipse(0, -10, 10, 18); //neck
         ellipse(0, -17, 14, 14); //head
         fill(155, 111, 16);
         triangle(-10, -18, -4, -21, -4, -18); //beak
         fill(0);
         ellipse(0, -19, 4, 4);  //eye
      pop();

      //Mouth
      push();
      	translate(-16,0);
      	rectMode(CORNER);
      	rotate(neckR);
      	push();
      	translate(-4,-18);
      	rotate(Mouth);
      	fill(155,111,16);
      	triangle(-6,0,-0,0,-0,3);
      	pop();
      pop();

      //draw wing with possible animation transforms
      fill(227, 208, 66);
      push();
         translate(-8, -5); //move into pivot position
         rotate(wingR); //animtion parameter to control wing flap
         ellipse(14, 0, 34, 20); //wing
      pop();


      //TODO - this is where you will add the code to animation the legs - follow
      //the examples for the wings and neck 


 

   pop();
}

//function to update all animation parameters - very simple scripted animation
function moveDuck() 
{
   //update the ducks global location
   Dlocx = Dlocx + dirX*time;
   Dlocy = Dlocy + dirY*time;

   if (FlegR > radians(45)) 
   {
      legDown = false;
   }
   if (FlegR < radians(-45)) 
   {
     legDown = true;
   }

   if (legDown) 
   {
      FlegR += 0.05;
   } 
   else 
   {
      FlegR -= 0.05;
   }


  //find out how much the neck is rotated to decide which way to rotate
  //these constrain how much the neck moves up and down
   if (neckR < -1) 
   {
      neckDown = false;
   } 
   if (neckR > 0.3) 
   {
      neckDown = true;
   }

   // depending on which way we need to rotate, do so
   if (neckDown == true) 
   {
      neckR -= .03;
   } 
   else 
   {
      neckR += .03;
   }

   //find out how much the wing is rotated to decide which way to rotate
   //these constrain how much the wing moves up and down
   if (wingR < -1.1) 
   {
      wingDown = true;
   } 
   if (wingR > 0.3) 
   {
      wingDown = false;
   }

   // depending on which way we need to rotate, do so
   if (wingDown == false) 
   {
      wingR -= .03;
   } 
   else 
   {
      wingR += .03;
   }

   //Mouth
   if (Mouth < -PI/4) 
   {
      MouthDown = false;
   } 
   if (Mouth > 0) 
   {
      MouthDown = true;
   }

   // depending on which way we need to rotate, do so
   if (MouthDown == true) 
   {
      Mouth -= .03;
   } 
   else 
   {
      Mouth += .03;
   }

}

function Mouth(x,y,rot)
{

}

