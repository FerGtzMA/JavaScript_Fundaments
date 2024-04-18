'use strict'

try {
    // x = 11;
    let x = 10;
} catch (error) {
    console.log(error);
}finally{
    console.log("Termina la revision de errores");
}

let resultado = '';

try {
    if(isNaN(resultado)) throw 'No es un numero';
    else if( resultado === '') throw 'Es cadena vacia';
    else if(resultado >= 0) throw 'Valor positivo';
    else if(resultado < 0 ) throw 'valor negativo';
} catch (error) {
    console.log(error);
}