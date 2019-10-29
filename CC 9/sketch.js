function setup() {
  createCanvas(900,900);
}

function draw() {
background(220);

//Top Text
textSize(60);
textStyle(BOLD);
fill(0)
text('Brandons Portrait', 50, 50);
textSize(35);
text('Brandon Scott',550,850);
//Face
fill(245,222,179);
    circle(450,450,450);
fill(500)
    ellipse(375, 375, 75, 35);
    ellipse(525, 375, 75, 35);
    arc(450, 500, 180, 180, 0, radians(180), PIE);
fill(0);
    circle(385,370,20);
    circle(535,370,20);
    point(365,365);
    point(345,372);
    line(529,545,372,545)
    line(415,500,415,545)
    line(485,500,485,545)

    

fill(255,228,196);
triangle(450,415,400,450,500,450);

fill(0);
square(465,440,10);
square(430,440,10);





}


