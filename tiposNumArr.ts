/*  Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario)
     Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay. */

import * as rls from "readline-sync"

//1. Creo las variables:
let dimension : number = rls.questionInt("Ingrese la dimension deseada: ");
let positivos : number = 0;
let negativos : number = 0;
let cantCeros : number = 0;

//2. Creo el arreglo con la variable dimension:
let tiposNumArr : number [] = new Array(dimension);

//3. Recorro con un bucle y evaluo los numeros:

for (let i : number = 0; i < dimension; i++) {
    tiposNumArr[i] = rls.questionInt("Ingrese un numero: ");
    if (tiposNumArr[i] > positivos && tiposNumArr[i] != 0){
        positivos = positivos + 1;
    } if (tiposNumArr[i] < negativos && tiposNumArr[i] != 0) {
        negativos = negativos + 1;
    } if (tiposNumArr[i] == 0) {
        cantCeros = cantCeros + 1;
    }
} 
//Muestro en pantalla>
console.log(`Los positivos son: ${positivos}, los negativos son: ${negativos} y los ceros son: ${cantCeros}`);