function addgen() {
var now = new Date();
var canvas = document.getElementById('canvas');
var ctx = document.getElementById('canvas').getContext('2d');
// ctx.save();
// ctx.clearRect(0, 0, 190, 190);


ctx.translate(300, 300);
ctx.strokeStyle = 'black';
ctx.fillStyle = 'white';
ctx.lineWidth = 10;
ctx.lineCap = 'round';

ctx.beginPath();
ctx.lineWidth = 8;
ctx.strokeStyle = '#000000';
ctx.arc(0, 0, 20, 0, Math.PI * 2, true);
ctx.stroke();

// ctx.restore();
console.log("hello");
}