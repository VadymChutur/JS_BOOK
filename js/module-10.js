const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// ctx.fillRect(0, 0, 10, 10);

ctx.fillStyle = 'red';
ctx.fillRect(60, 0, 50, 50);
for (let i = 0; i < 7; i += 1) {
  ctx.fillRect(80, i * 10, 10, 10);
}
ctx.fillRect(50, 70, 70, 70);
for (let i = 0; i < 17; i += 1) {
  ctx.fillRect(i * 10, 70, 10, 10);
}
for (let i = 7; i < 20; i += 1) {
  ctx.fillRect(50, i * 10, 10, 10);
}
for (let i = 7; i < 20; i += 1) {
  ctx.fillRect(110, i * 10, 10, 10);
}

ctx.fillStyle = '#9ACD32';
ctx.fillRect(0, 200, 50, 100);

ctx.fillStyle = '#FFA500';
ctx.fillRect(50, 200, 50, 100);

ctx.fillStyle = '#00FF00';
ctx.fillRect(100, 200, 50, 100);

ctx.fillStyle = 'black';
ctx.lineWidth = 4;
ctx.strokeRect(0, 200, 150, 100);

ctx.strokeStyle = 'Turquoise';
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(210, 10);
ctx.lineTo(260, 60);
ctx.moveTo(260, 10);
ctx.lineTo(210, 60);
ctx.stroke();
