const d = document;
let x = 0, y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
  $stage = d.querySelector(stage),
  limitsBall = $ball.getBoundingClientRect(),
  limitsStage = $stage.getBoundingClientRect();

  console.log(e.keyCode);
  console.log(e.key);
  console.log(limitsBall, limitsStage);


  switch (e.keyCode) {
    case 37:
      e.preventDefault();
      if (limitsBall.left > limitsStage.left) x--;
      break;
    case 38:
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
      }; 
      break;
    case 39:
      e.preventDefault();
      if (limitsBall.right < limitsStage.right) x++;
      break;
    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++;
      };
      break;
    default:
      break;
  }

  $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;

}

export function shorcuts(e) {
  //console.log(e.type);
  //console.log(e.key);
  //console.log(e.keyCode);
  //console.log(e.ctrlKey);
  //console.log(e.altKey);
  //console.log(e);

  if (e.key === "a" && e.altKey) {
    alert(`Haz lanxado una alerta con el teclado`);
  }

  if (e.key === "c" && e.altKey) {
    confirm(`Haz lanzado una conirmacion con el teclado`);
  }

  if (e.key === "q" && e.altKey) {
    prompt(`Haz lanzado una prompt con el teclado`);
  }
}