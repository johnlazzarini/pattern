let mainCanvas = document.getElementById("canvas");
let mainContext = mainCanvas.getContext('2d');
mainCanvas.addEventListener('click', createCircle, false);


let canvasWidth = mainCanvas.width;
let canvasHeight = mainCanvas.height;

let backgroundColor = '#ffffff'

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
  this.color = "#" + Math.random().toString(16).slice(2, 8);
  this.thickness = 5;

  // this.incrementer = .01 + Math.random() * .1;
  this.incrementer = 1.1;
}

Circle.prototype.update = function () {


  if (canvasHeight > canvasWidth){
    if (circles[0].radius > (canvasHeight / 1.29)){
      circles.shift();
      createCircle();
    }
  } else {
    if (circles[0].radius > (canvasWidth / 1.29)){
      circles.shift();
      createCircle();
    }
  }

  this.incrementer *= 1.1;
  this.angle += this.incrementer;
  this.radius += this.incrementer;
  // this.radius *= 1.001;
	
	this.currentX = this.initialX;
  this.currentY = this.initialY;
  
  this.thickness *= 1.0045
	
	if (this.angle >= (Math.PI * 2)) {
		this.angle = 0;
    //this.incrementer = .01 + Math.random() * .1; //random
    this.incrementer = 1.2; 

	}

	// The following code is responsible for actually drawing the circle on the screen
	mainContext.beginPath();
	mainContext.arc(this.currentX, this.currentY, this.radius, 0, Math.PI * 2, false);
  mainContext.closePath();
  mainContext.strokeStyle = this.color;
  mainContext.fillStyle = 'rgba(3, 0, 129, .1)';
  mainContext.lineWidth = this.thickness;
	mainContext.stroke();
};

//
// This function creates the circles that you end up seeing
//
function createCircles() {
// change the range of this loop to adjust the number of circles that you see
	for (let i = 0; i < 1; i++) {
    // let radius = 1 + Math.random() * 300;
    let radius = 1;
		let initialX = canvasWidth / 2;
    let initialY = canvasHeight / 2;
    // let initialX = Math.floor(Math.random() * canvasWidth);
		// let initialY = Math.random() * canvasHeight;
		let rotationRadius = 1;
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
      // let radius = Math.random() * 40;
      let radius = 0.1;
      let initialX = canvasWidth / 2;
      let initialY = canvasHeight / 2;
      // let initialX = Math.floor(Math.random() * canvasWidth);
		  // let initialY = Math.random() * canvasHeight;
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
    //requestAnimationFrame(draw);
  }

createCircles();

function draw() {
	mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
	mainContext.fillStyle = backgroundColor;
  mainContext.fillRect(0, 0, canvasWidth, canvasHeight);
	
	for (let i = 0; i < circles.length; i++) {
		let circle = circles[i];
		circle.update();
	}
	
	// call the draw function again!
	requestAnimationFrame(draw);
}

function changeCircleColors() {
  for (var i = 0; i < circles.length; i++){
    circles[i].color = "#" + Math.random().toString(16).slice(2, 8);
  }
}

function changeBackgroundColor(){
  mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
	backgroundColor = "#" + Math.random().toString(16).slice(2, 8);
  mainContext.fillRect(0, 0, canvasWidth, canvasHeight);
}