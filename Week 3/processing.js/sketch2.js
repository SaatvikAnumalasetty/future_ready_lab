//define a circle object
/*var circle = { 
    diameter:80,
    xCoor: 0,
    yCoor:0,
    color:[255,0,0], //RGB values give circle a red color
    xSpeed: 15,
    ySpeed: 15,
}
*/

//Parameters in Circle function are getting defined
function Circle(x,y, size, color, xSpeed, ySpeed) {
    this.xCoor=x;
    this.yCoor=y;
    this.diameter = size;
    this.color = color || [0,0,0]; //makes the default color black
    this.xSpeed = xSpeed || 5; 
    this.ySpeed = ySpeed || 7;
    
}

//blank list
var circleList = [];
var balls = [2,5,10,16];

//Ask the user what size do you want the canvas to be?
var width = parseInt(prompt("Please type the intended width between 400 and 1500"));
var height = parseInt(prompt("Please type the intended height canvas between 300 and 1000"));

//Randomizes the list balls and stores the number as var number and pushes var specialCircle into circleList those number of times. 



//setup is run once at the beginning before we draw.
function setup() {
    
createCanvas(640, 480);
    
for (var i=0; i<number; i++) {
  circleList.push(new Circle(0, 0, random(0,80), [random(0,255),random(0,255), random(0,255)]));
}
}

function draw() {
    background(255);
for(var i=0; i <number; i++){
    fill(circleList[i].color);
    ellipse(circleList[i].xCoor, circleList[i].yCoor, circleList[i].diameter);

    console.log("The x coordinate is" + circleList[i].xCoor);
  
    //if we hit the edge of the canvas
    if(circleList[i].xCoor >=640){
        circleList[i].color = [random(0,255),random(0,255),random(0,255)];//make the circle black
        circleList[i].xSpeed = -circleList[i].xSpeed;//reverse direction
        circleList[i].diameter = random(50,100);//randomizes sizes everytime it hits the canvas
    }else if (circleList[i].xCoor <0){
        circleList[i].color = [random(0,255),random(0,255),random(0,255)];//make the circle blue
        circleList[i].xSpeed = -circle.xSpeed;
        circleList[i].diameter = random(50,100);//randomizes sizes everytime it hits the canvas
    }
       circleList[i].xCoor += circleList[i].xSpeed;
    
    //if we hit the edge of the canvas
    if(circleList[i].yCoor >=480){
        circleList[i].color = [random(0,255),random(0,255),random(0,255)];//make the circle black
        circleList[i].ySpeed = -circleList[i].ySpeed;//reverse direction
        circleList[i].diameter = random(50,100);//randomizes sizes everytime it hits the canvas
    }else if (circle.yCoor <0){
        circleList[i].color = [random(0,255),random(0,255),random(0,255)];//make the circle blue
        circleList[i].ySpeed = -circle.ySpeed;  
        circleList[i].diameter = random(50,100);//randomizes sizes everytime it hits the canvas
    }
       circleList[i].yCoor += circleList[i].ySpeed; 
    }
}

