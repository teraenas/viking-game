import { GLOBAL_INTERVAL, CONTEXT } from "../../script.js";

export default class Model {
  constructor(modelName) {
    this.modelName = modelName;
    this.sprites = this.loadSprites(modelName);
    this.initSprites(this.sprites);
    this.currentAnimation = "walk";
    this.frameInterval = this.getFrameInterval(this.currentAnimation);
    this.currentAnimationFrame = 0;
    this.currentInterval = 0;
    console.log(this.currentAnimationFrame, this.currentInterval);
  }

  loadSprites(modelName) {
    switch (modelName) {
      case "viking-1":
        return {
          alert: {
            sprite: new Image(),
            src: "./data/textures/player/viking-1/alert.png",
            frames: 10,
            size: 512,
          },

          attack: {
            sprite: new Image(),
            src: "./data/textures/player/viking-1/attack.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          dead: {
            sprite: new Image(),
            src: "./data/textures/player/viking-1/dead.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          die: {
            sprite: new Image(),
            src: "./data/textures/player/viking-1/die.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          hit: {
            sprite: new Image(),
            src: "./data/textures/player/viking-1/hit.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          idle: {
            sprite: new Image(),
            src: "./data/textures/player/viking-1/idle.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          jump: {
            sprite: new Image(),
            src: "./data/textures/player/viking-1/jump.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          run: {
            sprite: new Image(),
            src: "./data/textures/player/viking-1/run.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          walk: {
            sprite: new Image(),
            src: "./data/textures/player/viking-1/walk.png",
            frames: 10,
            fps: 7,
            size: 512,
          },
        };

      case "viking-2":
        return {
          alert: {
            sprite: new Image(),
            src: "./data/textures/player/viking-2/alert.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          attack: {
            sprite: new Image(),
            src: "./data/textures/player/viking-2/attack.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          dead: {
            sprite: new Image(),
            src: "./data/textures/player/viking-2/dead.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          die: {
            sprite: new Image(),
            src: "./data/textures/player/viking-2/die.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          hit: {
            sprite: new Image(),
            src: "./data/textures/player/viking-2/hit.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          idle: {
            sprite: new Image(),
            src: "./data/textures/player/viking-2/idle.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          jump: {
            sprite: new Image(),
            src: "./data/textures/player/viking-2/jump.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          run: {
            sprite: new Image(),
            src: "./data/textures/player/viking-2/run.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          walk: {
            sprite: new Image(),
            src: "./data/textures/player/viking-2/walk.png",
            frames: 10,
            fps: 7,
            size: 512,
          },
        };

      case "viking-3":
        return {
          alert: {
            sprite: new Image(),
            src: "./data/textures/player/viking-3/alert.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          attack: {
            sprite: new Image(),
            src: "./data/textures/player/viking-3/attack.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          dead: {
            sprite: new Image(),
            src: "./data/textures/player/viking-3/dead.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          die: {
            sprite: new Image(),
            src: "./data/textures/player/viking-3/die.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          hit: {
            sprite: new Image(),
            src: "./data/textures/player/viking-3/hit.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          idle: {
            sprite: new Image(),
            src: "./data/textures/player/viking-3/idle.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          jump: {
            sprite: new Image(),
            src: "./data/textures/player/viking-3/jump.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          run: {
            sprite: new Image(),
            src: "./data/textures/player/viking-3/run.png",
            frames: 10,
            fps: 7,
            size: 512,
          },

          walk: {
            sprite: new Image(),
            src: "./data/textures/player/viking-3/walk.png",
            frames: 10,
            fps: 7,
            size: 512,
          },
        };
    }
  }

  initSprites(sprites) {
    Object.entries(sprites).forEach(([_, sprite]) => {
      sprite.sprite.src = sprite.src;
    });
  }

  animate() {
    if (this.currentInterval >= this.frameInterval) {
      this.currentInterval = 0;
      if (
        this.currentAnimationFrame ==
        this.sprites[this.currentAnimation].frames - 1
      ) {
        this.currentAnimationFrame = 0;
      } else this.currentAnimationFrame++;
      CONTEXT.drawImage(this.sprites[this.currentAnimation].sprite, 0, 0);
    } else this.currentInterval += GLOBAL_INTERVAL;
    // console.log(this.currentAnimationFrame, this.currentInterval);
  }

  reset() {
    this.currentAnimationFrame = 0;
  }

  getFrameInterval(animation) {
    return 1000 / this.sprites[animation].fps;
  }
}
