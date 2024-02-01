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
