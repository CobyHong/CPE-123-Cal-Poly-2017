/*
Project 2 - Mad Cow

Created By Ahmed Shalan, Coby Hond

October 19, 2016
*/


var budx, budy;
var budxx, budyy;
var leafx,leafy;
var leafxx,leafyy;
var lipx, lipy;

var click = false;
var a = 0.55;


var XMEN;
//Project 2 LEAF
var L;
var T;

//for eyeball
var e;
var z;

var I,B;

//For Rect

var Rectx;
var Recty;

//Variables for the cow below
var eyeX, eyeY, eyeDiam, pupilDiam, smallP;

var pupilLX, pupilLY;

var enlargeRate = 1.5;
var enlargeRatePupil = .8;

var clicked = false;
var sunClicked = false;

var eyeMin = 30;
var eyeMax = 50;

var reached = false;
var multiplier = 1;

var rColor, gColor, bColor;

var isClicked = false;
var sunMove = false;



function drawGrass() {
  for(var xLoc = 0;  xLoc < width; xLoc++){
    stroke(0, random(150, 255), 0);
    line(xLoc, random(height - 100, height - 80), xLoc, height);
  }
}



function setup()
{
    createCanvas(1100,800);
    stroke(241,214,203);
    strokeWeight(2.75);

    budx = 460;
    budy = 200;

    budxx = 200;
    budyy= 430;

    leafx= 255;
    leafy= 55;

    leafxx= 340;
    leafyy= 540;

    lipx = 220;
    lipy= 550;

    XMEN = 300; 
    L = PI/3;
    T = 0.01;

    e= 0;
    z= 0;

    I= 300; //For eyeballs x
    B= 270; //For eyeballs y

    rectMode(CENTER); //For the square mans


    eyeX = 350;
    eyeY = 220;
    eyeDiam = eyeMin;
    pupilDiam = 15;
    smallP = 5;

    pupilLX = 200;
    pupilLY = 350;


    rColor = 241;
    gColor = 214;
    bColor = 203;
}

