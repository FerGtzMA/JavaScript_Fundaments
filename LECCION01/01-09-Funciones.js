// Declaracion de una funcion
function sumaSinReturn(a,b) {
    console.log("Suma = " + (a + b));
}

// Llamado de una funcion
sumaSinReturn(3,6);

function sumaConReturn(a,b = 1) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
}

console.log( sumaConReturn(1,2));

// Declaracion funcion de tipo exprsion
let x = function(a,b){return a + b};

resultado = x(1,6);
console.log(resultado);


// FUNCIONES TIPO SELFT
// No se puede reutilizar porque no tiene nombre, solo se hace llamar a si misma una vez
(function(nombre){
    console.log("Ejecutando la funcion self" + " Fernando");
})("Fernando");


// FUNCIONES COMO OBJETO
function funObject(a,s,d){
    console.log(arguments.length); // debe de estar dentro de la funcion
    return a + s + d;
}

funObject(1,2,3);

var miFuncionTexto = funObject.toString();
console.log(miFuncionTexto);


// FUNCIONES FLECHA
const sumarTipoFlecha = (a,b) => a + b;
resultado = sumarTipoFlecha(2,8);
console.log(resultado);

// No es necesario pasar todos los parametros de las funciones
resultado = sumaConReturn(78);
console.log(resultado); // Estamos utilizando el valor por default, o sea, argumentos opcionales


// SUMAR TODOS LOS ARGUMENTOS con arguments
function sumarTodo(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}

resultado =sumarTodo(4,6,23,256,2,1);
console.log(resultado);


// PASO POR VALOR Y PASO POR REFERENCIA
let variable = 10; // tipo primitivo: no tiene atributos ni metodos

function cambiarValor(a){
    a = 20;
}

// paso por valor
cambiarValor(variable);
console.log(variable); // no sufre ningun cambio

const persona = {
    nombre: "Yahir",
    apellido: "Santoyo"
}

function cambiarValorObjeto(p1){
    p1.nombre = "Carlos";
}

// paso por referencia
cambiarValorObjeto(persona);
console.log(persona);

// Funcion tipo callback
function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback) {
    let res = op1 + op2;
    funcionCallback(res);
}

sumar(5,4,imprimir);

// Llamadas asincronas con uso setTimeout
function miFuncionCallback() {
    console.log("Saludo despues de 3 segundos");
}

setTimeout(miFuncionCallback, 3000);
setTimeout(function(){console.log("Saludo asincrono 2 seg");}, 2000);
setTimeout(() => {console.log("Saludo asincrono 1 seg");}, 1000);
setTimeout(() => console.log("Saludo asincrono 1 seg"), 100);

// Set interval -------------------------------------------------
console.log("______________________________________________________");

let reloj = () => {
    let flecha = new Date();
    console.log(`${flecha.getHours()}:${flecha.getMinutes()}:${flecha.getSeconds()}`);
}

// descomentar
//setInterval(reloj, 1000);