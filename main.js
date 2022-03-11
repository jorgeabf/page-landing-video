const iconoSol = document.getElementById("iconoSol");
const modoClaro = document.querySelector(".modo-claro");

iconoSol.addEventListener("click", () => {
  modoClaro.classList.toggle("modoOscuro");
});

const soloTextos = document.querySelector(".solo-textos--oculto");
const flecha = document.querySelector(".link-oculto--1");

flecha.addEventListener("click", () => {
  soloTextos.classList.toggle("solo-textos--visible");
});
