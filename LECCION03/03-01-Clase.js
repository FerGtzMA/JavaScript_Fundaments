/* NO es posible crear objetos antes de declarar la clase
No se aplica el concepto de hoisting
let persona2 = new Persona("Karla", "Juarez"); */

class Persona extends Object{

    static conatdorPersonas = 0; // atributo de nuestra clase
    email = "Valor por default"; // atributo de nuestros objetos

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido) {
        super();
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.conatdorPersonas < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.conatdorPersonas; //aumentando cada que se crea
        } else {
            console.log("Se ha superado el maximo de personas");
        }
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
    // Sobreescribir el metodo de la clase padre (Objetc)
    /* El metodo que se ejecuta depende si es una referencia
    de tipo padre o de tipo hijo*/
    toString(){
        return this.idPersona + ": " + this.nombreCompleto(); // polimorfismo
    }
    // metodo static
    static saludar(){
        console.log("Saludo desde el metodo static");
    }
    static despedir(persona){
        console.log("Adios, " + persona.nombre);
    }
}

let persona1 = new Persona("Fer","Gtz");
console.log(persona1.nombre);

// El hoisting con clases no aplica
// Primero se tiene que hacer la clase para poder instanciarla

// HERENCIA
class Empleado extends Persona{
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    // Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ", " +this._departamento;
    }
}

let empleado1 = new Empleado("Maria", "Becerra", "Cantante");
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString()); // polimorfismo

//persona1.saludar(); // no es posible llamar un metodo static desde un objeto
Persona.saludar();
Persona.despedir(persona1);

Empleado.saludar();
Empleado.despedir(empleado1);

console.log(persona1.conatdorPersonas);
console.log(Persona.conatdorPersonas);
console.log(Empleado.conatdorPersonas);

// Tratando de llamar nuestros atributos (static vs no static)
console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Empleado.email);

// Constates statics
console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);

let persona2 = new Persona("Laura", "Urmania");
let persona3 = new Persona("Juan", "Pérez");
let persona4 = new Persona("María", "Gómez");
let persona5 = new Persona("María", "Gómez");
console.log(persona4.toString());
console.log(persona5.toString());