export class Obstacle {
  constructor(speed = 5) {
    this.element = document.createElement("div");
    this.element.className = "obstacle";
    this.element.style.width = "20px";
    this.element.style.height = "50px";
    this.element.style.background = "brown";
    this.element.style.position = "absolute";
    this.element.style.bottom = "0";
    this.element.style.left = "400px"; 
    this.speed = speed;
    this.isActive = true;
  }

  move() {
    const currentLeft = parseInt(this.element.style.left);
    if (currentLeft <= -20) {
      this.isActive = false;
      this.element.remove();
    } else {
      this.element.style.left = `${currentLeft - this.speed}px`;
    }
  }
}