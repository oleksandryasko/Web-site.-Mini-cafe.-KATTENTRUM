let canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

canvas.width = 64;
canvas.height = 54;

ctx.strokeStyle = '#005aff';
ctx.lineWidth = 5;

ctx.beginPath();
ctx.moveTo(25, 10);
ctx.lineTo(5, 50);
ctx.lineTo(15, 50);
ctx.lineTo(30, 20);
ctx.lineTo(45, 50);
ctx.lineTo(25, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(35, 3);
ctx.lineTo(75, 80);
ctx.lineWidth = 1;
ctx.stroke();

let canvasTwo = document.getElementById('canvas__two');
ctx = canvasTwo.getContext('2d');

canvasTwo.width = 64;
canvasTwo.height = 54;

ctx.strokeStyle = '#005aff';
ctx.lineWidth = 5;

ctx.beginPath();
ctx.moveTo(25, 10);
ctx.lineTo(5, 50);
ctx.lineTo(15, 50);
ctx.lineTo(30, 20);
ctx.lineTo(45, 50);
ctx.lineTo(25, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(35, 3);
ctx.lineTo(75, 80);
ctx.lineWidth = 1;
ctx.stroke();