function drawCow(){
    beginShape();

    fill(40, 40, 40);

    curveVertex(0,224);
    curveVertex(19,223);
    curveVertex(34,224);
    curveVertex(46,227);
    curveVertex(58,229);
    curveVertex(75,228);
    curveVertex(99,224);
    curveVertex(134,220);
    curveVertex(165,212);
    curveVertex(151,202);
    curveVertex(121,194);
    curveVertex(99,180);
    curveVertex(85,155);
    curveVertex(85,155);
    curveVertex(70,122);
    curveVertex(74,105);
    curveVertex(93,100);
    curveVertex(112,100);
    curveVertex(132,105);
    curveVertex(152,117);
    curveVertex(169,142);
    curveVertex(182,149);
    curveVertex(193,145);
    curveVertex(203,135);
    curveVertex(157,109);
    curveVertex(148,91);
    curveVertex(154,76);
    curveVertex(163,85);
    curveVertex(171,88);
    curveVertex(185,94);
    curveVertex(197,98);
    curveVertex(210,103);
    curveVertex(232,98);
    curveVertex(246,93);
    curveVertex(270,93);
    curveVertex(287,93);
    curveVertex(304,95);
    curveVertex(320,103);
    curveVertex(330,113);
    curveVertex(349,121);
    curveVertex(372,118);
    curveVertex(395,113);
    curveVertex(411,119);
    curveVertex(401,133);
    curveVertex(383,139);
    curveVertex(365,148);
    curveVertex(365,156);
    curveVertex(380,165);
    curveVertex(400,158);
    curveVertex(416,145);
    curveVertex(437,138);
    curveVertex(458,138);
    curveVertex(481,143);
    curveVertex(496,162);
    curveVertex(465,202);
    curveVertex(440,218);
    curveVertex(421,221);
    curveVertex(395,221);
    curveVertex(378,229);
    curveVertex(368,240);
    curveVertex(361,265);
    curveVertex(356,293);
    curveVertex(344,325);
    curveVertex(339,348);
    curveVertex(335,364);
    curveVertex(322,382);
    curveVertex(310,396);
    curveVertex(298,415);
    curveVertex(281,433);
    curveVertex(271,456);
    curveVertex(256,482);
    curveVertex(244,496);
    curveVertex(182,499);
    curveVertex(182,499);
    curveVertex(126,499);
    curveVertex(59,499);
    curveVertex(18,499);
    curveVertex(0,499);
    curveVertex(0,396);
    curveVertex(0,309);
    curveVertex(0,229);
    curveVertex(0,224);

    endShape();

    noStroke();
    fill(240, 240, 240);
    beginShape();

    curveVertex(188,178);
    curveVertex(191,154);
    curveVertex(200,133);
    curveVertex(213,104);
    curveVertex(230,96);
    curveVertex(253,95);
    curveVertex(280,95);
    curveVertex(304,99);
    curveVertex(333,107);
    curveVertex(345,118);
    curveVertex(357,133);
    curveVertex(359,148);
    curveVertex(360,163);
    curveVertex(364,179);
    curveVertex(364,188);
    curveVertex(346,186);
    curveVertex(332,195);
    curveVertex(321,224);
    curveVertex(318,251);
    curveVertex(323,273);
    curveVertex(338,282);
    curveVertex(352,291);
    curveVertex(348,310);
    curveVertex(345,332);
    curveVertex(334,355);
    curveVertex(320,351);
    curveVertex(320,340);
    curveVertex(319,309);
    curveVertex(304,297);
    curveVertex(278,290);
    curveVertex(245,289);
    curveVertex(222,290);
    curveVertex(210,302);
    curveVertex(210,321);
    curveVertex(203,340);
    curveVertex(210,359);
    curveVertex(223,370);
    curveVertex(240,372);
    curveVertex(263,372);
    curveVertex(290,374);
    curveVertex(311,369);
    curveVertex(318,379);
    curveVertex(308,401);
    curveVertex(286,425);
    curveVertex(268,451);
    curveVertex(251,456);
    curveVertex(216,456);
    curveVertex(200,436);
    curveVertex(195,407);
    curveVertex(179,367);
    curveVertex(172,332);
    curveVertex(172,303);
    curveVertex(181,276);
    curveVertex(199,273);
    curveVertex(217,263);
    curveVertex(228,235);
    curveVertex(228,209);
    curveVertex(228,175);
    curveVertex(228,159);
    curveVertex(209,151);
    curveVertex(197,167);
    curveVertex(191,174);
    endShape();


    //Makes the nostrils
    fill(0);
    ellipse(295, 325, 35, 40);
    ellipse(235, 320, 35, 40);

    //Makes the eyes
    fill(255);
    ellipse(200, 200, eyeDiam);
    ellipse(eyeX, eyeY, eyeDiam);

    //Makes the pupils
    fill(0);
    ellipse(pupilLX, 200, pupilDiam);
    ellipse(pupilLY, 220, pupilDiam);



    //Makes the weird pupil

    if(clicked)
      fill(rColor, gColor, bColor);
    else
      fill(200,0,0);

    ellipse(353, 220, smallP);
}


