const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// ctx.fillRect(0, 0, 10, 10);

// ctx.fillStyle = 'red';
// ctx.fillRect(60, 0, 50, 50);
// for (let i = 0; i < 7; i += 1) {
//   ctx.fillRect(80, i * 10, 10, 10);
// }
// ctx.fillRect(50, 70, 70, 70);
// for (let i = 0; i < 17; i += 1) {
//   ctx.fillRect(i * 10, 70, 10, 10);
// }
// for (let i = 7; i < 20; i += 1) {
//   ctx.fillRect(50, i * 10, 10, 10);
// }
// for (let i = 7; i < 20; i += 1) {
//   ctx.fillRect(110, i * 10, 10, 10);
// }

// ctx.fillStyle = '#9ACD32';
// ctx.fillRect(0, 200, 50, 100);

// ctx.fillStyle = '#FFA500';
// ctx.fillRect(50, 200, 50, 100);

// ctx.fillStyle = '#00FF00';
// ctx.fillRect(100, 200, 50, 100);

// ctx.fillStyle = 'black';
// ctx.lineWidth = 4;
// ctx.strokeRect(0, 200, 150, 100);

// ctx.strokeStyle = 'Turquoise';
// ctx.lineWidth = 4;
// ctx.beginPath();
// ctx.moveTo(210, 10);
// ctx.lineTo(260, 60);
// ctx.moveTo(260, 10);
// ctx.lineTo(210, 60);
// ctx.stroke();

ctx.strokeStyle = '#008000';
ctx.lineWidth = 4;
ctx.strokeRect(210, 200, 20, 20);
ctx.strokeStyle = '#008000';
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(220, 220);
ctx.lineTo(220, 260);
ctx.moveTo(220, 240);
ctx.lineTo(200, 230);
ctx.moveTo(220, 240);
ctx.lineTo(240, 230);
ctx.moveTo(220, 260);
ctx.lineTo(200, 300);
ctx.moveTo(220, 260);
ctx.lineTo(240, 300);

ctx.stroke();

ctx.fillStyle = 'SkyBlue';
ctx.beginPath();
ctx.moveTo(250, 220);
ctx.lineTo(250, 180);
ctx.lineTo(280, 150);
ctx.lineTo(310, 180);
ctx.lineTo(310, 220);
ctx.lineTo(250, 220);

ctx.fill();

// ctx.lineWidth = 2;
// ctx.strokeStyle = 'Green';
// ctx.beginPath();
// ctx.arc(300, 50, 20, 0, Math.PI / 2, false);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(350, 50, 20, 0, Math.PI, false);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(400, 50, 20, 0, Math.PI * 2, false);
// ctx.stroke();

const circle = function (x, y, radius, fill) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.stroke();
  if (fill) {
    ctx.fill();
  }
};

const snowmanDrawing = function (x, y) {
  ctx.lineWidth = 4;
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'black';
  circle(x, y, 40, false);
  circle(x, y + 100, 60, false);
  circle(x - 15, y - 10, 5, true);
  circle(x + 15, y - 10, 5, true);
  circle(x, y + 100, 5, true);
  circle(x, y + 130, 5, true);
  circle(x, y + 70, 5, true);

  ctx.strokeStyle = 'orange';
  ctx.fillStyle = 'orange';
  circle(x, y + 10, 5, true);
};

snowmanDrawing(400, 200);

// ctx.lineWidth = 4;
// ctx.strokeStyle = 'red';
// circle(400, 200, 10);

// ctx.strokeStyle = 'orange';
// circle(400, 200, 20);

// ctx.strokeStyle = 'yellow';
// circle(400, 200, 30);

// ctx.strokeStyle = 'green';
// circle(400, 200, 40);

// ctx.strokeStyle = 'blue';
// circle(400, 200, 50);

// ctx.strokeStyle = 'purple';
// circle(400, 200, 60);

// ctx.lineWidth = 4;
// ctx.strokeStyle = 'black';
// ctx.fillStyle = 'black';
// circle(400, 200, 40, false);
// circle(400, 300, 60, false);
// circle(385, 190, 5, true);
// circle(415, 190, 5, true);
// circle(400, 300, 5, true);
// circle(400, 330, 5, true);
// circle(400, 270, 5, true);

// ctx.strokeStyle = 'orange';
// ctx.fillStyle = 'orange';
// circle(400, 210, 5, true);

const points = [
  [50, 50],
  [50, 100],
  [100, 100],
  [100, 50],
  [50, 50],
];

const mysteryPoints = [
  [50, 50],
  [50, 100],
  [25, 120],
  [100, 50],
  [70, 90],
  [100, 90],
  [70, 120],
];

const drawPoints = function (points, strokeStyle = 'black') {
  // console.log(points[0][0]);
  ctx.strokeStyle = strokeStyle;
  ctx.beginPath();
  for (let i = 0; i < points.length; i += 1) {
    // console.log(points[i][0]);
    // console.log(points[i][points[i].length - 1]);
    let x = points[i][0];
    let y = points[i][points[i].length - 1];
    console.log(points.indexOf(points[i]));
    console.log(points[i]);
    if (points.indexOf(points[i]) === 0) {
      console.log(x, y);
      ctx.moveTo(x, y);
    } else {
      console.log(x, y);
      ctx.lineTo(x, y);
    }
  }
  // ctx.fill();
  ctx.stroke();
};

drawPoints(mysteryPoints);

// $('html').mousemove(function (event) {
//   ctx.lineWidth = 3;
//   ctx.strokeStyle = 'black';
//   ctx.beginPath();
//   ctx.arc(event.pageX, event.pageY, 3, 0, Math.PI * 2, false);
//   ctx.stroke();
// });
