import { Persona } from "./Persona";
var miObjeto = new Persona(12);
miObjeto.caminar();

//Let / Var / Const

// var : es para variables globales 
// let : variables locales 
/*var foo = 123;
if(true){
    var foo = 456 ;
}
console.log(foo); //456



let foo2 = 123;
if(true){
    let foo2 = 456 ;
}
console.log(foo2); //123

*/
/*
//ES6 Ecma Script - const para valores inmutables 

const foo = 123;
//foo = 456 ; // no permitido 
//las constantes tambien admiten objetos literales por ej :

const foo2 = {
    nombre: "Alex",
    apellido: "Martinez",
    edad: 15
};


//foo2 = { bar : 123}; //error no se permite la modificacion del objeto 

//pero si se puede modificar el contenido de las variables que contiene 
//el objeto literal 

foo2.nombre = "Bruno"; //permitido 


//tipos de datos primitivos 
//boolean 
let isDone: boolean  = true;
console.log("isDone : " + isDone);

//number 
let decimal : number = 6;
console.log(decimal);

let hex: number = 0xf00d;
console.log(hex);

let binary : number = 0b1010;
console.log(binary);

let octal : number = 0o744;
console.log(octal);

*/
//String -cadenas de caracteres 

let color: string = "blue";
color = 'red';

//Tambien podemos utilizar "Templates" para concatenar Strings por ej:
let fullname: string = `Bruno Garzon`;
let age: number = 37;
let sentence: string = `Hello, my name is  ${fullname} . I ll be ${age + 1} years old ...`
console.log(sentence);

let sentence2: string = "Hello, my name is " + fullname + ". I ll be " + (age + 1) + "years old ...";

console.log(sentence2);