function drawMouth(){
    push();
    scale(1.5);
    translate(115,175);

    fill(120, 50, 70);

    beginShape();
    curveVertex(3,13);
    curveVertex(3,19);
    curveVertex(9,9);
    curveVertex(18,9);
    curveVertex(31,10);
    curveVertex(44,12);
    curveVertex(53,16);
    curveVertex(64,16);
    curveVertex(79,16);
    curveVertex(93,20);
    curveVertex(103,25);
    curveVertex(110,31);
    curveVertex(115,36);
    curveVertex(116,43);
    curveVertex(114,52);
    curveVertex(110,60);
    curveVertex(103,67);
    curveVertex(92,74);
    curveVertex(75,81);
    curveVertex(57,83);
    curveVertex(37,79);
    curveVertex(26,69);
    curveVertex(16,59);
    curveVertex(9,43);
    curveVertex(5,31);
    curveVertex(3,23);
    endShape();

    fill(255);

    beginShape();
    curveVertex(9,22);
    curveVertex(14,20);
    curveVertex(22,21);
    curveVertex(27,25);
    curveVertex(34,25);
    curveVertex(40,27);
    curveVertex(48,29);
    curveVertex(59,30);
    curveVertex(67,32);
    curveVertex(77,32);
    curveVertex(85,34);
    curveVertex(91,36);
    curveVertex(95,39);
    curveVertex(101,40);
    curveVertex(110,39);
    curveVertex(114,48);
    curveVertex(109,54);
    curveVertex(103,58);
    curveVertex(96,61);
    curveVertex(88,62);
    curveVertex(82,63);
    curveVertex(69,65);
    curveVertex(60,65);
    curveVertex(43,64);
    curveVertex(30,58);
    curveVertex(23,52);
    curveVertex(16,46);
    curveVertex(11,38);
    curveVertex(8,31);
    curveVertex(6,29);
    curveVertex(6,25);
    curveVertex(9,22);
    endShape();

    pop();

}

function mouseClicked(){

    fill(120);

    var circleTest = (mouseX - eyeX*1.35)*(mouseX - eyeX*1.35) + (mouseY - (eyeY*1.35+130))*(mouseY - (eyeY*1.35+130)) - (eyeDiam/2)*(eyeDiam/2);

    if(circleTest < 0){
      clicked = true;
      isClicked = !isClicked;
    }

    
    var sunTest = (mouseX - 120)*(mouseX - 120) + (mouseY - 140)*(mouseY - 140) - (100)*(100);
    if(sunTest < 0){
      sunClicked = true;
      sunMove = !sunMove;
    }


}

function drawForeground(){
    //=======================================================
    //Foreground
    fill('rgba(255,39,77,0.2)');

    beginShape();
      vertex(0,0);
      vertex(100,0);
      vertex(100,700);
      vertex(0,700);
    endShape();

    push();
      fill('rgba(224,80,119,0.2)');
      ellipse(120,140,200);
    pop();

    push();
      fill('rgba(255,74,100,0.6)');
      ellipse(120,140,180);
    pop();
    //=======================================================
}

function clickController(){
    if(reached)
      multiplier = -1;
    else
      multiplier = 1;

    eyeDiam += (multiplier * enlargeRate);

    pupilDiam += (multiplier * enlargeRatePupil);

    pupilLX -= (multiplier * 0.5);
    pupilLY += (multiplier * 0.5);

    smallP += (multiplier * 0.25);

    if(eyeDiam >= eyeMax)
      reached = true;

  
    if(eyeDiam <= eyeMin)
      reached = false;
    

    drawMouth();
    //drawGrass();
    /*
    rColor = random(30, 60);
    gColor = random(50, 150);
    bColor = random(50, 255);
    */
    rColor = random(200, 255);
    gColor = random(100, 255);
    bColor = random(0, 255);
}


