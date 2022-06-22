import { CONTEXT } from "../../script.js";
import Model from "../textures/Models.js";

export default class Actor {
  constructor({
    position = { x: 0, y: 0 },
    collisionRadius,
    textureScale,
    modelName,
    name,
  }) {
    this.x = position.x;
    this.y = position.y;
    this.collisionRadius = collisionRadius;
    this.textureScale = textureScale;
    this.model = new Model(modelName);
    this.name = name;
    this.passiveAbilities = [];
    this.activeAbilities = [];
    this.abilityQueue = [];
  }

  update() {
    CONTEXT.beginPath();
    CONTEXT.arc(this.x, this.y, this.collisionRadius, 0, 2 * Math.PI);
    CONTEXT.fillStyle = "red";
    CONTEXT.fill();
    this.model.animate();
  }
}
