const CANVAS__WIDTH = 1024;
const CANVAS__HEIGHT = 768;
let GLOBAL_INTERVAL = 0;

import Player from './data/assets/Player.js';

const canvas = document.querySelector('canvas');
canvas.width = CANVAS__WIDTH;
canvas.height = CANVAS__HEIGHT;

const ctx = canvas.getContext('2d');
ctx.fillStyle = 'white';

const player = new Player({
  position: { x: 300, y: 400 },
  collisionRadius: 40,
  textureScale: 0.55,
  modelName: 'viking-1',
  name: 'Nechifor',
});

console.log(player);

function updateWorld() {
  player.update();
}
function drawWorld() {}

function loop(delta) {
  GLOBAL_INTERVAL = delta - lastRender;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  updateWorld();
  drawWorld();

  window.requestAnimationFrame(loop);
  lastRender = delta;
}

export { ctx as CONTEXT, GLOBAL_INTERVAL };

let lastRender = 0;
window.requestAnimationFrame(loop);
