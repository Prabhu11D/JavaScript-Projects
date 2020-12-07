const canvas = document.querySelector("#canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "red";
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = 10;

let lastX = 0;
let lastY = 0;
let isDrawing = false;
let hue = 0;

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  if (hue >= 360) hue = 0;
  hue++;
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
