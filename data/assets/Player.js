import Actor from './Actor.js';

export default class Player extends Actor {
  constructor(params = {}) {
    super(params);
    this.animationSpeed = 1.62;
  }
}
