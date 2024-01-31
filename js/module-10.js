const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// ctx.fillRect(0, 0, 10, 10);

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
