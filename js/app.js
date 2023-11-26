const textNumero = document.getElementById("textNumero");
const formulario = document.querySelector("form");
const botonComprobar = document.querySelector(".btn-outline-light");
const btnNuevoJuego = document.getElementById("btnNuevoJuego");
const infoInput = document.getElementById("inputNumero");

let randomVariable;

function nuevoJuego() {
  textNumero.innerHTML = "?";
  randomVariable = Math.floor(Math.random() * 99);
}

const comprobar = (e) => {
  e.preventDefault();

  let ingreso = parseInt(infoInput.value);
  if (ingreso === randomVariable) {
    textNumero.innerHTML = `${randomVariable}`;

    alert("GANASTE!!");
  } else if (ingreso < randomVariable) {
    alert("casi, el numero que buscas es mayor al numero ingresado");
  } else if (ingreso > randomVariable) {
    alert("casi, el numero que buscas es menor al numero ingresado");
  }
  formulario.reset();

};
/*

const iNumero=document.querySelector("#inputNumero");
iNumero.value;
formulario.reset();
*/
btnNuevoJuego.addEventListener("click", nuevoJuego);
formulario.addEventListener("submit", comprobar);
