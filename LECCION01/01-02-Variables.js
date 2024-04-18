/* -------------------- VARIABLES Y SUS TIPOS EN JAVASCRIPT ----------------------- */
/* Ejemplos de tipos de datos en JS */

// String
var nombre = "Fernando";
console.log(nombre);

// Numerico
var numero = 1000;
console.log(numero);

// Objeto
var objeto = {
    nombre : "Yahir",
    apellido : "Gutierrez",
    telefono : 548412155
}
console.log(objeto);

// typeof
var telefono = 5616813;
console.log(typeof telefono);

/* Con la declaracion 'let' solo se usa en su 
mismo bloque y no se puede cambiar de tipo */
let serie = "Dos hombres y medio";

/* Con la declaracion 'const' se usa para 
valores que no se cambiaran */
const PI = 3.1416;

// Mas tipos de datos 
// boolean
var bandera = false;
console.log(bandera);

// funcion
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

// Symbol 
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

// Clase de una funcion
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

// Undefined
var x;
console.log(x);
console.log(typeof x);

// null
var nulo = null;
console.log(nulo);
console.log(typeof nulo);

// Array
var autos = ["BMW", "AUDI", "NISSAN"];
console.log(autos);
console.log(typeof autos);

// String vacio
var vacio = "";

// Concatenacion de cadenas
var saludo = "Hola";
var despedida = "Adios";
var concatenacion = saludo + ", " + despedida;
console.log(concatenacion);

var numeroRandom = 3423;
var usuario = nombre + numeroRandom;
console.log(usuario+9);


/* -------------------- OPERADORES EN JAVASCRIPT -------------------------- */

/* 
    ! Como en los operadores numericos de todos los lenguages tenemos los siguientes:
    +, -, /, *

    ? Operadores de incremento y decremento (Respectivamente): 
    ++, --
    * Se pueden usar.
    TODO: Hay Pre-decremento, pre-incremento, post decremento, post-incremento

    ! También estan los operadores de asignacion como lo es 
    +=, -=

    ! Operadores de comparacion
    * == : Se revisa el valor sin importar el tipo
    * === : Se revisa los valores pero tambien los tipos
    * != : Distinto de, pero de cualquier tipo
    * !== : Distinto de, pero del mismo tipo
    
    ! Operadores relacionales
    <, >, <=, >=

    ! Expresiones logicas
    &&, ||, !
*/