function drawSun(){
  //=======================================================
    //Very Filthy messy looking code for rotating squares in sun
    push();
      fill('rgba(255,239,77,0.2)');
      translate(100,100);
      rectMode(CENTER);
      rotate(radians(frameCount));
      rect(0,0,170,170);
    pop();
    
    push();
      fill('rgba(255,39,77,0.2)');
      translate(100,100);
      rectMode(CENTER);
      rotate(radians(frameCount+20));
      rect(0,0,170,170);
    pop();

    push();
      fill('rgba(255,239,77,0.2)');
      translate(100,100);
      rectMode(CENTER);
      rotate(radians(frameCount+40));
      rect(0,0,170,170);
    pop();

    push();
      fill('rgba(255,39,77,0.2)');
      translate(100,100);
      rectMode(CENTER);
      rotate(radians(+frameCount+60));
      rect(0,0,170,170);
    pop();

    push();
      fill('rgba(255,239,77,0.2)');
      translate(100,100);
      rectMode(CENTER);
      rotate(radians(-frameCount));
      rect(0,0,170,170);
    pop();
    
    push();
      fill('rgba(255,39,77,0.2)');
      translate(100,100);
      rectMode(CENTER);
      rotate(radians(-frameCount-20));
      rect(0,0,170,170);
    pop();
    
    push();
      fill('rgba(255,239,77,0.2)');
      translate(100,100);
      rectMode(CENTER);
      rotate(radians(-frameCount-40));
      rect(0,0,170,170);
    pop();

    push();
      fill('rgba(255,39,77,0.2)');
      translate(100,100);
      rectMode(CENTER);
      rotate(radians(-frameCount-60));
      rect(0,0,170,170);
    pop();


    //Non-moving Aspect of Sun + Lines
    push();
      fill('rgba(224,80,119,0.2)');
      ellipse(100,100,200);
    pop();

    push();
      fill('rgba(255,74,100,0.6)');
      ellipse(100,100,180);
    pop();
}

function drawBackGroundLines(){
  //lines
    push();
      stroke('rgba(224,80,119,0.9)');
      line(0,500,800,300);
      stroke('rgba(255,74,100,0.6)');
      line(0,350,800,150);
    pop();
}

