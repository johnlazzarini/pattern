let mainCanvas = document.getElementById("canvas");
let mainContext = mainCanvas.getContext('2d');

let canvasWidth = mainCanvas.width;
let canvasHeight = mainCanvas.height;

// this array contains a reference to every circle that you will create
let circles = new Array();

//
// The Circle "constructor" is responsible for creating the circle objects and defining the various properties
// they have
//
function Circle(angle, sign, radius, rotationRadius, initialX, initialY) {
	this.angle = angle;
	this.sign = sign;
	this.radius = radius;
	this.rotationRadius = rotationRadius;
	this.initialX = initialX;
	this.initialY = initialY;
	this.incrementer = .01 + Math.random() * .1;
}

Circle.prototype.update = function () {

  this.angle += this.incrementer;
  this.radius += this.incrementer;
	
	this.currentX = this.initialX + this.rotationRadius * Math.cos(this.angle);
	this.currentY = this.initialY + this.rotationRadius * Math.sin(this.angle);
	
	if (this.angle >= (Math.PI * 2)) {
		this.angle = 0;
    this.incrementer = .01 + Math.random() * .1; //random incrementor
	}

	// The following code is responsible for actually drawing the circle on the screen
	mainContext.beginPath();
	mainContext.arc(this.currentX, this.currentY, this.radius, 0, Math.PI * 2, false);
	mainContext.closePath();
	mainContext.fillStyle = 'rgba(177, 0, 129, .1)';
	mainContext.stroke();
};

//
// This function creates the circles that you end up seeing
//
function createCircles() {
// change the range of this loop to adjust the number of circles that you see
	for (let i = 0; i < 1; i++) {
		let radius = 5 + Math.random() * 300;
		let initialX = canvasWidth / 2;
		let initialY = canvasHeight / 2;
		let rotationRadius = 1 + Math.random() * 30;
		let angle = Math.random() * 2 * Math.PI;
		
		let signHelper = Math.floor(Math.random() * 2);
		let sign;
		
		// Randomly specify whether the circle will be rotating clockwise or counterclockwise
		if (signHelper == 1) {
			sign = -1;
		} else {
			sign = 1;
		}
		
		// create the Circle object
		let circle = new Circle(angle, sign, radius, rotationRadius, initialX, initialY);
		circles.push(circle);
	}
	
	// call the draw function approximately 60 times a second
	requestAnimationFrame(draw);
}

function createCircle() {
//create a single circle
      console.log("hello");
      let radius = 5 + Math.random() * 40;
      let initialX = canvasWidth / 2;
      let initialY = canvasHeight / 2;
      let rotationRadius = 1 + Math.random() * 30;
      let angle = Math.random() * 2 * Math.PI;
      
      let signHelper = Math.floor(Math.random() * 2);
      let sign;
      
      // Randomly specify whether the circle will be rotating clockwise or counterclockwise
      if (signHelper == 1) {
        sign = -1;
      } else {
        sign = 1;
      }
      
      // create the Circle object
      let circle = new Circle(angle, sign, radius, rotationRadius, initialX, initialY);
      circles.push(circle);
    
    // call the draw function approximately 60 times a second
    requestAnimationFrame(draw);
  }

createCircles();

function draw() {
	mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
	mainContext.fillStyle = '#ffffff';
	mainContext.fillRect(0, 0, canvasWidth, canvasHeight);
	
	for (let i = 0; i < circles.length; i++) {
		let circle = circles[i];
		circle.update();
	}
	
	// call the draw function again!
	requestAnimationFrame(draw);
}