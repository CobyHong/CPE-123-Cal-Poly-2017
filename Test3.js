var img1, img2, img3, img4;

function preload()
{
	img1 = loadImage("Selfie.jpg");
	img2 = loadImage("Selfie.jpg");
	img3 = loadImage("Selfie.jpg");
	img4 = loadImage("Selfie.jpg");
}

function setup()
{
	createCanvas(400,400);
	background(0);

	img1.loadPixels();
	img2.loadPixels();
	img3.loadPixels();
	img4.loadPixels();

	var result;

	for (var x=0; x<img1.width; x++)
	{
		for (var y=0; y<img1.height; y++)
		{
			result = img1.get(x,y);

			//Color of background
			if(result[0]>=255 && result[0+1]>=255 && result[0+2]>=255)
			{
				img1.set(x,y,[255,0,0,255]);
				img2.set(x,y,[0,255,0,255]);
				img3.set(x,y,[0,0,255,255]);
				img4.set(x,y,[255,255,0,255]);
			}

			//Set GrayScale
			if (result[0]<255 && result[0+1]<255 && result[0+2]<255) 
			{
				if (implicit_C(x,y,100,75,30,50)>0)
				{
	        		img1.set(x,y,brightness(img1.get(x,y))+50); //grabs the general brightness of the pixel at its location and sets entire box to that level.
        			img2.set(x,y,brightness(img2.get(x,y))+50);
        			img3.set(x,y,brightness(img3.get(x,y))+50);
        			img4.set(x,y,brightness(img4.get(x,y))+50);						
				}
			
			}

			//Random Circle -how make transparent?
			if (result[0]<255 && result[0+1]<255 && result[0+2]<255)
			{
				if (implicit_C(x,y,100,75,30,50)<0)
				{
	        		img1.set(x,y,[255,result[0+1],result[0+2],255]);
        			img2.set(x,y,[result[0],132,100,255]);
        			img3.set(x,y,[172,result[1],59,255]);
        			img4.set(x,y,[90,147,result[2],255]);			
				}				
			}

			//lips bruh 193, 124, 129
			if (result[0]>=130 && result[0+1]>=60 && result[0+2]>=60)
			{
				if (x>70 && x<90 && y>105 && y<125)
				{
	        		img1.set(x,y,[20,150,result[2],255]);
        			img2.set(x,y,[180,120,result[2],255]);
        			img3.set(x,y,[200,100,result[2],255]);
        			img4.set(x,y,[225,134,result[2],255]);
				}
			}
		}
	}

	img1.updatePixels();
	img2.updatePixels();
	img3.updatePixels();
	img4.updatePixels();

	image(img1,0,0,200,200);
	image(img2,200,0,200,200);
	image(img3,0,200,200,200);
	image(img4,200,200,200,200);

}

//=================================================================================//

function implicit_C(x,y,cx,cy,radius)
{
	return ((x-cx)*(x-cx)+(y-cy)*(y-cy)-(radius*radius));
}

//=================================================================================//