function drawFlowers(){
  //Stem #1 (Longest)
    fill(136,145,79);

    beginShape();
      curveVertex(XMEN+400,700);
      curveVertex(XMEN+390,700);
      curveVertex(XMEN+400,480);
      curveVertex(XMEN+420,400);
      curveVertex(XMEN+440,300);
      curveVertex(XMEN+410,200);
      curveVertex(XMEN+360,100);
      curveVertex(XMEN+360,60);
      curveVertex(XMEN+320,20);
      //
      curveVertex(XMEN+300,20);
      curveVertex(XMEN+340,60);
      curveVertex(XMEN+340,100);

      vertex(XMEN+380,180);
      vertex(XMEN+280,210);
      vertex(XMEN+260,220);
      vertex(XMEN+240,250);

      curveVertex(XMEN+390,200);
      curveVertex(XMEN+420,300);
      curveVertex(XMEN+400,400);
      curveVertex(XMEN+380,480);
      curveVertex(XMEN+360,700);
      curveVertex(XMEN+360,700);
    endShape();

    //Stem #1 Shading
    fill(91,77,53);
    beginShape();
      curveVertex(XMEN+400,700);
      curveVertex(XMEN+390,700);
      curveVertex(XMEN+400,480);
      curveVertex(XMEN+420,400);
      curveVertex(XMEN+440,300);
      curveVertex(XMEN+410,200);
      curveVertex(XMEN+360,100);
      curveVertex(XMEN+360,60);
      curveVertex(XMEN+320,20);
      //
      curveVertex(XMEN+300,20);
      curveVertex(XMEN+350,60);
      curveVertex(XMEN+355,100);


      vertex(XMEN+380,187);
      curveVertex(XMEN+270,210);
      curveVertex(XMEN+240,230);
      vertex(XMEN+310,215);


      curveVertex(XMEN+400,200);
      curveVertex(XMEN+435,300);
      curveVertex(XMEN+410,400);
      curveVertex(XMEN+395,480);
      curveVertex(XMEN+380,700);
      curveVertex(XMEN+380,700);
    endShape();
    //=======================================================

    //=======================================================
    //Stem #2 (smallest)

    fill(94,122,42);
    beginShape();
      curveVertex(XMEN+320,700);
      curveVertex(XMEN+320,700);
      curveVertex(XMEN+400,580);
      vertex(XMEN+410,580);
      curveVertex(XMEN+380,650);
      curveVertex(XMEN+375,700);
      curveVertex(XMEN+375,700);
    endShape();

    //Stem #2 (Shading)
    fill(86,68,35);
    beginShape();
      curveVertex(XMEN+320,700);
      curveVertex(XMEN+320,700);
      curveVertex(XMEN+400,580);
      vertex(XMEN+410,580);
      curveVertex(XMEN+360,650);
      curveVertex(XMEN+370,700);
      curveVertex(XMEN+370,700);
    endShape();
    //=======================================================

    //=======================================================
    //Stem #3 (Far Right)
    fill(97,135,56);
    beginShape();
      curveVertex(XMEN+400,700);
      curveVertex(XMEN+400,700);
      curveVertex(XMEN+415,600);
      curveVertex(XMEN+420,500);
      curveVertex(XMEN+425,400);
      curveVertex(XMEN+460,300);
      curveVertex(XMEN+465,230);

      curveVertex(XMEN+485,230);
      curveVertex(XMEN+480,300);
      curveVertex(XMEN+445,400);
      curveVertex(XMEN+440,500);
      curveVertex(XMEN+430,600);
      curveVertex(XMEN+420,700);
      curveVertex(XMEN+420,700);
    endShape();

    //Stem #3 Shading
    fill(86,69,37);
    beginShape();
      curveVertex(XMEN+400,700);
      curveVertex(XMEN+410,700);
      curveVertex(XMEN+423,600);
      curveVertex(XMEN+435,500);
      curveVertex(XMEN+435,400);
      curveVertex(XMEN+470,300);
      curveVertex(XMEN+485,230);

      curveVertex(XMEN+485,230);
      curveVertex(XMEN+480,300);
      curveVertex(XMEN+445,400);
      curveVertex(XMEN+440,500);
      curveVertex(XMEN+430,600);
      curveVertex(XMEN+420,700);
      curveVertex(XMEN+420,700);
    endShape();
    //=======================================================

    //=======================================================
    //Flower by Mouth
    push();
      translate(XMEN+budxx,budyy);
      rotate(-PI/18);
      //The Flower Aspect
      fill(224,80,119);
      arc(0,0,30,200,PI,2*PI);

      fill(255,39,77);
      arc(0,0,15,200,PI,2*PI);
      fill(181,39,77);
      arc(0,0,0.1,200,PI,2*PI);
      //The Bud Aspect
      fill(112,68,35);
      arc(0,0,30,120,-PI/6,-PI*5/6);
      fill(119,100,73);
      arc(0,0,15,120,-PI/6,-PI*5/6);
    pop();
    //=======================================================

    //=======================================================
    //Stem #4 One Connects to Mouth
    push();
      strokeWeight(1.5);
      fill(103,119,73);
      beginShape();
        curveVertex(XMEN+250,700);
        curveVertex(XMEN+250,700);
        curveVertex(XMEN+248,660);
        curveVertex(XMEN+210,500);

        curveVertex(XMEN+180,500);

        curveVertex(XMEN+180,500);

        curveVertex(XMEN+220,500);
        curveVertex(XMEN+258,660);
        curveVertex(XMEN+262,700);
        curveVertex(XMEN+260,700);
      endShape();

      //Stem #4 Shading
      fill(86,72,45);
      beginShape();
        curveVertex(XMEN+253,700);
        curveVertex(XMEN+253,700);
        curveVertex(XMEN+254,660);
        vertex(XMEN+215,497);

        curveVertex(XMEN+222,505);
        curveVertex(XMEN+258,660);
        curveVertex(XMEN+262,700);
        curveVertex(XMEN+260,700);
      endShape();
    pop();
    //=======================================================

    //=======================================================
    //SMALL LEAVES ON STEM BY MOUTH
    push();
      translate(XMEN+budxx-24,budyy+55);
      rotate(PI/2);
      fill(36,124,61);
      ellipse(0,0,15,60);
    pop();
    //=======================================================

    //=======================================================
    //Flower on Far Right
    fill(224,80,119);
    ellipse()

    push();
      translate(XMEN+budx,budy);
      rotate(-PI/10);
      //The Flower Aspect
      fill(224,80,119);
      arc(0,0,40,200,PI,2*PI);
      fill(181,39,77);
      arc(0,0,20,200,PI,2*PI);
      fill(255,39,77);
      arc(0,0,10,200,PI,2*PI);
      //The Bud Aspect
      fill(112,68,35);
      arc(0,0,40,120,-PI/6,-PI*5/6);
      fill(119,100,73);
      arc(0,0,10,120,-PI/6,-PI*5/6);
    pop();
    //=======================================================

    //=======================================================
    //Leaf on top [][][][][][][]

    push();
      ellipseMode(CORNER);
      translate(XMEN+leafx+52,leafy-55);
      rotate(L);
      //Dark Part of Leaf
      fill(74,150,33);
      rectMode(CORNER);
      ellipse(0,0,40,150);
      fill(74,135,33);
      //Light Part of Leaf
      arc(0,0,40,150,-PI/2,-PI*3/2);
      arc(0,0,20,150,-PI/2,-PI*3/2);
    pop();

    //=======================================================
    //Lower Lip
    push();
      translate(XMEN+leafxx,leafyy);
      scale(1.5);
      rotate(-PI/15);
      fill(119,100,73);

      beginShape();
        curveVertex(0,0);
        curveVertex(0,0);
        curveVertex(-75,35);
        curveVertex(-160,5);
        curveVertex(-10,-5);
        curveVertex(-75,0);
        curveVertex(-20,-7);
        curveVertex(0,0);
        curveVertex(0,0);
      endShape();

      //Low Lip Shading
      fill(52,124,37);
      beginShape();
        curveVertex(0,0);
        curveVertex(0,0);
        curveVertex(-75,35);
        curveVertex(-150,15);
        curveVertex(-130,5);
        curveVertex(-75,10);
        curveVertex(-20,0);
        curveVertex(0,0);
        curveVertex(0,0);
      endShape();

      //Upper Lip
      fill(74,150,33);
      beginShape();
        curveVertex(0,0);
        curveVertex(0,0);
        curveVertex(-50,-12);
        curveVertex(-75,-7);
        curveVertex(-110,-10);
        curveVertex(-150,10);
        curveVertex(-130,5);
        curveVertex(-75,10);
        curveVertex(-20,0);
        curveVertex(0,0);
        curveVertex(0,0);
      endShape();

    pop();
}

