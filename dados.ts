/*Al tirar un dado tenemos 1/6 de probabilidades de sacar 6
    • Si tiramos dos dados tenemos 1/36 probabilidades de sacar doble 6
    • Al aumentar el número de dados la probabilidad de sacar todos 6 es cada vez menor
    • Escriba un programa que calcule la probabilidad de sacar todos los dados 6 siendo que tiramos N dados (dato
    ingresado por el usuario)*/


import * as rls from "readline-sync";

const caras : number = 6; // Es constante porque cada dado tiene siempre 6 caras
let cantDados : number = rls.questionInt("Ingrese la cantidad de dados: ");
let posibilidad : number = caras ** cantDados; //Hace todas las posibilidades combinando las 6 caras de cada dado

console.log("La posibilidad de sacar 6 en todos los dados es: 1/", posibilidad);

/*Quise usar el simbolo ^ para potencia pero no me ejecuta esa funcion, googleando en w3schools.com 
encontre el reemplazo por ** . */
/* No se como utilizar un ciclo, que es lo que venimos viendo e imagino que eso querran que usemos. */