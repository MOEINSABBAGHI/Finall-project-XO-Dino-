export class Environment {
  constructor(game) {
    this.game = game;
    this.ground = document.createElement("div");
    this.ground.className = "ground";
    this.ground.style.position = "absolute";
    this.ground.style.bottom = "0";
    this.ground.style.left = "0";
    this.ground.style.width = "100%";
    this.ground.style.height = "20px";
    this.ground.style.background = "green";

    this.sky = document.createElement("div");
    this.sky.className = "sky";
    this.sky.style.position = "absolute";
    this.sky.style.top = "0";
    this.sky.style.left = "0";
    this.sky.style.width = "100%";
    this.sky.style.height = "100%";
    this.sky.style.background = "lightblue";

    this.game.appendChild(this.sky);
    this.game.appendChild(this.ground);
  }
}
