const larguraTela = window.innerWidth;

function coordenadasMouse(event){
  const coordenadas = {
  x: event.x,
  y: event.y,
  };
  console.log(coordenadas);
}


window.addEventListener("mousemove", coordenadasMouse);


function scroll(){
  console.log('Usou o Scroll');
}
window.addEventListener('scroll', scroll);