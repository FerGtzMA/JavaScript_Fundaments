// Funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    // Metodos dentro de un metodo constructor
    this.nombreCompleto = function(){
        return this.nombre +" "+this.apellido;
    }
}

// Creacion de objetos
let persona = {
    nombre: "Fernando",
    apellido: "Gutierres",
    edad: 21,
    genero: 'M',
    idioma: "es",
    // Agregar metodos a objetos
    nombreCompleto: function(titulo){
        return titulo + ": " + this.nombre + " " + this.apellido;
    },
    // Metodo get
    get anioDeNacimiento(){
        return (new Date().getFullYear()) - 21;
    },
    get lang(){
        return this.idioma.toUpperCase();
    },
    // Metodo set
    set lang(lang){
        this.idioma = lang.toUpperCase();
    }
}

// mostrar informacion de objetos
console.log(persona);
console.log(persona.genero);
console.log(persona.nombreCompleto());

// Otra forma de crear objetos
let people = new Object();
people.nombre = "Carlos";
people.apellido = "Smith";
people.tel = "354812336";

console.log(people.tel);

// Acceder a las propiedades de los objetos
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

// Agregando una propiedad a un objeto
persona.tel = "215123513";
persona.tel = "516891426";

console.log(persona);

// Eliminar una propiedad a un objeto
delete persona.tel;
console.log(persona);

// Formas de imprimir un objeto
// concatenar cada valor de una propiedad
console.log(persona.nombre + ", " + persona.apellido);

// for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

let personaArray = Object.values(persona);
console.log(personaArray);

let persoanString = JSON.stringify(persona);
console.log(persoanString);

// METODO GET
console.log(persona.anioDeNacimiento);

// METODO SET
console.log(persona.lang);
persona.lang = "en";
console.log(persona.lang);

let padre = new Persona("Hugo", "Martinez", 23);
console.log(padre);
console.log(padre.nombreCompleto());

// Formas de crear objetos
let miObjeto = new Object();
let miObjeto1 = {};

let miCadena = new String("Hola");
let miCadena1 = "Hola";

// Uso de call
// el metodo de persona con los datos de poeple
// los atributos deben tener el mismo nombre
console.log(persona.nombreCompleto.call(people, 'Lic'));

// Usa apply
//  el metodo de persona con los datos de poeple
console.log(persona.nombreCompleto.apply(people));
let arreglo = ["Lic"];
console.log(persona.nombreCompleto.apply(people, arreglo));