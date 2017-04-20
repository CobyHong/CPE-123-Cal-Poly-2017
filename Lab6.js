function setup()
{
	createCanvas(1366,768);
	background(0);
	noStroke();

//=================================================================================//
	
	//Background
	for (var x=0; x<width; x+=5)
	{
		for (var y=0; y<height; y+=5)
		{
			d = distance(x,y,x,height);

			fill(d/2,random(200,210),random(200,250)-d/10);

		 	ellipse(x+random(-4,4),y+random(-4,4),random(15,20),random(15,20));
		}
	}

//=================================================================================//

	//Mountain Right
	for (var x=690; x<width; x+=5)
	{
		for (var y=0; y<height; y+=5)
		{
		 	if (implicit_L(x,y,0,800,width,400) >height)
		 	{
		 		d = distance(x,y,x,height);

		 		fill(random(150,170),random(80,120)+d/2,random(30,100));

		 	    rect(x+random(-5,5),y+random(-5,5),random(10,15),random(10,15),random(5,10));
		 	}
		}
	}

//=================================================================================//

	//Mountain Left
	for (var x=0; x<width+100; x+=5)
	{
		for (var y=0; y<height; y+=5)
		{
		 	if (implicit_L(x,y,0,400,width,800) >height)
		 	{
		 		d = distance(x,y,x,height);

		 		fill(random(150,170),random(80,120)+d/2,random(30,100));

		 	    rect(x+random(-5,5),y+random(-5,5),random(10,15),random(10,15),random(5,10));
		 	}
		}
	}

//=================================================================================//

	//Tree
	for (var x=690; x<700; x+=2)
	{
		for (var y=100; y<height; y+=2)
		{
		 	if (implicit_L(x,y,0,600,width,0) >height)
		 	{
		 		d = distance(x,y,x,height);

		 		fill(random(150,170)+d/2,random(80,120),random(10,80));

		 	    rect(x+random(-5,5),y+random(-5,5),random(5,10),random(5,10),random(5,10));
		 	}
		}
	}

//=================================================================================//

    //Circle Part
    for (var x=0; x<width; x+=7)
    {
        for (var y=0; y<height; y+=7)
        {
            if (implicit_C(x,y,width/2,height/1.75,200) < 0) //translate x,y then the center of circle, and then radius.
            {
  				d = distance(x,y,x,height);

            	fill(random(100,150)+d/2,random(100,120),random(100,200));
           
                ellipse(x+random(-10,10),y+random(-10,10),random(10,30),random(5,10));
            }
        }
    }

//=================================================================================//

    //Flowing Leaves 1
    push();
    for (var x=300; x<width; x+=10)
    {
        for (var y=100; y<height; y+=10)
        {
            if (implicit_C(x,y,width/2,height/2,100) < 0) //translate x,y then the center of circle, and then radius.
            {
  				d = distance(x,y,x,height);

            	fill(random(100,150)+d/2,random(100,120),random(100,200));
            	
            	rotate(d/2);

                ellipse(x+random(-10,10),y+random(-10,10),random(10,30),random(5,10));
            }
        }
    }
    pop();

//=================================================================================//

    //Flowing Leaves 2
    push();
    for (var x=-400; x<width; x+=15)
    {
        for (var y=100; y<500; y+=15)
        {
            if (implicit_C(x,y,width/2,height/2,100) < 0) //translate x,y then the center of circle, and then radius.
            {
  				d = distance(x,y,x,height);

            	fill(random(100,150)+d/2,random(100,120),random(100,200));
            	
            	rotate(d/3);

                ellipse(x+random(-10,10),y+random(-10,10),random(10,30),random(5,10));
            }
        }
    }
    pop();

//=================================================================================//

	//Ocean Part
	for (var x=0; x<width; x+=5)
	{
		for (var y=0; y<height; y+=5)
		{
		 	if (implicit_L(x,y,0,600,width,600) >height)
		 	{
		 		d = distance(x,y,x,height);

		 		fill(0,random(100,120)+d/2,200+d/4);

		 	    ellipse(x+random(-5,5),y+random(-5,5),random(20,30),random(10,15));
		 	}
		}
	}

//=================================================================================//

}

//=================================================================================//

function implicit_L(x,y,x0,y0,x1,y1)
{
	return (y0-y1)*x+(x1-x0)*y+x0*y1-x1*y0;
}

function distance(x0,y0,x1,y1)
{
	return sqrt((x1-x0)*(x1-x0)+(y1-y0)*(y1-y0));
}

function implicit_C(x,y,cx,cy,radius)
{
	return ((x-cx)*(x-cx)+(1.5*y-cy)*(1.5*y-cy)-(radius*radius));
}

//=================================================================================//
