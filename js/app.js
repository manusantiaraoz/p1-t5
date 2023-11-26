const textNumero = document.getElementById("textNumero");
const formulario = document.querySelector("form");
const botonComprobar = document.querySelector(".btn-outline-light");
const btnNuevoJuego = document.getElementById("btnNuevoJuego");
const infoInput = document.getElementById("inputNumero");

let randomVariable;

function nuevoJuego() {
  textNumero.innerHTML = "?";
  randomVariable = Math.floor(Math.random() * 99);
  console.log(randomVariable);
}

 const comprobar = (e) => {
     e.preventDefault();
  let bandera = true;
  let ingreso = int (infoInput.value);
  console.log("random variables--->"+randomVariable);
  console.log("ingreso--->"+ ingreso);
  while (bandera) {
    console.log("entro al while");
    if (ingreso === randomVariable) {
      alert("GANASTE");
      textNumero.inertHTML = " " + randomVariable;
      bandera = false;
    } else if (ingreso < randomVariable) {
      alert("casi, el numero que buscas es mayor al numero ingresado");
    } else if (ingreso > randomVariable) {
      alert("casi, el numero que buscas es menor al numero ingresado");
    }
  }
};
/*

const iNumero=document.querySelector("#inputNumero");
iNumero.value;
formulario.reset();
*/
btnNuevoJuego.addEventListener("click", nuevoJuego);
formulario.addEventListener("submit",comprobar);