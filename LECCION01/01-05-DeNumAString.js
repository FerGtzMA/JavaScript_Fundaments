let numero = "23";

let edad = Number(numero),
  adulto = 18;

/* Funcion es NaN */
if (isNaN(edad)) {
  console.log("No es un numero");
} else {
  let resultado = (edad >= adulto) ? "Puede votar" : "No puede votar";
  console.log(resultado);
}
