/* PROGRAMACION ORIENTADA A OBJETOS 
function Suma(valor1, valor2) { // funcion constructora
    this.valor1 = valor1;
    this.valor2 = valor2;
    // métodos de la clase
    this.primerValor = function (valor1) {
        this.valor1 = valor1;
        // permite cambiar el valor de la propiedad valor1 del objeto
    }
    this.segundoValor = function (valor2) {
        this.valor2 = valor2;
        // permite cambiar el valor de la propiedad valor2 del objeto
    }
    this.retornarResultado = function () {
        return this.valor1 + this.valor2;
        // retorna la suma de las propiedades
    }
}

let suma;
suma = new Suma(22, 15);
document.write('La suma de 22 y 15 es:' + suma.retornarResultado() + '<br>');
suma.primerValor(70);
suma.segundoValor(30);
document.write('La suma de 70 y 30 es:' + suma.retornarResultado() + '<br>');
*/

/* DEFINICION DE VARIAS CLASES 
function Persona(nombre, edad) {
    this.nombre = prompt('Ingrese nombre de la persona:');
    this.edad = parseInt(prompt('Ingrese edad:'));
}

function Empresa(edadTope) {
    this.edadTope = 60;
    this.verificar = function (per) {
        if (per.edad >= this.edadTope) {
            return true;
        }
        else {
            return false;
        }
    }
}

let per1 = new Persona();
let per2 = new Persona();
let per3 = new Persona();
let empresa = new Empresa();
let cont = 0;
if (empresa.verificar(per1))
    cont ++;

if (empresa.verificar(per2))
    cont ++;

if (empresa.verificar(per3))
    cont ++;

document.write('La cantidad de personas que no pueden entrar a la empresa son: '+ cont);
*/

/* VECTORES CON COMPONENTES DE TIPO OBJETO */

/* CREACION DE OBJETOS LITERALES 
let jugador = {
    nombre : 'Guada',
    puntos : 0,

    imprimir: function() {
       document.write(this.nombre + '<br>' + this.puntos + '<br>');
    },

    aumentarPuntos: function (cantidad){
        this.puntos = this.puntos + cantidad;
    },

    verificarSiGano: function (){
        if(this.puntos > 1000){
            document.write('El jugador ha ganado <br>');
        }
        else {
            document.write('Faltan puntos para ganar<br>');
        }
    }
}

jugador.imprimir();
jugador.aumentarPuntos(500);
jugador.verificarSiGano();
jugador.aumentarPuntos(500);
jugador.verificarSiGano();
jugador.aumentarPuntos(500);
jugador.verificarSiGano();
*/

/*ARRAY: DIFERENTES FORMAS DE CREARLOS 
let array1 = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
let array2 = new Array('enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre');

for (let f = 0; f < array1.length; f++) {
    document.write(array1[f] + ' ');
}
document.write('<br>');
for (let f = 0; f < array2.length; f++) {
    document.write(array2[f] + ' ');
}
*/

/* ARRAY: DENSOS 
let array1 = [];
for(let x=0; x< 10; x++){
    array1[x]= parseInt(1 + (Math.random() * 500));
}

let array2 = [];
let array3 = [];
let aux1 = 0;
let aux2 = 0;

for(let x=0; x<array1.length; x++){
    if(array1[x] < 250 ){
        array2[aux1] = array1[x];
        aux1++
    }
    else{
        array3[aux2] = array1[x];
        aux2++;
    }
}

document.write("Tamaño del array 2: " + array2.length + "<br>");
document.write("Tamaño del array 3: " + array3.length + "<br>");

document.write("Elementos del array 1: <br>");
for(let x=0; x<array1.length; x++){
    document.write(array1[x] + ' ');
}
document.write("<br>");

document.write("Elementos del array 1: <br>");
for(let x=0; x<array2.length; x++){
    document.write(array2[x] + ' ');
}
document.write("<br>");

document.write("Elementos del array 1: <br>");
for(let x=0; x<array3.length; x++){
    document.write(array3[x] + ' ');
}
document.write("<br>");
*/

/* ARRAY: NO DENSOS O DISPERSOS */

// /* ARRAY: METODO SPLICE
// /*let vec = [0, 1, 2, 3, 9, 2, 6, 6, 8, 2]; definicion del vector */
// document.write('Vector original: <br>');
// for (let f = 0; f < vec.length; f++) { /* recorre el arreglo y lo muestra  */
//     document.write(vec[f] + ' ');
// }
// let indice = 0; /* variable para recorrer el arreglo */

// for (let indice = 0; indice < vec.length; indice++) {
//     if (vec[indice] == 2) {
//         vec.splice(indice, 1, 1, 1);
//         /* estamos indicando que a partir de la componente de la posición del indice se proceda a eliminar 1 elemento, y se agreguen
//         indice++; /* despues de cada iteracion incrementamos el indice */
//     }
// }
// document.write('<br>Vector con valores borrados y agregados: <br>');
// for (let f = 0; f < vec.length; f++) {
//     document.write(vec[f] + ' ');
// }