function sunClick(){

    push();
      translate(XMEN+I,B);
      rotate(-PI/11);
      fill('rgba(224,80,119,0.5)');
      ellipse(0,0,100,50);
      fill('rgba(255,39,77,0.6)');
      ellipse(e,z,40);
    pop();

    push();
      translate(XMEN+I-260,B+75);
      rotate(-PI/11);
      fill('rgba(224,80,119,0.5)');
      ellipse(0,0,100,50);
      fill('rgba(255,39,77,0.6)');
      ellipse(e,z,40);
    pop();

    e = e + a;

    if (e>I-275 || e<-28 && L>.2)
    {
      a= -a;
      //L = ;
    }

    L= L+T;

    if (L>PI/2.5 || L<PI/3)
    {
      T= -T;
    }
}

function draw()
{
    //background('rgb(241,214,203)');
    background(rColor, gColor, bColor);
    drawForeground();

    push();
      scale(1.5);
      translate(0,-75);
      drawBackGroundLines();
    pop();


    drawGrass();
  
    noStroke();

    push();
      scale(1.35);
      translate(0, 100);
      drawCow();

      if(clicked && isClicked)
        clickController();

      pop();
    
    push();
      if(sunClicked && sunMove){
        translate(20, 40);
        drawSun();
      }
    pop();

    push();
      translate(300, 100);
      drawFlowers();
    pop();

    push();
      translate(300, 100);
      if(clicked && isClicked)
        sunClick();
    pop();
}



