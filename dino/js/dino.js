export class Dino {
  constructor() {
    this.element = document.createElement("div");
    this.element.id = "dino";
    this.element.style.width = "50px";
    this.element.style.height = "50px";
    this.element.style.backgroundColor = "red";
    this.element.style.position = "absolute";
    this.element.style.bottom = "0px";
    this.element.style.left = "50px";

    this.jumpHeight = 100;
    this.isJumping = false;
    this.gravity = 5; 
  }

  jump() {
    if (this.isJumping) return;
    this.isJumping = true;

    let up = true;
    let bottom = 0;
    const interval = setInterval(() => {
      if (up) {
        bottom += 5;
        if (bottom >= this.jumpHeight) up = false;
      } else {
        bottom -= this.gravity;
        if (bottom <= 0) {
          bottom = 0;
          clearInterval(interval);
          this.isJumping = false;
        }
      }
      this.element.style.bottom = bottom + "px";
    }, 20); 
    this,element
  }
}
