/* ---- Drawing a 2D pumpkin exercise ---

Complete my drawing so that it looks like a Halloween pumpkin:

1. Add another central orange circle on top of the existing one, using the same lighting technique as for the main one - to create that "pumpkin" shape.

2. Add the right eye, and the right yellow iris. 

3. Add a green stem at the top, using the same light/dark overlapping colour for a nice effect. 

Keep these values dynamic. Consider the ordering of the shapes. Explore how the size variables affect other components. 

*/

//Global Variables
var pumpkinX,pumpkinY,pumpkinHeight,pumpkinWidth,pEyeSize,pIrisSize;

function setup() {
  createCanvas(600, 600);
  
  //initialising variables that affect all of the drawn shapes
  //x,y poisition:
  pumpkinX= width/2;
  pumpkinY= height/2;
  
  //height and width of circles
  pumpkinWidth=180;
  pumpkinHeight=pumpkinWidth-60;
  
  //variables that affect eye size 
  pEyeSize= pumpkinHeight-80;
  pIrisSize= pEyeSize-30;
}

function draw() {
    
    background(215);


    //PUMPKIN
  
    //Create a stem with dark and light overlapping shapes

    //dark stem
    noStroke();
    fill(0,100,0);
    triangle(pumpkinX,pumpkinY-45,pumpkinX-25,pumpkinY-85,pumpkinX+25,pumpkinY-85);

    //light stem
    noStroke();
    fill(0,130,0);
    triangle(pumpkinX,pumpkinY-55,pumpkinX-12,pumpkinY-78,pumpkinX+12,pumpkinY-78);

    //back ellipse dark orange
    noStroke();
    fill(180, 52, 37);
    ellipse(pumpkinX,pumpkinY,pumpkinWidth,pumpkinHeight);
    
    //back ellipse light
    noStroke();
    fill(240, 90, 40);
    ellipse(pumpkinX,pumpkinY-3,pumpkinWidth-10,pumpkinHeight-10);
  
    //Create another dark orange middle ellipse to make it look more pumpkin-y
    noStroke();
    fill(180, 52, 37);
    ellipse(pumpkinX,pumpkinY,pumpkinHeight+15);

    //Create another light orange middle ellipse to make it look more pumpkin-y
    noStroke();
    fill(240, 90, 40);
    ellipse(pumpkinX,pumpkinY-3,pumpkinHeight+2);
  
    //nose
	fill(150,25,0);
  	triangle(pumpkinX-15, pumpkinY+20, pumpkinX, pumpkinY-5, pumpkinX+15, pumpkinY+20);
  
    //left eye - add a right eye here
    //left eye
	noStroke();
    fill(0, 0, 0);
    ellipse(pumpkinX-35,pumpkinY-20,pEyeSize,pEyeSize);

    //right eye
    noStroke();
    fill(0, 0, 0);
    ellipse(pumpkinX+35,pumpkinY-20,pEyeSize,pEyeSize);

    //eye pupils - add a right pupil here
    //left pupil
	noStroke();
    fill(248, 239, 47);
    ellipse(pumpkinX-35,pumpkinY-20,pIrisSize,pIrisSize);

    //right pupil
    noStroke();
    fill(248, 239, 47);
    ellipse(pumpkinX+35,pumpkinY-20,pIrisSize,pIrisSize);

}