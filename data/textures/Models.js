import { GLOBAL_INTERVAL, CONTEXT } from '../../script.js';
import loadTextures from './Textures.js';

export default class Model {
  constructor(modelName, owner) {
    this.modelName = modelName;
    this.owner = owner;
    this.sprites = loadTextures(this.modelName);
    this.currentAnimation = 'idle';
    this.currentAnimationFrame = 0;
    this.currentInterval = 0;
  }

  get animation() {
    return this.currentAnimation;
  }

  set animation(value) {
    this.currentAnimation = value;
  }
  animate() {
    this.frameInterval = this.getFrameInterval(this.currentAnimation); // Actively update the frame interval if owner animation speed changes
    CONTEXT.drawImage(
      this.sprites[this.currentAnimation].sprite,
      this.currentAnimationFrame * this.sprites[this.currentAnimation].size,
      0,
      this.sprites[this.currentAnimation].size,
      this.sprites[this.currentAnimation].size,
      this.owner.x -
        (this.sprites[this.currentAnimation].size * this.owner.textureScale) /
          2,
      this.owner.y -
        (this.sprites[this.currentAnimation].size +
          this.sprites[this.currentAnimation].offsetY) *
          this.owner.textureScale,
      this.sprites[this.currentAnimation].size * this.owner.textureScale,
      this.sprites[this.currentAnimation].size * this.owner.textureScale
    );
    this.setCurrentAnimationFrame(); // Set current animation frame
  }

  setCurrentAnimationFrame() {
    if (this.currentInterval >= this.frameInterval) {
      this.currentInterval = 0;
      if (
        this.currentAnimationFrame ==
        this.sprites[this.currentAnimation].frames - 1
      ) {
        this.currentAnimationFrame = 0;
      } else this.currentAnimationFrame++;
    } else this.currentInterval += GLOBAL_INTERVAL;
  }

  reset() {
    this.currentAnimationFrame = 0;
  }

  getFrameInterval(animation) {
    return 1000 / (this.sprites[animation].fps * this.owner.animationSpeed);
  }
}
