import { Dino } from "./dino.js";
import { Obstacle } from "./obscales.js";
import { Environment } from "./enviroment.js";

window.onload = () => {
  const game = document.getElementById("game");
  game.style.position = "relative";
  game.style.width = "800px";
  game.style.height = "300px";
  game.style.border = "2px solid black";
  game.style.overflow = "hidden";

  const environment = new Environment(game);

  const dino = new Dino();
  game.appendChild(dino.element);

  const obstacles = [];

  // ساخت موانع هر 1 ثانیه
  setInterval(() => {
    const obstacle = new Obstacle();
    game.appendChild(obstacle.element);
    obstacles.push(obstacle);
  }, 1000);

  
  function gameLoop() {
    obstacles.forEach((obs, index) => {
      obs.move();
      if (!obs.isActive) {
        obstacles.splice(index, 1);
      }

      // بررسی برخورد
      const dinoRect = dino.element.getBoundingClientRect();
      const obsRect = obs.element.getBoundingClientRect();

      if (
        dinoRect.right > obsRect.left &&
        dinoRect.left < obsRect.right &&
        dinoRect.bottom > obsRect.top
      ) {
        alert("💀 Game Over!");
        window.location.reload();
      }
    });

    requestAnimationFrame(gameLoop);
  }

  gameLoop();

  // پرش دینو با Space
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      dino.jump();
    }
  });
};
