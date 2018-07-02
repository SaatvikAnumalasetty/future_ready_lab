//define a circle object
var circle = { 
    diameter:80,
    xCoor: 0,
    yCoor:0,
    color:[255,0,0], //RGB values give circle a red color
    xSpeed: 15,
    ySpeed: 15,
}

//setup is run once at the beginning before we draw.
function setup() {
    createCanvas(640, 480);
    background(20,255, 46);
    frameRate(15);
}


function draw() {
    fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);

    console.log("The x coordinate is" + circle.xCoor);
  
    //if we hit the edge of the canvas
    if(circle.xCoor >=640){
        circle.color = [random(0,255),random(0,255),random(0,255)];//make the circle black
        circle.xSpeed = -circle.xSpeed;//reverse direction
        circle.diameter = random(50,100);//randomizes sizes everytime it hits the canvas
    }else if (circle.xCoor <0){
        circle.color = [random(0,255),random(0,255),random(0,255)];//make the circle blue
        circle.xSpeed = -circle.xSpeed;
        circle.diameter = random(50,100);//randomizes sizes everytime it hits the canvas
    }
       circle.xCoor += circle.xSpeed;
    
    //if we hit the edge of the canvas
    if(circle.yCoor >=480){
        circle.color = [random(0,255),random(0,255),random(0,255)];//make the circle black
        circle.ySpeed = -circle.ySpeed;//reverse direction
        circle.diameter = random(50,100);//randomizes sizes everytime it hits the canvas
    }else if (circle.yCoor <0){
        circle.color = [random(0,255),random(0,255),random(0,255)];//make the circle blue
        circle.ySpeed = -circle.ySpeed;  
        circle.diameter = random(50,100);//randomizes sizes everytime it hits the canvas
    }
       circle.yCoor += circle.ySpeed;
    
    
}

