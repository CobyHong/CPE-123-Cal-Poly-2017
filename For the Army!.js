
function setup() {
	createCanvas(720, 720);
}


function draw() {
	background(60);


//background part
fill (255,0,0);
rect (1,600,720,200);

fill (255,254,228);
rect(1,400,720,200);

fill (255,0,0);
rect (1,250,720,200);

fill (255,254,228);
rect(1,120,720,200);

fill (255,0,0);
rect (1,0,720,175);

//Circle but are suppose to be stars :L
fill (255,255,0);
ellipse(120,180,100,100);

fill (255,255,0);
ellipse(600,180,100,100);

fill (255,255,0);
ellipse(120,450,100,100);

fill (255,255,0);
ellipse(600,450,100,100);





//arm #1;
	fill (255,247,143);
	push();
	rotate(radians(5));
	rect(200, 300, 150, 10);
	pop();
//Legs of Chair that is attached to his butt
	fill (88,49,20);
	push();
	translate(200, 100);
	rotate (radians(-26));
	rect(100, 250, 10, 350,15);
	pop();
	//Legs of Chair that is attached to his butt
	fill (88,49,20);
	push();
	translate(200, 100);
	rotate (radians(-26));
	rect(120, 250, 10, 350,15);
	pop();
//Legs of Chair that is attached to his butt
	fill (88,49,20);
	push();
	translate(200, 100);
	rotate (radians(26));
	rect(300, 45, 10, 350,15);
	pop();
	//Legs of Chair that is attached to his butt
	fill (88,49,20);
	push();
	translate(200, 100);
	rotate (radians(26));
	rect(280, 45, 10, 350,15);
	pop();
//This is his fat body
	fill (143,255,206);
	rect(350, 250, 150, 200);
//This is like a head???
	fill (255, 247, 143);
	ellipse (360, 200, 300, 300);
//The red part of his eyes because he games to much like me
	fill (255, 58, 143);
	ellipse (275, 200, 50, 50);
//Red eye #2
	fill (255, 58, 143);
	ellipse (400, 200, 50, 50);
//His pupils, he uses them to "see" #2 as well
	fill (0,0,0);
	ellipse (400, 200, 15, 15);
//Other people #1, I suck at organization
	fill (0,0,0);
	ellipse (275, 200, 15, 15);
//Some hat
	fill (4,97,25);
	push();
	translate(200, 100);
	rotate (radians(-40));
	rect(120, 100, 150, 200, 200);
	pop();
//his chair thing
	fill (88,49,20);
	rect(275, 400, 300, 50, 25);
//pants
	fill (88,49,232);
	rect(350, 375, 150, 25);
//A spear....
	fill (161, 161, 144);
 	triangle(392, 328, 392, 282, 31, 315);  
//arm #2
	fill (255,247,143);
	rect(375, 300, 130, 20, 15);
//Shoulder pad Thing
	fill(74,74,0);
	ellipse(500,310,50,50);
//Mouth :OOOOO
	fill(245,164,192);
	triangle(300,230,340,275,370,230);
//Angry Eyebrows
	fill (0,0,0);
	rect (235, 170, 75, 20);
//Angry Eyebrows #2
	fill (0,0,0);
	rect (360, 170, 75, 20);

}
