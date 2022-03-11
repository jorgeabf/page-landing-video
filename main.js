const iconoSol = document.getElementById("iconoSol");
const modClaro = document.querySelector(".modo-claro");

iconoSol.addEventListener("click", () => {
  modo - claro.classList.toggle("modoOscuro");
});

const soloTextos = document.querySelector(".solo-textos--oculto");
const flecha = document.querySelector(".link-oculto--1");

flecha.addEventListener("click", () => {
  soloTextos.classList.toggle("solo-textos--visible");
});
