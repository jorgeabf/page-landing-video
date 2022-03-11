const iconoSol = document.getElementById("iconoSol");
const modoClaro = document.querySelector(".modoClaro");

iconoSol.addEventListener("click", () => {
    modoClaro.classList.toggle("modoOscuro");
})

const soloTextos = document.querySelector(".soloTextos--oculto");
const flecha = document.querySelector(".link-oculto--1");

flecha.addEventListener("click", () => {
    soloTextos.classList.toggle("soloTextos--visible");
})