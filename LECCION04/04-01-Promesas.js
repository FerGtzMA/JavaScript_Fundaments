/* Usamos las promesas para funciones */

let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = false;
    if (expresion) {
        resolver("Resolvio correcto");
    }else{
        rechazar("Se produjo un error");
    }
});

/*miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);*/

miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));

let promesa = new Promise((resolver) => {
    console.log("Inicio de promesa");
    setTimeout(() => {
        resolver("Saludos con promesa y timeout")
    }, 3000);
    console.log("Fin de promesa");
});

promesa.then(valor => console.log(valor));

// async indica que una funcion regresa una promesa
async function miFuncionCOnPromesa() {
    return "saludos con promesa y async";
}

miFuncionCOnPromesa().then(valor => console.log(valor));

/* await solo se puede usar dentro de una funcion declarada con async */
async function miFuncionCOnPromesaYAwait(){
    let miPromesa = new Promise(resolver => {
        resolver("Promesa con await");
    });

    console.log(await miPromesa);
}

miFuncionCOnPromesaYAwait();