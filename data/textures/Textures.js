export default function loadTextures(modelName) {
  const texturePack = loadSprites(modelName);
  initSprites(texturePack);
  return texturePack;
}

function loadSprites(modelName) {
  switch (modelName) {
    case 'viking-1':
      return {
        alert: {
          sprite: new Image(),
          src: './data/textures/player/viking-1/alert.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        attack: {
          sprite: new Image(),
          src: './data/textures/player/viking-1/attack.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        dead: {
          sprite: new Image(),
          src: './data/textures/player/viking-1/dead.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        die: {
          sprite: new Image(),
          src: './data/textures/player/viking-1/die.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        hit: {
          sprite: new Image(),
          src: './data/textures/player/viking-1/hit.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        idle: {
          sprite: new Image(),
          src: './data/textures/player/viking-1/idle.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        jump: {
          sprite: new Image(),
          src: './data/textures/player/viking-1/jump.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        run: {
          sprite: new Image(),
          src: './data/textures/player/viking-1/run.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        walk: {
          sprite: new Image(),
          src: './data/textures/player/viking-1/walk.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },
      };

    case 'viking-2':
      return {
        alert: {
          sprite: new Image(),
          src: './data/textures/player/viking-2/alert.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        attack: {
          sprite: new Image(),
          src: './data/textures/player/viking-2/attack.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        dead: {
          sprite: new Image(),
          src: './data/textures/player/viking-2/dead.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        die: {
          sprite: new Image(),
          src: './data/textures/player/viking-2/die.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        hit: {
          sprite: new Image(),
          src: './data/textures/player/viking-2/hit.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        idle: {
          sprite: new Image(),
          src: './data/textures/player/viking-2/idle.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        jump: {
          sprite: new Image(),
          src: './data/textures/player/viking-2/jump.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        run: {
          sprite: new Image(),
          src: './data/textures/player/viking-2/run.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        walk: {
          sprite: new Image(),
          src: './data/textures/player/viking-2/walk.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },
      };

    case 'viking-3':
      return {
        alert: {
          sprite: new Image(),
          src: './data/textures/player/viking-3/alert.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        attack: {
          sprite: new Image(),
          src: './data/textures/player/viking-3/attack.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        dead: {
          sprite: new Image(),
          src: './data/textures/player/viking-3/dead.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        die: {
          sprite: new Image(),
          src: './data/textures/player/viking-3/die.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        hit: {
          sprite: new Image(),
          src: './data/textures/player/viking-3/hit.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        idle: {
          sprite: new Image(),
          src: './data/textures/player/viking-3/idle.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        jump: {
          sprite: new Image(),
          src: './data/textures/player/viking-3/jump.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        run: {
          sprite: new Image(),
          src: './data/textures/player/viking-3/run.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },

        walk: {
          sprite: new Image(),
          src: './data/textures/player/viking-3/walk.png',
          frames: 10,
          fps: 15,
          size: 512,
          offsetY: -110,
        },
      };
  }
}

function initSprites(sprites) {
  Object.entries(sprites).forEach(([_, sprite]) => {
    sprite.sprite.src = sprite.src;
  });
}
