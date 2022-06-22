import Actor from "./Actor.js";

export default class Player extends Actor {
  constructor(params = {}) {
    const options = {};
    const _params = { ...params, ...options };
    super(_params);
  }
}
