// Declaracion distinta de arreglos
let autos = new Array("BMW", "Mercedes Benz", "Nissan");
const carros = ["Toyota", "Honda", "Hyndai"]

// Mostrar los arreglos
console.log(autos);
console.log(carros);

// Mostrar un elemento de un arreglo
console.log(autos[2]);

// Recorrer un array
carros.forEach(element => {
    console.log(element);
});

// Modificar elementos de un array
autos[1] = "Audi";
console.log(autos);

// Insertar un elemento al array
autos.push("Chevrolet");
console.log(autos);

// Insertando por iterador llenando vacios
autos[6] = "Porche";
console.log(autos);
