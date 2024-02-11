const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// let position = 0;
// let size = 0;

// setInterval(function () {
//   ctx.clearRect(0, 0, 400, 400);
//   ctx.fillRect(position, 0, size, size);
//   position += 1;
//   size += 1;
//   if (position > 200 && size > 200) {
//     position = 0;
//     size = 0;
//     8000;
//   }
// }, 30);

const circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

const drawBee = function (x, y) {
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'gold';

  circle(x, y, 8, true);
  circle(x, y, 8, false);
  circle(x - 5, y - 11, 5, false);
  circle(x + 5, y - 11, 5, false);
  circle(x - 2, y - 1, 2, false);
  circle(x + 2, y - 1, 2, false);
};

const update = function (coordinate) {
  let offset = Math.random() * 4 - 2;
  coordinate += offset;

  if (coordinate > 800) {
    coordinate = 800;
  }
  if (coordinate < 0) {
    coordinate = 0;
  }

  return coordinate;
};

let x = 100;
let y = 100;
setInterval(function () {
  ctx.clearRect(0, 0, 800, 800);
  drawBee(x, y);
  x = update(x);
  y = update(y);

  ctx.strokeRect(0, 0, 800, 800);
}, 30);
